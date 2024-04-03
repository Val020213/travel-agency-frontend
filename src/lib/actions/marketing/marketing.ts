import { FetchUser, GetAgencyByID, GetAgentByUserID } from "@/lib/data/data";
import { agency, agent, tourist, touristPackage, excursion } from "@/lib/entities";
import { unstable_noStore as noStore } from "next/cache";

export async function FetchUserAgencyID(): Promise<number> {
  const user = await FetchUser();
  const agent = await GetAgentByUserID(user?.id ?? 0);
  return agent?.agencyID ?? 0;
}


export async function FetchMarketingAgency(): Promise<agency> {
  const agencyID = await FetchUserAgencyID() 
  const agencia = GetAgencyByID(agencyID); //current IDuserID
  return agencia;
}

export async function FetchAgencyNumberOfReservations(): Promise<number> {
  try {
    const agencyID = await FetchUserAgencyID() 
    const response = await fetch(
      `http://127.0.0.1:8000/agency/agency-balance/${agencyID}`
    );
    if (response.ok) {
      const data = await response.json();
      const total = data.map((item: any) => item.reservation_count);
      return total;
    }
  } catch (e) {
    console.log(e);
  }
  return 0;
}

export async function FetchAgencyTotalAmount(): Promise<number> {
  try {
    const agencyID = await FetchUserAgencyID() 
    const response = await fetch(
      `http://127.0.0.1:8000/agency/agency-balance/${agencyID}`
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
    const agencyID = await FetchUserAgencyID() 
    const response = await fetch(
      `http://127.0.0.1:8000/agency/most_frecuent_tourists/${agencyID}` //cuando es cero da error
    );
    if (response.ok) {
      const data = await response.json();
      const balance = data.map((item: any) => {
        return {
          reservationTotal: item.reservation_total,
          name: item.name,
          email: item.email,
        };
      });
      return balance;
    }
  } catch (e) {
    console.log(e);
  }
  return [];
}

export async function FetchExpensivePackages(): Promise<touristPackage[]> {
  try {
    const agencyID = await FetchUserAgencyID()
    const response = await fetch(
      `http://127.0.0.1:8000/agency/packages_above_average/${agencyID}`
    );
    if (response.ok) {
      const data = await response.json();
      const expensivePackages: touristPackage[] = data.map((item: any) => {
        return {
          extendedExcursionID: item.extendend_excursion_id,
          duration: item.duration,
          description: item.description,
          excursionID: item.id,
          agencyID: item.agency_id,
          price: item.price,
        };
      });
      // console.log("\n\n\n\n\n\n" + expensivePackages[0].price);
      return expensivePackages;
    }
  } catch (e) {
    console.log(e);
  }
  return [];
}

export async function FetchAgentsInAgency(): Promise<agent[]> {
  try {
    const agencyID = await FetchUserAgencyID()
    const response = await fetch(`http://127.0.0.1:8000/user/list/${agencyID}`); //consulta aqui
    if (response.ok) {
      const data = await response.json();
      const agents: agent[] = data.map((item: any) => {
        return {
          id: item.id,
          username: item.username,
        };
      });
      return agents;
    }
  } catch (e) {
    console.log(e);
  }
  return [];
}

export async function FetchTotalAgentsInAgency(): Promise<number> {
  try {
    const agencyID = await FetchUserAgencyID() 
    const response = await fetch(`http://127.0.0.1:8000/user/list/${agencyID}`); //!consulta aqui
    if (response.ok) {
      const data = await response.json();
      const agents: agent[] = data.map((item: any) => {
        return {
          id: item.id,
          username: item.username,
        };
      });
      return agents.length;
    }
  } catch (e) {
    console.log(e);
  }
  return 0;
}

export async function FetchPackagesInAgency(
  query: string,
  currentPage: number,
  ITEMS_PER_PAGE: number = 10
): Promise<touristPackage[]> {
  noStore();
  try {
    const queryParams = new URLSearchParams({
      skip: "0",
      limit: "1000",
    });
    const agencyID = await FetchUserAgencyID() 
    const response = await fetch(
      `http://127.0.0.1:8000/package/list_by_agency/${agencyID}`
    ); //!cambiar

    if (!response.ok) {
      return [];
    }

    const data = await response.json();

    // Filtrar paquetes basados en la consulta
    const filteredPackages = data.filter((touristPackage: any) => {
      return touristPackage.description
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedPackages = filteredPackages.slice(
      offset,
      offset + ITEMS_PER_PAGE
    );

    const packages = paginatedPackages.map((touristPackage: any) => {
      return {
        id: touristPackage.id,
        price: touristPackage.price,
        description: touristPackage.description,
        duration: touristPackage.duration,
        excursionID: touristPackage.extended_excursion_id,
        image: (touristPackage.photo_url),
      };
    });

    return packages;
  } catch (error) {
    console.error("Error de red:", error);
    // throw new Error('Error al obtener los paquetes.');
  }
  return [];
}

export async function FetchPackagesPagesInAgencies(
  query: string,
  ITEMS_PER_PAGE: number = 10
): Promise<number> {
  noStore();
  try {
    const queryParams = new URLSearchParams({
      skip: "0",
      limit: "1000",
    });
    const agencyID = await FetchUserAgencyID() 
    const response = await fetch(
      `http://127.0.0.1:8000/package/list_by_agency/${agencyID}` //! cambiar
    );

    if (!response.ok) {
      console.error("Failed to fetch packages");
      return 0;
    }

    const data = await response.json();

    // Filtrar paquetes basados en la consulta
    const filteredPackages = data.filter((packagetouristPackage: any) => {
      return packagetouristPackage.description
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    // Calcular el número total de páginas
    const totalPages = Math.ceil(filteredPackages.length / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.error("Error de red:", error);
    // throw new Error('Error al obtener el número total de páginas de los paquetes.');
  }
  return 0;
}

export async function FetchExtendedExcursions(
  query: string,
  currentPage: number,
  ITEMS_PER_PAGE: number = 10
): Promise<excursion[]> {
  noStore();
  try {
    const queryParams = new URLSearchParams({
      skip: '0',
      limit: '1000',
    });
    const agencyID = await FetchUserAgencyID() 
    const response = await fetch(
      `http://127.0.0.1:8000/agency_excursion/get_weekend_excursions/${agencyID}`
    );

    if (!response.ok) {
      console.error('Failed to fetch excursions');
      return [];
    }

    const data = await response.json();

    const filteredExcursions = data.filter((excursion: any) => {
      return (
        excursion.departure_place.toLowerCase().includes(query.toLowerCase()) ||
        excursion.arrival_place.toLowerCase().includes(query.toLowerCase())
      );
    });

    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedExcursions = filteredExcursions.slice(
      offset,
      offset + ITEMS_PER_PAGE
    );

    const excursions: excursion[] = paginatedExcursions.map(
      (excursion: any) => {
        return {
          id: excursion.id,
          departureDate: excursion.departure_day,
          departureTime: excursion.departure_hour,
          departureLocation: excursion.departure_place,
          arrivalDate: excursion.arrival_day,
          arrivalTime: excursion.arrival_hour,
          arrivalLocation: excursion.arrival_place,
          price: excursion.price,
          image: excursion.photo_url,
        };
      }
    );

    return excursions;
  } catch (error) {
    console.error('Network Error:', error);
  }
  return [];
}

export async function FetchExtendedExcursionsPages(
  query: string,
  currentPage: number,
  ITEMS_PER_PAGE: number = 10
): Promise<number> {
  noStore();
  try {
    const queryParams = new URLSearchParams({
      skip: '0',
      limit: '1000',
    });
    const agencyID = await FetchUserAgencyID() 
    const response = await fetch(
      `http://127.0.0.1:8000/agency_excursion/get_weekend_excursions/${agencyID}`
    );

    if (!response.ok) {
      console.error('Failed to fetch excursions');
      return 0;
    }

    const data = await response.json();

    const filteredExcursions = data.filter((excursion: any) => {
      return (
        excursion.departure_place.toLowerCase().includes(query.toLowerCase())
      );
    });

    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedExcursions = filteredExcursions.slice(
      offset,
      offset + ITEMS_PER_PAGE
    );

    const totalPages = Math.ceil(filteredExcursions.length / ITEMS_PER_PAGE);
    return totalPages;

  } catch (error) {
    console.error('Network Error:', error);
  }
  return 0;
}


