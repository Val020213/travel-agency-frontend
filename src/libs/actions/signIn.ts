'use server';
import { z } from 'zod';

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

export async function validateUser(prevState: SignInState, formData: FormData) {
  console.log(formData);

  const validatedFields = ValidateUser.safeParse({
    username: formData.get('username') as string,
    password: formData.get('password') as string,
  });

  if (!validatedFields.success) {
    console.log(prevState.message);
    console.log(prevState.errors);
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

  console.log('haciendo post...');

  try {
    const resp = await fetch('http://127.0.0.1:8000/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log('Ya se termino el response con Status ok? :');
    console.log(resp.ok);

    const tmpMessage = resp.ok ? 'Success' : 'Error';

    console.log(tmpMessage);

    return {
      errors: {},
      message: tmpMessage,
    };
  } catch (error) {
    console.log('Ya se termino el response con Status ok? : False');

    return {
      errors: {},
      message: 'False',
    };
  }
}
