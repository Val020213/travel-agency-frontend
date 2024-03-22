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

export type country = {
  id: number;
  name: string;
  iso2: string;
}