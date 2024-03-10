import { category } from './definitions';
import {
  IconHome,
  IconBus,
  IconPlane,
  IconBackpack,
  IconReportAnalytics,
  IconSquareRoundedPlus,
} from '@tabler/icons-react';
import { unstable_noStore as noStore } from 'next/cache';
import { tourist } from './definitions';

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

export const categoriesNames = categories.map((category) => category.name);

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

export async function FetchTourists(): Promise<tourist[]> {
  noStore();
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    throw new Error('Failed to fetch tourists');
  }
  const data = await res.json();
  return data;
}
