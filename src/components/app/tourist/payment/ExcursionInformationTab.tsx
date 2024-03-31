'use client'
import { GetExcursionByID } from "@/lib/data/data";



export async function ExcusionInformationTab({ id }: { id: number }) {
  const excursion = await GetExcursionByID(id);
  console.log(excursion);
  return <div>{'excursion'}</div>;
}
