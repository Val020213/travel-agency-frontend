import { redirect } from 'next/navigation';
import { z } from 'zod';
import { TemporalCountries } from '../data/data';


const FormSchema = z.object({
  id: z.string(),
  username: z.string({
    invalid_type_error: 'invalid_type_error',
    required_error: 'Introduce un nombre de perfil',
  }),
  name: z.string({
    invalid_type_error: 'invalid_type_error',
    required_error: 'Introduzca su nombre completo',
  }),
  nationality: z.string({
    invalid_type_error: 'Seleccione su nacionalidad',
    required_error: 'Selecione su nacionalidad',
  }),
  password: z.string({
    invalid_type_error: 'Introduzca una contraseña',
    required_error: 'Introduzca una contraseña',
  }),
  confirmPassword: z.string({
    invalid_type_error: 'Confirme su contraseña',
    required_error: 'Confirme su contraseña',
  }),
  date: z.string(),
});

export type SignUpState = {
  message?: string;
  errors?: {
    username?: string[];
    name?: string[];
    nationality?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
};

const CreateUser = FormSchema.omit({ id: true, date: true });

export async function CreateUserAction(
  prevState: SignUpState,
  formData: FormData
) {
  const validatedFields = CreateUser.safeParse({
    username: formData.get('username') as string,
    name: formData.get('name') as string,
    nationality: formData.get('nationality') as string,
    password: formData.get('password') as string,
    confirmPassword: formData.get('confirmPassword') as string,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid Fields. Failed to Create User.',
    };
  }

  const { username, name, nationality, password, confirmPassword } =
    validatedFields.data;

  if (password !== confirmPassword) {
    return {
      errors: {},
      message: 'Password does not match',
    };
  }

  const Countries = TemporalCountries();

  if (Countries.findIndex((country) => country === nationality) === -1) {
    const nextState: SignUpState = {
      errors: {
        nationality: ['Invalid Nationality']
      },
      message: 'Invalid Fields. User not Create'
    }
    return nextState

  }
  // POST /tourist/create, http://127.0.0.1:8000/tourist/create

  const data = {
    username: username,
    name: name,
    nationality: nationality,
    password: password,
  };


  try {
    const resp = await fetch('http://127.0.0.1:8000/tourist/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!resp.ok) {
      return {
        errors: {},
        message: 'Error Response from Server. Failed to Create User.',
      };
    }
  } catch (error) {
    return {
      errors: {},
      message: 'Database Connection error.',
    };
  }
  redirect('?')
}
