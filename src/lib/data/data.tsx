import {
  agency,
  excursion,
  tourist,
  touristPackage,
  user,
  hotel,
  agent,
  excursionReservation,
  touristType,
} from '../entities';
import { ReadSession } from '../actions/session/read';
import { facility } from '../entities';
import { unstable_noStore as noStore } from 'next/cache';
import { db } from '../utils';

export async function FetchSuggestionCoutries(name: string): Promise<string[]> {
  noStore();
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    // console.log('Failed to charge countries');
    return [];
  }

  const data = await response.json();

  const suggestions: string[] = data.map((country: any) => {
    return country.name.common;
  });

  return suggestions;
}

export async function GetAgentByUserID(
  userID: number
): Promise<agent | undefined> {
  noStore();
  try {
    const response = await fetch(`http://127.0.0.1:8000/user/get/${userID}`);

    if (!response.ok) {
      console.log(response.statusText);
      return;
    }

    const data = await response.json();

    const agentSchema = {
      id: data.id,
      username: data.username,
      token: data.token,
      rol: data.role,
      agencyID: data.agency_id,
    };
    return agentSchema;
  } catch (error) {
    console.log(error);
  }
}

export async function FetchUser(): Promise<user | undefined> {
  noStore();
  const session = await ReadSession();
  try {
    const user: any = JSON.parse(session);
    return user;
  } catch {
    // console.log('Json not parsed')
  }
  return undefined;
}

export async function GetTouristByID(
  userID: number
): Promise<tourist | undefined> {
  try {
    const response = await fetch(`http://127.0.0.1:8000/tourist/get/${userID}`);

    if (response.ok) {
      const data = await response.json();

      const tourist = {
        id: data.id,
        username: data.username,
        name: data.name,
        phone: data.phone,
        email: data.email,
        rol: data.role,
        nationality: data.nationality,
      };

      return tourist;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function FetchCountries(): Promise<string[]> {
  const response = await fetch('https://restcountries.com/v3.1/all');

  if (!response.ok) {
    // console.log('Failed to fetch products');
    return [];
  }

  const data = await response.json();

  const countries: string[] = data.map((country: any) => {
    return country.common;
  });

  return countries;
}

export async function GetAgencyByID(id: number): Promise<agency> {
  noStore();
  try {
    const response = await fetch(`http://127.0.0.1:8000/agency/get/${id}`);
    if (!response.ok) {
      console.log(response.statusText);
      return {} as agency;
    }

    const data = await response.json();

    const agencyData: agency = {
      name: data.name,
      address: data.address,
      email: data.email,
      fax: data.fax_number,
      id: data.id,
      image: data.photo_url,
    };

    return agencyData;
  } catch {
    console.log('DataBase Connection Error');
  }

  return {} as agency;
}
// http://127.0.0.1:8000/excursion/list_related_agencies/{excursion_id}

export async function GetAgencyByExcursionID(
  excursionID: number
): Promise<agency[]> {
  noStore();
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/excursion/list_related_agencies/${excursionID}`
    );

    if (!response.ok) {
      console.log(response.statusText);
      return [];
    }

    const data = await response.json();

    const agencies: agency[] = data.map((agency: any) => {
      return {
        id: agency.id,
        name: agency.name,
        address: agency.address,
        fax: agency.fax_number,
        email: agency.email,
        image: agency.photo_url,
      };
    });

    return agencies;
  } catch (error) {
    console.log(error);
  }

  return [];
}

export async function FetchExcursionsReservationsByTourist(
  tourist_id: number
): Promise<excursionReservation[]> {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/tourist/list_excursion_reservations/${tourist_id}`
    );

    if (response.ok) {
      const data = await response.json();

      const excursions: excursionReservation[] = data.map((excursion: any) => {
        return {
          excursionID: excursion.excursion_id,
          agencyID: excursion.agency_id,
          airline: excursion.air_line,
          AmountOfPeople: excursion.amount_of_people,
          touristID: excursion.tourist_id,
          date: excursion.reservation_date,
        };
      });
      return excursions;
    }
  } catch (error) {
    console.log(error);
  }

  return [];
}

export async function FetchPackagesReservationsByTourist(
  tourist_id: number
): Promise<excursionReservation[]> {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/tourist/list_package_reservations/${tourist_id}`
    );

    if (response.ok) {
      const data = await response.json();
      const resevatePackages: excursionReservation[] = data.map((p: any) => {
        return {
          excursionID: p.excursion_id,
          date: p.reservation_date,
          amountOfPeople: p.amount_of_people,
          airline: p.air_line,
        };
      });
      return resevatePackages;
    }
  } catch (error) {
    console.log(error);
  }

  return [];
}

export async function FetchAgencies(
  skip: number = 0,
  limit: number = 10000
): Promise<agency[]> {
  noStore();
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/agency/list?skip=${skip}&limit=${limit}`
    );

    if (!response.ok) {
      // console.log('Failed to fetch products');
      return [];
    }

    const data = await response.json();

    const agencies: agency[] = data.map((agency: any) => {
      return {
        id: agency.id,
        name: agency.name,
        address: agency.address,
        fax: agency.fax_number,
        email: agency.email,
        image: agency.photo_url,
      };
    });

    return agencies;
  } catch {
    console.log('Error');
    return [];
  }
}

