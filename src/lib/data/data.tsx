import { agency, excursion, tourist, touristPackage, user } from '../entities';
import { ReadSession } from '../actions/session/read';
import { number } from 'zod';

export function TemporalCountries(): string[] {
  return [
    'Argentina',
    'Bolivia',
    'Brasil',
    'Cuba',
    'México',
    'España',
    'Chile',
    'Colombia',
    'Ecuador',
    'Guyana',
    'Paraguay',
    'Perú',
    'Surinam',
    'Uruguay',
    'Venezuela',
  ];
}

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
    console.log('Json not parsed')
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

export async function FetchExcursions(): Promise<excursion[]> {
  const response = await fetch('http://127.0.0.1:8000/excursion/list');

  if (!response.ok) {
    // console.log('Failed to fetch products');
    return [];
  }

  const data = await response.json();

  const excursionsAsProduct: excursion[] = data.map((excursion: any) => {
    return {
      id: excursion.id,
      name: excursion.name,
      description: excursion.description,
      price: excursion.price,
      image: '',
    };
  });

  return excursionsAsProduct;
}

function validateImagePath ( image : string) {
  if(image.startsWith("https://")){
    return image
  }
  return require("@/assets/defaultImage.png")
}

export async function GetAgencyByID(id : number) : Promise<agency> {
  try {
    const response = await fetch(`http://127.0.0.1:8000/agency/get/${id}`)
    if(!response.ok)
    {
      console.log(response.statusText)
      return {} as agency
    }

    const data = await response.json()

    const agencyData : agency = {
      name : data.name,
      address : data.address,
      email : data.email,
      fax : data.fax_number,
      id : data.id,
      image : validateImagePath(data.photo_url)
    }

    return agencyData
  }
  catch{
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
        name : agency.name,
        address: agency.address,
        fax : agency.fax_number,
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

export async function FetchPackages(): Promise<touristPackage[]> {
  try {
    const response = await fetch('http://127.0.0.1:8000/package/list');

    if (!response.ok) {
      // console.log('Failed to fetch products');
      return [];
    }

    const data = await response.json();

    const packageAsProduct: touristPackage[] = data.map((offer: any) => {
      return {
        id: offer.id,
        name: offer.name,
        description: offer.description,
        price: offer.price,
        image: '',
        agencyID: offer.agencyID ?? 0,
        excursionID: offer.excursionID ?? 0,
        facilities: [],
        duration: 0,
      };
    });

    return packageAsProduct;
  }
  catch {
    console.log('Error')
    return []
  }
}

export async function FetchMarketingAgency(): Promise<agency> {
  const session = await ReadSession();
  const currentUserID = JSON.parse(session).id;

  // make fetch to get the agency

  const example: agency = {
    id: 0,
    name: 'P.Sherman & Co.',
    address: 'P.Sherman, 42 Wallaby Way, Sydney',
    email: 'buscandoANemo@gmail.com',
    fax: 3312,
    image:
      'https://th.bing.com/th/id/R.0e06134a3b0f714887ab0c2d99318643?rik=V33yZBth%2byT3Ww&pid=ImgRaw&r=0',
  };

  return example;
}

export async function FetchAgencyNumberOfReservations({
  agencyID,
}: {
  agencyID: number;
}): Promise<number> {
  // const response = await fetch('http://
  return 54;
}

export async function FetchAgencyTotalAmount({
  agencyID,
}: {
  agencyID: number;
}): Promise<number> {
  // const response = await fetch('http://
  return 321451;
}

export async function FetchAgencyPrimaryData(
  agencyID: number
): Promise<{ reservations: number; totalAmount: number }> {
  const [reservations, totalAmount] = await Promise.all([
    FetchAgencyNumberOfReservations({ agencyID: agencyID }),
    FetchAgencyTotalAmount({ agencyID: agencyID }),
  ]);

  return {
    reservations,
    totalAmount,
  };
}


export async function FetchFrecuentlyTourist(agency: number): Promise<tourist[]> {
  const tourists: tourist[] = [
    {
      id: 1,
      name: "John Doe",
      nationality: "USA"
    },
    {
      id: 2,
      name: "Jane Smith",
      nationality: "Canada"
    },
    {
      id: 3,
      name: "Carlos Ramirez",
      nationality: "Mexico"
    },
    {
      id: 4,
      name: "Maria",
      nationality: "Argentina"
    },
    {
      id: 1,
      name: "John Doe",
      nationality: "USA"
    },
    {
      id: 2,
      name: "Jane Smith",
      nationality: "Canada"
    },
    {
      id: 3,
      name: "Carlos Ramirez",
      nationality: "Mexico"
    },
    {
      id: 4,
      name: "Maria",
      nationality: "Argentina"
    },
    {
      id: 1,
      name: "John Doe",
      nationality: "USA"
    },
    {
      id: 2,
      name: "Jane Smith",
      nationality: "Canada"
    },
    {
      id: 3,
      name: "Carlos Ramirez",
      nationality: "Mexico"
    },
    {
      id: 4,
      name: "Maria",
      nationality: "Argentina"
    },
    {
      id: 1,
      name: "John Doe",
      nationality: "USA"
    },
    {
      id: 2,
      name: "Jane Smith",
      nationality: "Canada"
    },
    {
      id: 3,
      name: "Carlos Ramirez",
      nationality: "Mexico"
    },
    {
      id: 4,
      name: "Maria",
      nationality: "Argentina"
    },
    {
      id: 1,
      name: "John Doe",
      nationality: "USA"
    },
    {
      id: 2,
      name: "Jane Smith",
      nationality: "Canada"
    },
    {
      id: 3,
      name: "Carlos Ramirez",
      nationality: "Mexico"
    },
    {
      id: 4,
      name: "Maria",
      nationality: "Argentina"
    },
    {
      id: 1,
      name: "John Doe",
      nationality: "USA"
    },
    {
      id: 2,
      name: "Jane Smith",
      nationality: "Canada"
    },
    {
      id: 3,
      name: "Carlos Ramirez",
      nationality: "Mexico"
    },
    {
      id: 4,
      name: "Maria",
      nationality: "Argentina"
    },
    {
      id: 1,
      name: "John Doe",
      nationality: "USA"
    },
    {
      id: 2,
      name: "Jane Smith",
      nationality: "Canada"
    },
    {
      id: 3,
      name: "Carlos Ramirez",
      nationality: "Mexico"
    },
    {
      id: 4,
      name: "Maria",
      nationality: "Argentina"
    },

  ]

  return tourists
}


export async function FetchExpensivePackages(agencyID: number): Promise<touristPackage[]> {
  const packages: touristPackage[] = [
    {
      id: 1,
      description: "Paquete 1. Destino Habana - Varadero, No dejes pasar esta oportunidad!",
      price: 200.00,
      image: '',
      agencyID: 1,
      excursionID: 1,
      facilities: [],
      duration: 0
    },
    {
      id: 2,
      description: "Paquete 2, Destino Santiago - Trinidad, No dejes pasar esta oportunidad!",
      price: 350.00,
      image: '',
      agencyID: 1,
      excursionID: 1,
      facilities: [],
      duration: 0
    },
    {
      id: 3,
      description: "Paquete 3, Destino Santiago - Trinidad, No dejes pasar esta oportunidad!",
      price: 350.00,
      image: '',
      agencyID: 1,
      excursionID: 1,
      facilities: [],
      duration: 0
    },
    {
      id: 1,
      description: "Paquete 1. Destino Habana - Varadero, No dejes pasar esta oportunidad!",
      price: 200.00,
      image: '',
      agencyID: 1,
      excursionID: 1,
      facilities: [],
      duration: 0
    },
    {
      id: 2,
      description: "Paquete 2, Destino Santiago - Trinidad, No dejes pasar esta oportunidad!",
      price: 350.00,
      image: '',
      agencyID: 1,
      excursionID: 1,
      facilities: [],
      duration: 0
    },
    {
      id: 1,
      description: "Paquete 1. Destino Habana - Varadero, No dejes pasar esta oportunidad!",
      price: 200.00,
      image: '',
      agencyID: 1,
      excursionID: 1,
      facilities: [],
      duration: 0
    },
    {
      id: 2,
      description: "Paquete 2, Destino Santiago - Trinidad, No dejes pasar esta oportunidad!",
      price: 350.00,
      image: '',
      agencyID: 1,
      excursionID: 1,
      facilities: [],
      duration: 0
    },
    {
      id: 1,
      description: "Paquete 1. Destino Habana - Varadero, No dejes pasar esta oportunidad!",
      price: 200.00,
      image: '',
      agencyID: 1,
      excursionID: 1,
      facilities: [],
      duration: 0
    },
    {
      id: 2,
      description: "Paquete 2, Destino Santiago - Trinidad, No dejes pasar esta oportunidad!",
      price: 350.00,
      image: '',
      agencyID: 1,
      excursionID: 1,
      facilities: [],
      duration: 0
    }
  ]

  return packages
}