'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { rol, user } from '../../entities';
import { write } from '../session/write';
import { FetchUser } from '@/lib/data/data';

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

export type LoginResponse = {
  token: string;
  rol: rol;
};

const ValidateUser = FormSchema.omit({ id: true, date: true });

export async function ValidateUserAction(
  prevState: SignInState,
  formData: FormData
): Promise<SignInState> {
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
    grant_type: 'password',
    scope: null,
    client_id: null,
    client_secret: null,
  };

  try {
    const response = await fetch('http://127.0.0.1:8000/fake_token', {
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
      };
    }
    const responseData = await response.json();
    const Token = responseData.Token;
    const ID = responseData.id;
    const token = Token.access_token;
    const rol = Token.role;

    write({id:ID, username: username, token: token, rol: rol });
  } catch (error) {
    console.log(error);
    return {
      errors: {},
      message: 'Error DBConnection',
    };
  }
  const userRol = (await FetchUser())?.rol;
  console.log(userRol ?? 'no se recibio un rol');
  redirect(MapperRolAddress[userRol ?? 'tourist']);
}

const MapperRolAddress: Record<string, string> = {
  admin: '/admin',
  marketing: '/marketing',
  agent: '/agent',
  tourist: '/',
};
