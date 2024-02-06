"use client";
import { useFetch } from "../hooks/useFetch";

const UseFetchComponent = (url: string) => {
  const { data, error, loading } = useFetch(url);
  return (
    <div>
      <p>
        {loading && "Loading..."}
        {error && "Error"}
        {data?.map((item: any) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </p>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <div>
        {UseFetchComponent("https://jsonplaceholder.typicode.com/posts")}
      </div>
    </>
  );
}
