export type entity = {
    id: number;
}

export type agency  = entity &{
    name: string;
    address: string;
    email: string;
    fax: number;
}

export type offer = entity &{
    price: number;
}

export type excursion = entity & offer &{
    departureLocation: string;
    arrivalLocation: string;
    departureDate: Date;
    arrivalDate: Date;
    departureTime: string;
    arrivalTime: string;
    hotelID?: number;
}

export type hotel = entity &{
    name: string;
    address: string;
    category: number;
}


export type facility = entity &{
    description: string;
}

export type rol = 'admin' | 'tourist' | 'marketing' | 'agent';

export type user = entity &{
    username: string;
    // password: string;
    // email: string;
    webToken: string;
    rol: rol;
}