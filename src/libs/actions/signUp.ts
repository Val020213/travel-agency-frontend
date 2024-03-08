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

  console.log('las passwords no son las mismas');

  // POST /tourist/create, http://127.0.0.1:8000/tourist/create

  const data = {
    username: 'Toleod',
    full_name: 'tpledo loa hace',
    email: 'probando@gmail.com',
    hashed_password: '2121',
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

type State = {};

const FormSchema2 = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer',
    required_error: 'Please select a customer',
  }),
  amount: z.coerce.number().gt(0, 'Amount must be greater than 0'),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select a status',
    required_error: 'Please select a status',
  }),
  date: z.string(),
});

const CreateInvoice = FormSchema2.omit({ id: true, date: true });

export async function createInvoice(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  // Prepare data for insertion into the database
  const { customerId, amount, status } = validatedFields.data;

  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  console.log('GOOD');
}