export async function FetchExtended(
  skip: number = 0,
  limit: number = 10000
): Promise<excursion[]> {
  noStore();
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/extended_excursion/list`
    );

    if (!response.ok) {
      // console.log('Failed to fetch products');
      return [];
    }

    const data = await response.json();

    const excursions: excursion[] = data.map((excursion: any) => {
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
    });

    return excursions;
  } catch {
    console.log('Error');
    return [];
  }
}

export async function FetchFilteredAgencies(
  query: string,
  currentPage: number,
  ITEMS_PER_PAGE: number = 10
): Promise<agency[]> {
  noStore();
  try {
    const queryParams = new URLSearchParams({
      skip: '0',
      limit: '1000',
    });
    const response = await fetch(
      `http://127.0.0.1:8000/agency/list?${queryParams.toString()}`
    );

    if (!response.ok) {
      console.error('Failed to fetch agencies');
      return [];
    }
    const data = await response.json();

    const filteredAgencies = data.filter((agency: any) => {
      return (
        agency.name.toLowerCase().includes(query.toLowerCase()) ||
        agency.address.toLowerCase().includes(query.toLowerCase()) ||
        agency.email.toLowerCase().includes(query.toLowerCase())
      );
    });

    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedAgencies = filteredAgencies.slice(
      offset,
      offset + ITEMS_PER_PAGE
    );

    const agencies: agency[] = paginatedAgencies.map((agency: any) => {
      return {
        id: agency.id,
        name: agency.name,
        address: agency.address,
        fax: agency.fax_number,
        email: agency.email,
        image: agency.photo_url,
      };
    });

    return agencies;
  } catch (error) {
    console.error('Network Error:', error);
    // throw new Error('Failed to fetch agencies.');
  }
  return [];
}

