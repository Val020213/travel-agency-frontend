import { z } from 'zod';

export type SignInState = {
    errors?: {
        username?: string;
        password?: string;
    };
    message?: string | null;
};

const FormSignInSchema = z.object({
    username: z.string(),
    password: z.string(),
});

export async function signIn(prevState: SignInState, formData: FormData) {
    const validatedData = FormSignInSchema.safeParse({
        username: formData.get('username') as string,
        password: formData.get('password') as string,
    });

    // call to sign in Auth

    if (!validatedData.success) {
        return {
            errors: validatedData.error.flatten().fieldErrors,
            message: 'Invalid Fields. Failed to Sign In.',
        };
    }

    const { username, password } = validatedData.data;

    //Get /tourist/me http://127.0.0.1:8000/tourist/me

    const response = await fetch('http://127.0.0.1:8000/tourist/me', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Authorization: 'Basic ' + btoa(username + ':' + password),
        },
    });

    if (!response.ok) {
        return {
            errors: {},
            message: 'Failed to Sign In. Invalid Username or Password.',
        };
    }

}