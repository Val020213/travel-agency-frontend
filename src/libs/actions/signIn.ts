'use server';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import { signIn } from '../../../auth';

const FormSchema = z.object({
  id: z.string(),
  username: z.string({
    invalid_type_error: 'invalid_type_error',
    required_error: 'Introduce un nombre de perfil',
  }),
  password: z.string({
    invalid_type_error: 'Introduzca una contraseña',
    required_error: 'Introduzca una contraseña',
  }),
  date: z.string(),
});

export type SignInState = {
  message?: string;
  errors?: {
    username?: string[];
    password?: string[];
  };
};

const ValidateUser = FormSchema.omit({ id: true, date: true });

export async function ValidateUserAction(
  prevState: SignInState,
  formData: FormData
) {
  const validatedFields = ValidateUser.safeParse({
    username: formData.get('username') as string,
    password: formData.get('password') as string,
  });

  console.log(prevState);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid Fields. Failed to Create User.',
    };
  }

  const { username, password } = validatedFields.data;
  const data = {
    username: username,
    password: password,
  };

  if (!(username in AdminPatch)) {
    try {
      const response = await fetch('http://127.0.0.1:8000/tourist/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        return {
          message: 'Failed to create user, Bad Request',
        };
      }
    } catch (error) {
      return {
        message: 'Failed to create user, DB Error Connection',
      };
    }
  }
  console.log('Validated Fields', validatedFields);
  signIn('credentials', { username, password })
  redirect('?loginSuccess=true');
}

const AdminPatch: { [key: string]: string | undefined } = {
  admin: 'admin',
};
