import { agency, excursion, tourist, touristPackage, user, hotel } from '../entities';
import { ReadSession } from '../actions/session/read';
import { facility } from '../entities';

export async function FetchSuggestionCoutries(name: string): Promise<string[]> {
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

export async function FetchUser(): Promise<user | undefined> {
  const session = await ReadSession()
  try {
    const user: user = JSON.parse(session)
    return user
  }
  catch {
    // console.log('Json not parsed')
  }
  return undefined
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


export function validateImagePath(image: string) {
  if (image && image.startsWith("https://")) {
    return image
  }
  const defaultImage: string = require('@/assets/defaultImage.png')
  return defaultImage
}

export async function GetAgencyByID(id: number): Promise<agency> {
  try {
    const response = await fetch(`http://127.0.0.1:8000/agency/get/${id}`)
    if (!response.ok) {
      console.log(response.statusText)
      return {} as agency
    }

    const data = await response.json()

    const agencyData: agency = {
      name: data.name,
      address: data.address,
      email: data.email,
      fax: data.fax_number,
      id: data.id,
      image: validateImagePath(data.photo_url)
    }

    return agencyData
  }
  catch {
    console.log('DataBase Connection Error')
  }

  return {} as agency
}

export async function FetchAgencies(): Promise<agency[]> {
  try {
    const response = await fetch('http://127.0.0.1:8000/agency/list');

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
        image: validateImagePath(agency.photo_url)
      };
    });

    return agencies;
  }
  catch {
    console.log('Error')
    return []
  }
}

const ITEMS_PER_PAGE = 10;

export async function FetchFilteredAgencies(
  query: string,
  currentPage: number,
): Promise<agency[]> {

  try {
    const queryParams = new URLSearchParams({
      skip: "0",
      limit: "1000"
    });
    const response = await fetch(`http://127.0.0.1:8000/agency/list?${queryParams.toString()}`);

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
    const paginatedAgencies = filteredAgencies.slice(offset, offset + ITEMS_PER_PAGE);

    const agencies: agency[] = paginatedAgencies.map((agency: any) => {
      return {
        id: agency.id,
        name: agency.name,
        address: agency.address,
        fax: agency.fax_number,
        email: agency.email,
        image: validateImagePath(agency.photo_url),
      };
    });

    return agencies;
  } catch (error) {
    console.error('Network Error:', error);
    // throw new Error('Failed to fetch agencies.');
  }
  return []
}

export async function FetchAgenciesPages(query: string): Promise<number> {
  try {
    const queryParams = new URLSearchParams({
      skip: "0",
      limit: "1000"
    });
    const response = await fetch(`http://127.0.0.1:8000/agency/list?${queryParams.toString()}`);

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
): Promise<hotel[]> {
  try {

    const queryParams = new URLSearchParams({
      skip: "0",
      limit: "1000"
    });
    const response = await fetch(`http://127.0.0.1:8000/hotel/list?${queryParams.toString()}`);


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
    const paginatedHotels = filteredHotels.slice(offset, offset + ITEMS_PER_PAGE);

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
    // throw new Error('Failed to fetch hotels.');
  }
  return []
}


export async function FetchHotelsPages(query: string): Promise<number> {
  try {
    const queryParams = new URLSearchParams({
      skip: "0",
      limit: "1000"
    });
    const response = await fetch(`http://127.0.0.1:8000/hotel/list?${queryParams.toString()}`);

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
      image: validateImagePath(data.photo_url),
      id: data.id,
    };

    return hotelData;
  } catch (error) {
    console.log('Database Connection Error:', error);
  }

  return {} as hotel;
}



export async function FetchExcursions(query: string, currentPage: number): Promise<excursion[]> {
  try {

    const queryParams = new URLSearchParams({
      skip: "0",
      limit: "1000"
    });
    const response = await fetch(`http://127.0.0.1:8000/excursion/list?${queryParams.toString()}`);


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
    const paginatedExcursions = filteredExcursions.slice(offset, offset + ITEMS_PER_PAGE);

    const excursions: excursion[] = paginatedExcursions.map((excursion: any) => {
      return {
        id: excursion.id,
        departureDate: excursion.departure_day,
        departureTime: excursion.departure_hour,
        departureLocation: excursion.departure_place,
        arrivalDate: excursion.arrival_day,
        arrivalTime: excursion.arrival_hour,
        arrivalLocation: excursion.arrival_place,
        price: excursion.price,
        image: validateImagePath(excursion.photo_url)
      };
    });

    return excursions;
  } catch (error) {
    console.error('Network Error:', error);
  }
  return [];
}



