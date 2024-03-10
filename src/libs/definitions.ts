// define all types and interfaces here
import { ReactElement } from 'react';

// hint: prisma
export type category = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

export type tourist = {
  id: number;
  name: string;
  nationality: string;
};

export type user = {
  name: string;
  username: string;
  nationality: string;
  email: string;
  // password: string,
  telefono: string;
};

export type product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  tag?: string;
  category: string;
};
