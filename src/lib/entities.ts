export type entity = {
  id: number;
};

export type visual = {
  image: string;
};

export type agency = entity &
  visual & {
    name: string;
    address: string;
    email: string;
    fax: number;
  };

export type offer = entity & {
  price: number;
};

export type excursion = entity &
  offer &
  visual & {
    departureLocation: string;
    arrivalLocation: string;
    departureDate: string;
    arrivalDate: string;
    departureTime: string;
    arrivalTime: string;
    hotels?: hotel[];
};

export type hotel = entity &
  visual & {
    name: string;
    address: string;
    category: number;
};

export type facility = entity & {
  description: string;
};

export type rol = 'admin' | 'tourist' | 'marketing' | 'agent';

export type user = entity & {
  username: string;
  token: string;
  rol: rol;
  agencyID: number,
  agencyName: string
};

export type agent = entity & {
  username: string;
  token: string;
  rol: rol;
  agencyID: number;
};

export type touristPackage = entity &
  offer &
  visual & {
    agencyID: number;
    excursionID: number;
    facilities: facility[];
    description: string;
    duration: number;
  };

export type tourist = entity & {
  name: string;
  username : string
  phone : string;
  email : string;
  nationality: string;
  email: string,
  reservationTotal?: string
};

export type loginTokenPost = {
  accessToken: string;
  tokenType: string;
  role: rol;
};

export type Date = {
  departureDay: string;
  // ... others
};

export type reservation = {
  touristID: number;
  date: Date;
};

export type excursionReservation = {
  excursionID: number;
  reservation: reservation;
};

export type touristPackageReservation = {
  touristPackageID: number;
  reservation: reservation;
};
