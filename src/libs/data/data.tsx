import { category, product } from '../definitions';
import {
  IconHome,
  IconBus,
  IconPlane,
  IconBackpack,
  IconReportAnalytics,
  IconSquareRoundedPlus,
} from '@tabler/icons-react';
import { agency, excursion, touristPackage } from '../entities';


export const othersLinks: Record<string, string> = {
  profile: '/tourist/profile',
  dashboardProfile: '/profile',
  payment: '/tourist/payment',
  openRegister: '?register=true',
  openLogin: '?login=true',
}


export const categories: category[] = [
  {
    name: 'Home',
    href: '/',
    icon: <IconHome size={24} strokeWidth={1.5} />,
  },
  {
    name: 'Excursiones',
    href: '/tourist/excursions',
    icon: <IconBus size={24} strokeWidth={1.5} />,
  },
  {
    name: 'Agencias',
    href: '/tourist/agencies',
    icon: <IconPlane size={24} strokeWidth={1.5} />,
  },
  {
    name: 'Paquetes',
    href: '/tourist/packages',
    icon: <IconBackpack size={24} strokeWidth={1.5} />,
  },
];

export const enterpriseCategories: category[] = [
  {
    name: 'Estadísticas',
    href: '/dashboard',
    icon: <IconReportAnalytics size={24} strokeWidth={1.5} />,
  },
  {
    name: 'Crear Oferta',
    href: '/dashboard/createOffer',
    icon: <IconSquareRoundedPlus size={24} strokeWidth={1.5} />,
  },
];


export async function FetchExcursions(): Promise<excursion[]> {
  const response = await fetch('http://127.0.0.1:8000/excursion/list');

  if (!response.ok) {
    console.log('Failed to fetch products');
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
    console.log('Failed to fetch products');
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
    console.log('Failed to fetch products');
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