export async function FetchExcursionsPages(query: string): Promise<number> {
  try {
    const queryParams = new URLSearchParams({
      skip: "0",
      limit: "1000"
    });
    const response = await fetch(`http://127.0.0.1:8000/excursion/list?${queryParams.toString()}`);


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
  try {
    const response = await fetch(`http://127.0.0.1:8000/excursion/get/${id}`);
    console.log(id)
    if (!response.ok) {
      console.log('response',response.statusText);
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
      image: validateImagePath(data.image)
    };
    console.log('dta', excursionData)
    return excursionData;
  } catch (error) {
    console.log('Database Connection Error:', error);
  }

  return {} as excursion;
}

export async function FetchUsers(
  query: string,
  currentPage: number,
): Promise<user[]> {
  try {
    const queryParams = new URLSearchParams({
      skip: "0",
      limit: "1000"
    });
    const response = await fetch(`http://127.0.0.1:8000/user/list?${queryParams.toString()}`);

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
        rol: user.role
      };
    });

    return users;
  } catch (error) {
    console.error('Network Error:', error);
    // throw new Error('Failed to fetch users.');
  }
  return [];
}

export async function FetchUsersPages(query: string): Promise<number> {
  try {
    const queryParams = new URLSearchParams({
      skip: "0",
      limit: "1000"
    });
    const response = await fetch(`http://127.0.0.1:8000/tourist/list?${queryParams.toString()}`);

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
): Promise<facility[]> {
  try {
    const queryParams = new URLSearchParams({
      skip: "0",
      limit: "1000"
    });
    const response = await fetch(`http://127.0.0.1:8000/facility/list?${queryParams.toString()}`);

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
    const paginatedFacilities = filteredFacilities.slice(offset, offset + ITEMS_PER_PAGE);

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

export async function FetchFacilitiesPages(query: string): Promise<number> {
  try {
    const queryParams = new URLSearchParams({
      skip: "0",
      limit: "1000"
    });
    const response = await fetch(`http://127.0.0.1:8000/facility/list?${queryParams.toString()}`);

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
): Promise<touristPackage[]> {
  try {
    const queryParams = new URLSearchParams({
      skip: "0",
      limit: "1000"
    });
    const response = await fetch(`http://127.0.0.1:8000/package/list`);
    console.log("\n\n\n\n\n" + response + "\n\n\n\n\n") 
    
    if (!response.ok) {
      return [];
    }
    
    const data = await response.json();

    // Filtrar paquetes basados en la consulta
    const filteredPackages = data.filter((touristPackage: any) => {
      return touristPackage.description.toLowerCase().includes(query.toLowerCase());
      // return touristPackage.description.toLowerCase().includes(query.toLowerCase());
      // return touristPackage.description.toLowerCase().includes(query.toLowerCase());
    });

    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedPackages = filteredPackages.slice(offset, offset + ITEMS_PER_PAGE);

    const packages = paginatedPackages.map((touristPackage: any) => {
      console.log(touristPackage)
      return {
        id: touristPackage.id,
        price: touristPackage.price,
        description: touristPackage.description,
        duration: touristPackage.duration,
        agencyID: touristPackage.agency_id,
        excursionID: touristPackage.extended_excursion_id,
        image: validateImagePath(touristPackage.photo_url),
      };
    });

    return packages;
  } catch (error) {
    console.error('Error de red:', error);
    // throw new Error('Error al obtener los paquetes.');
  }
  return [];
}

export async function FetchPackagesPages(query: string): Promise<number> {
  try {
    const queryParams = new URLSearchParams({
      skip: "0",
      limit: "1000"
    });
    const response = await fetch(`http://127.0.0.1:8000/package/list?${queryParams.toString()}`);

    if (!response.ok) {
      console.error('Failed to fetch packages');
      return 0;
    }

    const data = await response.json();

    // Filtrar paquetes basados en la consulta
    const filteredPackages = data.filter((packagetouristPackage: any) => {
      return packagetouristPackage.description.toLowerCase().includes(query.toLowerCase());
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
  try {
    const response = await fetch(`http://127.0.0.1:8000/package/get/${packageID}`)

    if (!response.ok) {
      console.log(response.statusText)
      return 
    }

    const data = await response.json()

    const touristPackage = {
      id: data.id,
      price: data.price,
      description: data.description,
      duration: data.duration,
      agency_id: data.agency_id,
      extended_excursion_id: data.extended_excursion_id,
      image: validateImagePath(data.photo_url),
    }

    return touristPackage
  }
  catch (error) {
    console.log(error)
  }

  return
}

export async function GetHotelsByExcursionID(excursionID : number) : Promise<hotel[]> {
  try{
    const response = await fetch(`http://127.0.0.1:8000/hotel/excursion_hotels/${excursionID}`)

    if(!response.ok){
      console.log(response.statusText)
      return []
    }

    const data = await response.json()
    const hotels = data.map((hotel : any) =>
    {
      return {
        id : hotel.id,
        name : hotel.name,
        address : hotel.address,
        category : hotel.category,
        image : hotel.photo_url
      }
    })

    return hotels
  }
  catch(error){
    console.log(error)
  }
  return[]
}