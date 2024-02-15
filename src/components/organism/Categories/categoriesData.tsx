import React from 'react';
import {
  IconCategory2,
  IconPlane,
  IconBus,
  IconBackpack,
} from '@tabler/icons-react';

const defaultSize = 24;
const defaultStrokeWidth = 1.5;

export const categoriesData: ICategory[] = [
  {
    shortName: 'Todos',
    name: 'Todas nuestras ofertas',
    description:
      'Descubre todas nuestras increíbles ofertas del mes. Tenemos experiencias nuevas, precios para todos los presupuestos y estamos aquí para hacer realidad tus sueños de viaje.',
    icon: (
      <IconCategory2
        size={defaultSize}
        stroke={defaultStrokeWidth}
        className='text-current'
      />
    ),
  },
  {
    shortName: 'Excursiones',
    name: 'Fortalece tus lazos familiares con nuestras excursiones',
    description:
      'Crea recuerdos inolvidables con nuestras emocionantes excursiones. Tenemos opciones para todas las edades y garantizamos diversión para toda la familia.',
    icon: (
      <IconBus
        size={defaultSize}
        stroke={defaultStrokeWidth}
        className='text-current'
      />
    ),
  },
  {
    shortName: 'Agencias',
    name: 'Descubre el mundo con nuestras agencias',
    description:
      'Explora todos los países sin límites con nuestras agencias de viaje. Somos una compañía sin fronteras y estamos aquí para ayudarte a planificar la aventura de tus sueños.',
    icon: (
      <IconPlane
        size={defaultSize}
        stroke={defaultStrokeWidth}
        className='text-current'
      />
    ),
  },
  {
    shortName: 'Paquetes',
    name: 'Vive una experiencia única con nuestros paquetes',
    description:
      'Deja que nos encarguemos de todo, para que tú solo disfrutes. Nuestros paquetes incluyen hotel, excursiones y las mejores ofertas para unas vacaciones inolvidables.',
    icon: (
      <IconBackpack
        size={defaultSize}
        stroke={defaultStrokeWidth}
        className='text-current'
      />
    ),
  },
];
