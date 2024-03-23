import { agency, excursion, touristPackage } from '../entities';

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
    }
  })

  if (!response.ok) {
    // console.log('Failed to charge countries');
    return []
  }

  const data = await response.json();

  const suggestions: string[] = data.map((country: any) => {
    return country.name.common
  })

  return suggestions
}

export async function FetchCountries(): Promise<string[]> {

  const response = await fetch('https://restcountries.com/v3.1/all');

  if (!response.ok) {
    // console.log('Failed to fetch products');
    return [];
  }

  const data = await response.json();

  const countries: string[] = data.map((country: any) => {
    return country.common
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

export async function FetchAgencies(): Promise<agency[]> {
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
      description: agency.address,
      price: 0,
      image: '',
    };
  });

  return agencies;
}

export async function FetchPackages(): Promise<touristPackage[]> {
  const response = await fetch('http://127.0.0.1:8000/offer/list');

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
