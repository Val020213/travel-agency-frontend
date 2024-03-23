import {
  IconHome,
  IconBus,
  IconPlane,
  IconBackpack,
  IconReportAnalytics,
  IconSquareRoundedPlus,
} from '@tabler/icons-react';

import { category } from './definitions';

export const categories: category[] = [
  {
    name: 'Home',
    href: '/',
    icon: <IconHome size={ 24 } strokeWidth = { 1.5} />,
  },
  {
    name: 'Excursiones',
    href: '/tourist/excursions',
    icon: <IconBus size={ 24 } strokeWidth = { 1.5} />,
  },
{
  name: 'Agencias',
    href: '/tourist/agencies',
      icon: <IconPlane size={ 24 } strokeWidth = { 1.5} />,
  },
{
  name: 'Paquetes',
    href: '/tourist/packages',
      icon: <IconBackpack size={ 24 } strokeWidth = { 1.5} />,
  },
];

export const enterpriseCategories: category[] = [
  {
    name: 'Estadísticas',
    href: '/dashboard',
    icon: <IconReportAnalytics size={ 24} strokeWidth = { 1.5} />,
  },
{
  name: 'Crear Oferta',
    href: '/dashboard/createOffer',
      icon: <IconSquareRoundedPlus size={ 24 } strokeWidth = { 1.5} />,
  },
{
  name: 'Crear Excursion',
    href: '/dashboard/createExcursion',
      icon: <IconSquareRoundedPlus size={ 24 } strokeWidth = { 1.5} />,
  }
];

export const adminCategories: category[] = [
  ...enterpriseCategories,
  {
    name: 'Crear Usuario',
    href: '/dashboard/createUser',
    icon: <IconSquareRoundedPlus size={ 24} strokeWidth = { 1.5} />,
  },
{
  name: 'Crear Facilidad',
    href: '/dashboard/createFacility',
      icon: <IconSquareRoundedPlus size={ 24 } strokeWidth = { 1.5} />,
  },
{
  name: 'Crear Hotel',
    href: 'dahboard/createHotel',
      icon: <IconSquareRoundedPlus size={ 24 } strokeWidth = { 1.5} />,
  }
]