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

const EndpointsGET: { [key: string]: string } = {
  excursions: '',
  agencies: '',
  packages: '',
};

export async function FetchProduct(type: string): Promise<product[]> {
  noStore();
  const response = await fetch(EndpointsGET[type]);
  if (!response.ok) {
    console.log('Failed to fetch products');
    return [];
  }

  const data = await response.json();
  return data;
}

// Hacer estos metodos para cada tipo de producto luego
export async function FetchExcursions(): Promise<product[]> {
  return FetchProduct('excursions');
}

export async function FetchAgencies(): Promise<product[]> {
  return FetchProduct('agencies');
}

export async function FetchPackages(): Promise<product[]> {
  return FetchProduct('packages');
}
