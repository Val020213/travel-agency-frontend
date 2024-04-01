'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { FetchUser } from '@/lib/data/data';
import { use } from 'react';

const CreateReservationSchema = z.object({
  touristID: z.string({
    invalid_type_error: 'id invalido de turista',
    required_error: 'Introduce un turista',
  }),
  amountOfPeople: z.string({
    invalid_type_error: 'cantidad de personas invalida',
    required_error: 'Introduce una cantidad de personas',
  }),
  airline: z
    .string({
      invalid_type_error: 'aerolinea invalida',
      required_error: 'Introduce una aereolinea',
    })
    .min(1, {
      message: 'Parece que ha ocurrido un error, escoge una aerolinea valida',
    }),
});

export type TouristReservationState = {
  message?: string;
  errors?: {
    touristID?: string[];
    amountOfPeople?: string[];
    airline?: string[];
  };
};

export async function CreateTouristPackageReservation(
  packageID: number,
  prevState: TouristReservationState,
  formData: FormData
): Promise<TouristReservationState> {
  const validatedFields = CreateReservationSchema.safeParse({
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

  const user = await FetchUser();
  user?.rol === 'agent' ? redirect('/agent') : redirect('/');
  
  return {
    message: 'Reserva creada exitosamente',
    errors: {},
  };
}

export async function CreateTouristExcursionReservation(
  excursionID: number,
  prevState: TouristReservationState,
  formData: FormData
): Promise<TouristReservationState> {
  const validatedFields = CreateReservationSchema.safeParse({
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
    excursion_id: excursionID,
    tourist_id: touristID,
    amount_of_people: amountOfPeople,
    air_line: airline,
    reservation_date: new Date().getDate(),
  };

  try {
    const response = await fetch(
      'http://127.0.0.1:8000/excursion_reservation/create',
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

  const user = await FetchUser();
  user?.rol === 'agent' ? redirect('/agent') : redirect('/');
  return {
    message: 'Reserva creada exitosamente',
    errors: {},
  };
}
