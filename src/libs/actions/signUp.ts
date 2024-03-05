import { z } from 'zod';

const FormSignInSchema = z.object({
    username: z.string(),
    name: z.string(),
    nationality: z.string(),
    password: z.string(),
    confirmPassword: z.string(),
});

export type SignUpState = {
    errors?: {
        username?: string;
        name?: string
        password?: string;
        confirmPassword?: string;
    };
    message?: string | null;
};

export async function createUser(prevState: SignUpState, formData: FormData) {

    const validatedData = FormSignInSchema.safeParse({
        username: formData.get('username') as string,
        name: formData.get('name') as string,
        nationality: formData.get('nationality') as string,
        password: formData.get('password') as string,
        confirmPassword: formData.get('confirmPassword') as string,
    });

    if (!validatedData.success) {
        return {
            errors: validatedData.error.flatten().fieldErrors,
            message: 'Invalid Fields. Failed to Create User.',
        };
    }

    const { username, name, nationality, password, confirmPassword } =
        validatedData.data;

    if (password !== confirmPassword) {
        return {
            errors: { password: 'Password does not match' },
            message: 'Password does not match',
        };
    }

    // POST /tourist/create, http://127.0.0.1:8000/tourist/create

    const data = {
        username: username,
        name: name,
        nationality: nationality,
        password: password,
    };

    await fetch('http://127.0.0.1:8000/tourist/create'), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };
}