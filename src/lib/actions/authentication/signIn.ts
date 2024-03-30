'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { rol, user } from '../../entities';
import { write } from '../session/write';

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

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: validatedFields.error.message,
    };
  }

  const { username, password } = validatedFields.data;
  const data = {
    username: username,
    password: password,
  };

  try {
    const response = await fetch('http://127.0.0.1:8000/token', {
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

    const { token, _ , rol } = await response.json();
    write({username:username, token: token, rol:rol})
    const redirectRole = addrRole(rol)
    redirect(redirectRole + '?toast=true&message=loginSuccess')
    
  } catch (error) {
    return {
      message: 'Failed to create user, DataBase Error Connection',
    };
  }

}



const MapperRolAddress: Record<rol, string> = {
  admin: '/admin',
  marketing: '/marketing',
  agent: '/',
  tourist: '/',
};

function addrRole(rol : rol) {
  return MapperRolAddress[rol] ?? '/'
}
