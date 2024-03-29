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
    href: '/marketing',
    icon: <IconReportAnalytics size={24} strokeWidth={1.5} />,
  },
  {
    name: 'Oferta',
    href: '/marketing/createOffer',
    icon: <IconSquareRoundedPlus size={24} strokeWidth={1.5} />,
  },
  {
    name: 'Excursion',
    href: '/marketing/createExcursion',
    icon: <IconSquareRoundedPlus size={24} strokeWidth={1.5} />,
  },
];

export const adminCategories: category[] = [
  {
    name: 'Agencias',
    href: '/admin/agencies',
    icon: <IconSquareRoundedPlus size={24} strokeWidth={1.5} />,
  },
  {
    name: 'Usuario',
    href: '/admin/users',
    icon: <IconSquareRoundedPlus size={24} strokeWidth={1.5} />,
  },
  {
    name: 'Hotel',
    href: '/admin/hotels',
    icon: <IconSquareRoundedPlus size={24} strokeWidth={1.5} />,
  },
  {
    name: 'Facilidad',
    href: '/admin/facilities',
    icon: <IconSquareRoundedPlus size={24} strokeWidth={1.5} />,
  },
  {
    name: 'Excursiones',
    href: '/admin/excursions',
    icon: <IconSquareRoundedPlus size={24} strokeWidth={1.5} />,
  },
];
