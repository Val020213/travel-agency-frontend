import { useSearchParams } from 'next/navigation';

export function UpdateSearchParams(name: string, value: string){
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  params.set(name, value);
  return params.toString();
};
