import { useState, useEffect } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [controller, setController] = useState<AbortController>(
    new AbortController()
  );

  useEffect(() => {
    setController(new AbortController());
    setLoading(true);
    fetch(url, { signal: controller.signal })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [url, controller]);
  return { data, error, loading };
};

// const handleCancelRequest = (controller: AbortController, setError: any) => {
//   if (controller) {
//     controller.abort();
//     setError(new Error("Request canceled by user"));
//   }
// };
