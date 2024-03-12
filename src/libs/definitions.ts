export type Session = {
  username: string;
  expires: Date;
};

// hint: prisma
export type category = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

export type User = {
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
