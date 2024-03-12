import { category, product } from './definitions';
import {
  IconHome,
  IconBus,
  IconPlane,
  IconBackpack,
  IconReportAnalytics,
  IconSquareRoundedPlus,
} from '@tabler/icons-react';
import { unstable_noStore as noStore } from 'next/cache';

export const categories: category[] = [
  {
    name: 'Home',
    href: '/',
    icon: <IconHome size={24} strokeWidth={1.5} />,
  },
  {
    name: 'Excursiones',
    href: '/excursions',
    icon: <IconBus size={24} strokeWidth={1.5} />,
  },
  {
    name: 'Agencias',
    href: '/agencies',
    icon: <IconPlane size={24} strokeWidth={1.5} />,
  },
  {
    name: 'Paquetes',
    href: '/packages',
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

// Hacer estos metodos para cada tipo de producto luego
export async function FetchExcursions(): Promise<product[]> {
  const response = await fetch('http://127.0.0.1:8000/excursion/list');

  if (!response.ok) {
    console.log('Failed to fetch products');
    return [];
  }

  const data = await response.json();

  const excursionsAsProduct: product[] = data.map((excursion: any) => {
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

export async function FetchAgencies(): Promise<product[]> {
  const response = await fetch('http://127.0.0.1:8000/agency/list');

  if (!response.ok) {
    console.log('Failed to fetch products');
    return [];
  }

  const data = await response.json();

  const agencyAsProduct: product[] = data.map((agency: any) => {
    return {
      id: agency.id,
      name: agency.name,
      description: agency.address,
      price: 0,
      image: '',
    };
  });

  return agencyAsProduct;
}

export async function FetchPackages(): Promise<product[]> {
  const response = await fetch('http://127.0.0.1:8000/offer/list');

  if (!response.ok) {
    console.log('Failed to fetch products');
    return [];
  }

  const data = await response.json();

  const packageAsProduct: product[] = data.map((offer: any) => {
    return {
      id: offer.id,
      name: offer.name,
      description: offer.description,
      price: offer.price,
      image: '',
    };
  });

  return packageAsProduct;
}
