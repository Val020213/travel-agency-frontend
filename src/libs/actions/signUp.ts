'use server';
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

export async function createUser(prevState: SignUpState, formData: FormData) {
  console.log(formData);

  const validatedFields = CreateUser.safeParse({
    username: formData.get('username') as string,
    name: formData.get('name') as string,
    nationality: formData.get('nationality') as string,
    password: formData.get('password') as string,
    confirmPassword: formData.get('confirmPassword') as string,
  });

  if (!validatedFields.success) {
    console.log(prevState.message);
    console.log(prevState.errors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid Fields. Failed to Create User.',
    };
  }

  const { username, name, nationality, password, confirmPassword } =
    validatedFields.data;

  console.log('Hello world');

  console.log(validatedFields);
  console.log('gello');

  if (password !== confirmPassword) {
    return {
      errors: {},
      message: 'Password does not match',
    };
  }

  // POST /tourist/create, http://127.0.0.1:8000/tourist/create

  const data = {
    username: username,
    full_name: name,
    email: 'probando@gmail.com',
    hashed_password: password,
  };

  try {
    const resp = await fetch('http://127.0.0.1:8000/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

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
