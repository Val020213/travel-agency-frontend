'use server';

import { date, z } from 'zod';
import { redirect } from 'next/navigation';
import { excursionReservation } from '../../entities';
import { touristPackageReservation } from '../../entities';
import { revalidatePath } from 'next/cache';
import { db } from '@/lib/utils';

type ExcursionReservationFormState = {};

type TouristPackageReservationFormState = {};

export async function CreateExcursionReservation() {}

const CreateTouristPackageSchema = z.object({
  touristID: z.string({
    invalid_type_error: 'id invalido de turista',
    required_error: 'Introduce un turista',
  }),
  amountOfPeople: z.string({
    invalid_type_error: 'cantidad de personas invalida',
    required_error: 'Introduce una cantidad de personas',
  }),
  airline: z.string({
    invalid_type_error: 'aerolinea invalida',
    required_error: 'Introduce una aereolinea',
  }).min(1, {
    message: 'Parece que ha ocurrido un error, escoge una aerolinea valida',
  })
});

export type TouristPackageState = {
  message?: string;
  errors?: {
    touristID?: string[];
    amountOfPeople?: string[];
    airline?: string[];
  };
};

export async function CreateTouristPackageReservation(
  packageID: number,
  prevState: TouristPackageState,
  formData: FormData
): Promise<TouristPackageState> {


  const validatedFields = CreateTouristPackageSchema.safeParse({
    touristID: formData.get('touristID'),
    amountOfPeople: formData.get('amountOfPeople'),
    airline: formData.get('airline'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: validatedFields.error.message,
    };
  }

  const { touristID, amountOfPeople, airline } = validatedFields.data;

  const data = {
    package_id: packageID,
    tourist_id: touristID,
    amount_of_people: amountOfPeople,
    air_line: airline,
    reservation_date: new Date().getDate(),
  };

  try {
    const response = await fetch(
      'http://127.0.0.1:8000/package_reservation/create',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const text = await response.text();
      return {
        message: text,
        errors: {},
      };
    }

    revalidatePath('/');
  } catch (error) {
    console.log(error);
    return {
      message: 'Error al crear la reserva',
      errors: {},
    };
  }

  redirect('/');
  return {
    message: 'Reserva creada exitosamente',
    errors: {},
  };
}

const FormSchema = z.object({
  id: z.string(),
  image: z.string(),
  name: z.string({
    invalid_type_error: 'invalid_type_error',
    required_error: 'Introduce un nombre para la agencia',
  }),
  fax: z.string({
    invalid_type_error: 'invalid_type_error',
    required_error: 'Introduce un número de fax',
  }),
  address: z.string({
    invalid_type_error: 'invalid_type_error',
    required_error: 'Introduce una dirección',
  }),
  email: z
    .string({
      invalid_type_error: 'invalid_type_error',
      required_error: 'Introduce un correo electrónico',
    })
    .email({
      message: 'Introduce un correo electrónico válido',
    }),
});

export type AgencyFormState = {
  message?: string;
  errors?: {
    image?: string[];
    name?: string[];
    fax?: string[];
    address?: string[];
    email?: string[];
  };
};

const AgencySchema = FormSchema.omit({ id: true });

export async function CreateAgencyAction(
  prevState: AgencyFormState,
  formData: FormData
) {
  const validatedFields = AgencySchema.safeParse({
    name: formData.get('name') as string,
    fax: formData.get('fax') as string,
    address: formData.get('address') as string,
    email: formData.get('email') as string,
    image: formData.get('image') as string,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: validatedFields.error.message,
    };
  }

  const { name, fax, address, email, image } = validatedFields.data;
  const data = {
    name: name,
    address: address,
    fax_number: fax,
    email: email,
    photo_url: image,
  };
  try {
    const response = await fetch('http://127.0.0.1:8000/agency/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return {
        message: response.statusText,
        errors: {},
      };
    }
  } catch (error) {
    console.log(error);
    return {
      message: 'Error al crear la agencia',
      errors: {},
    };
  }

  revalidatePath('/admin/agencies');
}
