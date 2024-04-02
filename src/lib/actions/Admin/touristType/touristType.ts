'use server';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { touristType } from '@/lib/entities';

const FormSchema = z.object({
  id: z.string(),
  name: z.string({
    invalid_type_error: 'invalid_type_error',
    required_error: 'Introduce un nombre',
  }),
});

export type UserFormState = {
  message?: string;
  errors?: {
    name?: string[];
  };
};

const UserSchema = FormSchema.omit({ id: true });

export async function ValidateTouristTypeNoRepeat(
  name: string
): Promise<boolean> {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/tourist_type/list?skip=0&limit=1000`
    );

    if (!response.ok) {
      console.log(response.statusText);
      return false;
    }

    const data = await response.json();
    const touristTypes: touristType[] = data.map((touristType: any) => ({
      name: touristType.name,
    }));
    const touristType = touristTypes.find(
      (tt: touristType) => tt.name === name
    );
    return touristType === undefined;
  } catch {
    console.log('Database Connection Error');
  }
  return false;
}

export async function CreateTouristTypeAction(
  prevState: UserFormState,
  formData: FormData
): Promise<UserFormState> {
  const validatedFields = UserSchema.safeParse({
    name: formData.get('name') as string,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: validatedFields.error.message,
    };
  }

  const { name } = validatedFields.data;

  const isValid = await ValidateTouristTypeNoRepeat(name);

  if (!isValid) {
    return {
      message: 'El tipo de turista ya existe',
      errors: {},
    };
  }

  const data = {
    name: name,
  };

  try {
    const response = await fetch('http://127.0.0.1:8000/tourist_type/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const text = await response.text();
      return {
        message: text,
        errors: {},
      };
    }
  } catch (error) {
    console.error(error);
  }

  revalidatePath('/admin/touristType');
  redirect('/admin/touristType');
  return {
    message: 'Error al crear el tipo de turista',
    errors: {},
  };
}

export async function DeleteTouristType(id: number): Promise<void> {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/tourist_type/delete/${id}`
    );

    if (!response.ok) {
      console.log(response.statusText);
      return;
    }
  } catch {
    console.log('Database Connection Error');
  }
  revalidatePath('/admin/touristType');
}
