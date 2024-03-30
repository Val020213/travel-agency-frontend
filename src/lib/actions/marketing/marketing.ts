import { GetAgencyByID } from "@/lib/data/data";
import { ReadSession } from "../session/read";
import { agency, tourist, touristPackage } from "@/lib/entities";

const session = await ReadSession();
// const currentUserID = JSON.parse(session).id;

export async function FetchMarketingAgency(): Promise<agency> {
  const agencia = GetAgencyByID(4); //current IDuserID
  return agencia;
}

export async function FetchAgencyNumberOfReservations(): Promise<number> {
  const response = await fetch(
    `http://127.0.0.1:8000/statistics/agencies-balance${4}`
  );
  console.log("\n hellllllo " + response);
  return 54;
}

export async function FetchAgencyTotalAmount(): Promise<number> {
  // const response = await fetch('http://
  return 321451;
}

export async function FetchAgencyPrimaryData(
  agencyID: number
): Promise<{ reservations: number; totalAmount: number }> {
  const [reservations, totalAmount] = await Promise.all([
    FetchAgencyNumberOfReservations(),
    FetchAgencyTotalAmount(),
  ]);

  return {
    reservations,
    totalAmount,
  };
}

export async function FetchFrecuentlyTourist(): Promise<tourist[]> {
  const tourists: tourist[] = [
    {
      id: 1,
      name: "John Doe",
      nationality: "USA",
    },
    {
      id: 2,
      name: "Jane Smith",
      nationality: "Canada",
    },
  ];

  return tourists;
}

export async function FetchExpensivePackages(): Promise<touristPackage[]> {
  const packages: touristPackage[] = [
    {
      id: 1,
      description:
        "Paquete 1. Destino Habana - Varadero, No dejes pasar esta oportunidad!",
      price: 200.0,
      image: "",
      agencyID: 1,
      excursionID: 1,
      facilities: [],
      duration: 0,
    },
  ];

  return packages;
}
