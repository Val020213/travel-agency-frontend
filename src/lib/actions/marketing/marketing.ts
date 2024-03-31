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
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/agency/agency-balance/4`
    );
    if (response.ok) {
      const data = await response.json();
      const balance = data.map((item: any) => item.reservation_total);
      return balance;
    }
  } catch (e) {
    console.log(e);
  }
  return 0;
}

export async function FetchAgencyTotalAmount(): Promise<number> {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/agency/agency-balance/4`
    );
    if (response.ok) {
      const data = await response.json();
      const balance = data.map((item: any) => item.reservation_total);
      return balance;
    }
  } catch (e) {
    console.log(e);
  }
  return 0;
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
    try {
    const response = await fetch(
      `http://127.0.0.1:8000/agency/most_frecuent_tourists/4` //cuando es cero da error
    );
    if (response.ok) {
      const data = await response.json();
      const balance = data.map((item: any) => item.reservation_total);
      return balance;
    }
  } catch (e) {
    console.log(e);
  }
  return [];
  
  // const tourists: tourist[] = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     nationality: "USA",
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     nationality: "Canada",
  //   },
  // ];

  // return tourists;
}

export async function FetchExpensivePackages(): Promise<touristPackage[]> {
      try {
    const response = await fetch(
      `http://127.0.0.1:8000/agency/packages_above_average/4`
    );
    if (response.ok) {
      const data = await response.json();
      const expensivePackages : touristPackage[] = data.map((item: any) => {return{
        extendedExcursionID: item.extendend_excursion_id,
        duration: item.duration,
        description: item.description,
        excursionID: item.id,
        agencyID: item.agency_id,
        price: item.price
      }});
      console.log("\n\n\n\n\n\n" + expensivePackages[0].price);
      return expensivePackages;
    }
  } catch (e) {
    console.log(e);
  }
  return [];
}
