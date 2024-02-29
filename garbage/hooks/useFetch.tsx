import { useState, useEffect } from 'react';

export const useFetch = (url: string) => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    fetch(url, { signal: controller.signal })
      .then((response) => response.json())
      .then((fetchedData) => {
        console.log(fetchedData);
        setData(fetchedData);
      })
      .catch((fetchError) => {
        console.log(fetchError);
        setError(fetchError);
      })
      .finally(() => {
        setError(null);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, error, loading };
};
