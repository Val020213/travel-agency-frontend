'use server';
import { redirect } from 'next/navigation';
import { z } from 'zod';

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
  email: z.string().email(),
  phone: z.string({
    invalid_type_error: 'invalid type error',
    required_error: 'Introduzca su telefono',
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
  rol: z.any(),
});

export type SignUpState = {
  message?: string;
  errors?: {
    username?: string[];
    name?: string[];
    nationality?: string[];
    email?: string[];
    phone?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
};

const CreateUser = FormSchema.omit({ id: true });

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
    phone: formData.get('phone') as string,
    email: formData.get('email') as string,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid Fields. Failed to Create User.',
    };
  }

  const {
    username,
    name,
    nationality,
    password,
    confirmPassword,
    phone,
    email,
  } = validatedFields.data;

  if (password !== confirmPassword) {
    return {
      errors: {},
      message: 'Password does not match',
    };
  }

  const data = {
    username: username,
    name: name,
    nationality: nationality,
    password: password,
    phone: phone,
    email: email,
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
        message: resp.statusText,
      };
    }
  } catch (error) {
    return {
      errors: {},
      message: 'Database Connection error.',
    };
  }
  redirect('?toast=true&message=registerSuccess');
}
