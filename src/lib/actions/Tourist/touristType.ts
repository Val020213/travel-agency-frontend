'use server';
import z from 'zod';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { GetTouristTypeByID } from '@/lib/data/data';
import { db } from '@/lib/utils';

const TTSchema = z.object({
  touristTypeID: z.string({
    invalid_type_error: 'id invalido de turista',
    required_error: 'Introduce un turista',
  }),
});

export type TouristTypeState = {
  message?: string;
  errors?: {
    touristTypeID?: string[];
  };
};


export async function CreateTTTourist(
  touristID: number,
  prevState: TouristTypeState,
  formData: FormData
): Promise<TouristTypeState> {
  const validatedFields = TTSchema.safeParse({
    touristTypeID: formData.get('touristTypeID'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: validatedFields.error.message,
    };
  }

  const { touristTypeID } = validatedFields.data;

  const data = {
    tourist_id: touristID,
    tourist_type_id: touristTypeID,
  };

  try {
    const response = await fetch(
      'http://127.0.0.1:8000/tourist_type_tourist/create',
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

    revalidatePath('/tourist/profile');
    // redirect('/tourist/profile');
    
  } catch (error) {
    db('error', error);
    return {
      message: 'Error al asociar el tipo de turista',
      errors: {},
    };
  }
  

  return {
    message: '',
    errors: {},
  };
}

export async function DeleteTouristTypeAssociation(
  touristID: number,
  touristTypeID: number,
  formData?: FormData
) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/tourist_type_tourist/delete/${touristID}/${touristTypeID}`
    );
    if (!response.ok) {
      console.log(response.statusText);
    }
    revalidatePath('/tourist/profile');
  } catch (error) {
    console.log(error);
  }
}