export async function FetchAgenciesPages(
  query: string,
  ITEMS_PER_PAGE: number = 10
): Promise<number> {
  noStore();
  try {
    const queryParams = new URLSearchParams({
      skip: '0',
      limit: '1000',
    });
    const response = await fetch(
      `http://127.0.0.1:8000/agency/list?${queryParams.toString()}`
    );

    if (!response.ok) {
      console.error('Failed to fetch agencies');
      return 0;
    }

    const data = await response.json();

    // Filtrar las agencias basadas en el query again...
    const filteredAgencies = data.filter((agency: any) => {
      return (
        agency.name.toLowerCase().includes(query.toLowerCase()) ||
        agency.address.toLowerCase().includes(query.toLowerCase()) ||
        agency.email.toLowerCase().includes(query.toLowerCase())
      );
    });

    // Calcular el número total de páginas
    const totalPages = Math.ceil(filteredAgencies.length / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.error('Network Error:', error);
    throw new Error('Failed to fetch total number of agencies.');
  }
}

//! Aqui deberia filtered cambiar despues de ser necesario
export async function FetchHotels(
  query: string,
  currentPage: number,
  ITEMS_PER_PAGE: number = 10
): Promise<hotel[]> {
  noStore();
  try {
    const queryParams = new URLSearchParams({
      skip: '0',
      limit: '1000',
    });
    const response = await fetch(
      `http://127.0.0.1:8000/hotel/list?${queryParams.toString()}`
    );

    if (!response.ok) {
      console.error('Failed to fetch hotels');
      return [];
    }

    const data = await response.json();

    const filteredHotels = data.filter((hotel: any) => {
      return (
        hotel.name.toLowerCase().includes(query.toLowerCase()) ||
        hotel.address.toLowerCase().includes(query.toLowerCase())
      );
    });

    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedHotels = filteredHotels.slice(
      offset,
      offset + ITEMS_PER_PAGE
    );

    const hotels: hotel[] = paginatedHotels.map((hotel: any) => {
      return {
        id: hotel.id,
        name: hotel.name,
        address: hotel.address,
        category: hotel.category,
      };
    });

    return hotels;
  } catch (error) {
    console.error('Network Error:', error);
  }
  return [];
}

export async function FetchHotelsPages(
  query: string,
  ITEMS_PER_PAGE: number = 10
): Promise<number> {
  noStore();
  try {
    const queryParams = new URLSearchParams({
      skip: '0',
      limit: '1000',
    });
    const response = await fetch(
      `http://127.0.0.1:8000/hotel/list?${queryParams.toString()}`
    );

    if (!response.ok) {
      console.error('Failed to fetch hotels');
      return 0;
    }

    const data = await response.json();

    const filteredHotels = data.filter((hotel: any) => {
      return (
        hotel.name.toLowerCase().includes(query.toLowerCase()) ||
        hotel.address.toLowerCase().includes(query.toLowerCase())
      );
    });

    const totalPages = Math.ceil(filteredHotels.length / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.error('Network Error:', error);
    // throw new Error('Failed to fetch total number of hotels.')
  }
  return 0;
}

export async function GetHotelByID(id: number): Promise<hotel> {
  noStore();
  try {
    const response = await fetch(`http://127.0.0.1:8000/hotel/get/${id}`);
    if (!response.ok) {
      console.log(response.statusText);
      return {} as hotel;
    }

    const data = await response.json();

    const hotelData: hotel = {
      name: data.name,
      address: data.address,
      category: data.category,
      image: data.photo_url,
      id: data.id,
    };

    return hotelData;
  } catch (error) {
    console.log('Database Connection Error:', error);
  }

  return {} as hotel;
}

export async function FetchExcursions(
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
    const response = await fetch(
      `http://127.0.0.1:8000/excursion/list?${queryParams.toString()}`
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

export async function FetchExcursionsReservable(
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
    const response = await fetch(
      `http://127.0.0.1:8000/excursion/list_reservable?${queryParams.toString()}`
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

export async function FetchExcursionsReservableByAgency(
  agency_id: number,
  query: string,
  currentPage: number,
  ITEMS_PER_PAGE: number = 10
): Promise<excursion[]> {
  noStore();
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/excursion/list_reservable/${agency_id}`
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

export async function FetchExcursionsPages(
  query: string,
  ITEMS_PER_PAGE: number = 10
): Promise<number> {
  noStore();
  try {
    const queryParams = new URLSearchParams({
      skip: '0',
      limit: '1000',
    });
    const response = await fetch(
      `http://127.0.0.1:8000/excursion/list?${queryParams.toString()}`
    );

    if (!response.ok) {
      console.error('Failed to fetch excursions');
      return 0;
    }

    const data = await response.json();

    // Filtrar las excursiones basadas en el query
    const filteredExcursions = data.filter((excursion: any) => {
      return (
        excursion.departure_place.toLowerCase().includes(query.toLowerCase()) ||
        excursion.arrival_place.toLowerCase().includes(query.toLowerCase())
      );
    });

    // Calcular el número total de páginas
    const totalPages = Math.ceil(filteredExcursions.length / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.error('Network Error:', error);
    // throw new Error('Failed to fetch total number of excursions.');
  }
  return 0;
}

export async function GetExcursionByID(id: number): Promise<excursion> {
  noStore();
  try {
    const response = await fetch(`http://127.0.0.1:8000/excursion/get/${id}`);
    console.log(id);
    if (!response.ok) {
      console.log('response', response.statusText);
    }

    const data = await response.json();

    const excursionData: excursion = {
      id: data.id,
      departureDate: data.departure_day,
      departureTime: data.departure_hour,
      departureLocation: data.departure_place,
      arrivalDate: data.arrival_day,
      arrivalTime: data.arrival_hour,
      arrivalLocation: data.arrival_place,
      price: data.price,
      image: data.photo_url,
    };
    return excursionData;
  } catch (error) {
    console.log('Database Connection Error:', error);
  }

  return {} as excursion;
}

export async function FetchTourists(): Promise<tourist[]> {
  noStore();
  try {
    const response = await fetch('http://127.0.0.1:8000/tourist/list');

    if (!response.ok) {
      console.error('Failed to fetch tourists');
      return [];
    }

    const data = await response.json();

    const tourists: tourist[] = data.map((tourist: any) => {
      return {
        id: tourist.id,
        name: tourist.name,
        username: tourist.username,
        phone: tourist.phone,
        email: tourist.email,
        nationality: tourist.nationality,
        rol: tourist.role,
      };
    });

    return tourists;
  } catch (error) {
    console.error('Network Error:', error);
  }

  return [];
}

export async function FetchUsers(
  query: string,
  currentPage: number,
  ITEMS_PER_PAGE: number = 10
): Promise<user[]> {
  noStore();
  try {
    const queryParams = new URLSearchParams({
      skip: '0',
      limit: '1000',
    });
    const response = await fetch(
      `http://127.0.0.1:8000/user/list?${queryParams.toString()}`
    );

    if (!response.ok) {
      console.error('Failed to fetch users');
      return [];
    }

    const data = await response.json();

    const filteredUsers = data.filter((user: any) => {
      return user.username.toLowerCase().includes(query.toLowerCase());
    });

    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedUsers = filteredUsers.slice(offset, offset + ITEMS_PER_PAGE);

    const users: user[] = paginatedUsers.map((user: any) => {
      return {
        id: user.id,
        username: user.username,
        rol: user.role,
      };
    });

    return users;
  } catch (error) {
    console.error('Network Error:', error);
    // throw new Error('Failed to fetch users.');
  }
  return [];
}

export async function FetchTouristType(
  query: string,
  currentPage: number,
  ITEMS_PER_PAGE: number = 10
): Promise<touristType[]> {
  noStore();
  try {
    const queryParams = new URLSearchParams({
      skip: '0',
      limit: '1000',
    });
    const response = await fetch(
      `http://127.0.0.1:8000/tourist_type/list?${queryParams.toString()}`
    );

    if (!response.ok) {
      console.error('Failed to fetch users');
      return [];
    }

    const data = await response.json();

    const filteredUsers = data.filter((tourist_type: any) => {
      return tourist_type.name.toLowerCase().includes(query.toLowerCase());
    });

    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedUsers = filteredUsers.slice(offset, offset + ITEMS_PER_PAGE);

    const touristTypes: touristType[] = paginatedUsers.map(
      (tourist_type: any) => {
        return {
          id: tourist_type.id,
          name: tourist_type.name,
        };
      }
    );
    return touristTypes;
  } catch (error) {
    console.error('Network Error:', error);
    // throw new Error('Failed to fetch users.');
  }
  return [];
}

export async function FetchTouristTypePage(
  query: string,
  ITEMS_PER_PAGE: number = 10
): Promise<number> {
  noStore();
  try {
    const queryParams = new URLSearchParams({
      skip: '0',
      limit: '1000',
    });
    const response = await fetch(
      `http://127.0.0.1:8000/tourist_type/list?${queryParams.toString()}`
    );

    if (!response.ok) {
      console.error('Failed to fetch tourists');
      return 0;
    }

    const data = await response.json();

    // Filter tourists based on the query
    const filteredTourists = data.filter((tourist_type: any) => {
      return tourist_type.name.toLowerCase().includes(query.toLowerCase());
    });

    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredTourists.length / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.error('Network Error:', error);
    // throw new Error('Failed to fetch total number of tourists.');
  }
  return 0;
}

export async function FetchUsersPages(
  query: string,
  ITEMS_PER_PAGE: number = 10
): Promise<number> {
  noStore();
  try {
    const queryParams = new URLSearchParams({
      skip: '0',
      limit: '1000',
    });
    const response = await fetch(
      `http://127.0.0.1:8000/tourist/list?${queryParams.toString()}`
    );

    if (!response.ok) {
      console.error('Failed to fetch tourists');
      return 0;
    }

    const data = await response.json();

    // Filter tourists based on the query
    const filteredTourists = data.filter((tourist: any) => {
      return tourist.username.toLowerCase().includes(query.toLowerCase());
    });

    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredTourists.length / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.error('Network Error:', error);
    // throw new Error('Failed to fetch total number of tourists.');
  }
  return 0;
}

export async function FetchFacilities(
  query: string,
  currentPage: number,
  ITEMS_PER_PAGE: number = 10
): Promise<facility[]> {
  noStore();
  try {
    const queryParams = new URLSearchParams({
      skip: '0',
      limit: '1000',
    });
    const response = await fetch(
      `http://127.0.0.1:8000/facility/list?${queryParams.toString()}`
    );

    if (!response.ok) {
      console.error('Failed to fetch facilities');
      return [];
    }

    const data = await response.json();

    // Filtrar facilidades basadas en la consulta
    const filteredFacilities = data.filter((facility: any) => {
      return facility.description.toLowerCase().includes(query.toLowerCase());
    });

    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedFacilities = filteredFacilities.slice(
      offset,
      offset + ITEMS_PER_PAGE
    );

    const facilities: facility[] = paginatedFacilities.map((facility: any) => {
      return {
        id: facility.id,
        description: facility.description,
      };
    });

    return facilities;
  } catch (error) {
    console.error('Error de red:', error);
    // throw new Error('Error al obtener las facilidades.');
  }
  return [];
}

export async function FetchFacilitiesPages(
  query: string,
  ITEMS_PER_PAGE: number = 10
): Promise<number> {
  noStore();
  try {
    const queryParams = new URLSearchParams({
      skip: '0',
      limit: '1000',
    });
    const response = await fetch(
      `http://127.0.0.1:8000/facility/list?${queryParams.toString()}`
    );

    if (!response.ok) {
      console.error('Failed to fetch facilities');
      return 0;
    }

    const data = await response.json();

    // Filtrar facilidades basadas en la consulta
    const filteredFacilities = data.filter((facility: any) => {
      return facility.description.toLowerCase().includes(query.toLowerCase());
    });

    // Calcular el número total de páginas
    const totalPages = Math.ceil(filteredFacilities.length / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.error('Error de red:', error);
    // throw new Error('Error al obtener el número total de páginas de las facilidades.');
  }
  return 0;
}

export async function FetchPackages(
  query: string,
  currentPage: number,
  ITEMS_PER_PAGE: number = 10
): Promise<touristPackage[]> {
  noStore();
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/package/list?limit=${ITEMS_PER_PAGE}&skip=0`
    );

    if (!response.ok) {
      return [];
    }

    const data = await response.json();

    // Filtrar paquetes basados en la consulta
    const filteredPackages = data.filter((touristPackage: any) => {
      return touristPackage.description
        .toLowerCase()
        .includes(query.toLowerCase());
      // return touristPackage.description.toLowerCase().includes(query.toLowerCase());
      // return touristPackage.description.toLowerCase().includes(query.toLowerCase());
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
        agencyID: touristPackage.agency_id,
        excursionID: touristPackage.extended_excursion_id,
        image: touristPackage.photo_url,
      };
    });

    return packages;
  } catch (error) {
    console.error('Error de red:', error);
    // throw new Error('Error al obtener los paquetes.');
  }
  return [];
}

export async function FetchPackagesByAgency(
  agency_id: number,
  query: string,
  currentPage: number,
  ITEMS_PER_PAGE: number = 10
): Promise<touristPackage[]> {
  noStore();
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/package/list_by_agency/${agency_id}`
    );

    if (!response.ok) {
      return [];
    }

    const data = await response.json();

    // Filtrar paquetes basados en la consulta
    const filteredPackages = data.filter((touristPackage: any) => {
      return touristPackage.description
        .toLowerCase()
        .includes(query.toLowerCase());
      // return touristPackage.description.toLowerCase().includes(query.toLowerCase());
      // return touristPackage.description.toLowerCase().includes(query.toLowerCase());
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
        agencyID: touristPackage.agency_id,
        excursionID: touristPackage.extended_excursion_id,
        image: touristPackage.photo_url,
      };
    });

    return packages;
  } catch (error) {
    console.error('Error de red:', error);
    // throw new Error('Error al obtener los paquetes.');
  }
  return [];
}

export async function FetchPackagesPages(
  query: string,
  ITEMS_PER_PAGE: number = 10
): Promise<number> {
  noStore();
  try {
    const queryParams = new URLSearchParams({
      skip: '0',
      limit: '1000',
    });
    const response = await fetch(
      `http://127.0.0.1:8000/package/list?${queryParams.toString()}`
    );

    if (!response.ok) {
      console.error('Failed to fetch packages');
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
    console.error('Error de red:', error);
    // throw new Error('Error al obtener el número total de páginas de los paquetes.');
  }
  return 0;
}

export async function GetPackagesByID(packageID: number) {
  noStore();
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/package/get/${packageID}`
    );

    if (!response.ok) {
      console.log(response.statusText);
      return;
    }

    const data = await response.json();

    const touristPackage = {
      id: data.id,
      price: data.price,
      description: data.description,
      duration: data.duration,
      agency_id: data.agency_id,
      extended_excursion_id: data.extended_excursion_id,
      image: data.photo_url,
    };

    return touristPackage;
  } catch (error) {
    console.log(error);
  }

  return;
}

export async function GetHotelsByExcursionID(
  excursionID: number
): Promise<hotel[]> {
  noStore();
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/hotel/excursion_hotels/${excursionID}`
    );

    if (!response.ok) {
      console.log(response.statusText);
      return [];
    }

    const data = await response.json();
    const hotels = data.map((hotel: any) => {
      return {
        id: hotel.id,
        name: hotel.name,
        address: hotel.address,
        category: hotel.category,
        image: hotel.photo_url,
      };
    });

    return hotels;
  } catch (error) {
    console.log(error);
  }
  return [];
}

export async function GetFacilitiesByPackageId(
  packageID: number
): Promise<facility[]> {
  try {
    db(packageID);
    const response = await fetch(
      `http://127.0.0.1:8000/facility/package_facilities/${packageID}`
    );
    if (!response.ok) {
      const text = await response.text();
      console.log(text);
      return [];
    }

    const data = await response.json();

    const facilities = data.map((facility: any) => {
      return {
        id: facility.id,
        description: facility.description,
      };
    });
    return facilities;
  } catch (error) {
    console.log(error);
  }
  return [];
}
