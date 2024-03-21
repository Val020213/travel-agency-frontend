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


const Countries : string[] = [
  'Cuba',
  'México',
  'España',
  'Estados Unidos',
  'Venezuela',
  'Argentina',
  'Colombia',
  'Perú',
  'Chile',
  'Ecuador',
  'Bolivia',
  'Uruguay',
  'Paraguay',
  'Brasil',
  'Canadá',
  'Francia',
  'Italia',
  'Alemania',
  'Reino Unido',
  'Australia',
  'Japón',
  'China',
  'India',
  'Rusia',
  'Corea del Sur',
  'Indonesia',
  'Malasia',
  'Tailandia',
  'Singapur',
  'Filipinas',
  'Vietnam',
  'Nueva Zelanda',
  'Sudáfrica',
  'Egipto',
  'Marruecos',
  'Nigeria',
  'Kenia',
  'Ghana',
  'Tanzania',
  'Emiratos Árabes Unidos',
  'Arabia Saudita',
  'Qatar',
  'Kuwait',
  'Turquía',
  'Grecia',
  'Portugal',
  'Holanda',
  'Bélgica',
  'Suiza',
  'Suecia',
  'Noruega',
  'Dinamarca'
];
