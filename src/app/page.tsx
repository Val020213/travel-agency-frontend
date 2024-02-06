"use client";
import { useFetch } from "../hooks/useFetch";
import { IconChevronRight } from "@tabler/icons-react";

const UseFetchComponent = (url: string) => {
  const { data, error, loading } = useFetch(url);
  return (
    <div className="flex flex-wrap gap-4 p-32">
      {loading ? "Loading..." : null}
      {!loading && error ? "Error" : null}
      {data?.map((item: any) => (
        <div
          key={item.id}
          className="flex flex-col p-8 w-72 shadow-xl bg-extends-light-blue-50 text-black rounded-lg gap-4"
        >
          <span className="text-2xl">{item.title}</span>
          <span className="text-lg">{item.body}</span>
          <span className="text-lg flex flex-row justify-start items-center">
            {"Go"}
            <IconChevronRight />
          </span>
        </div>
      ))}
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
