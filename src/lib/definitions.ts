export type category = {
  name: string;
  href: string;
  icon: React.ReactNode;
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


export const othersLinks: Record<string, string> = {
  profile: '/tourist/profile',
  marketingProfile: '/profile',
  payment: '/tourist/payment',
  openRegister: '?register=true',
  openLogin: '?login=true',
};

