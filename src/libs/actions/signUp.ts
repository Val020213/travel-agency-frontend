import { z } from 'zod';

const FormSignInSchema = z.object({
    username: z.string(),
    name: z.string(),
    nationality: z.string(),
    password: z.string(),
    confirmPassword: z.string(),
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

export async function createUser(prevState: SignUpState, formData: FormData) {

    console.log(formData)

    const validatedData = FormSignInSchema.safeParse({
        username: formData.get('username') as string,
        name: formData.get('name') as string,
        nationality: formData.get('nationality') as string,
        password: formData.get('password') as string,
        confirmPassword: formData.get('confirmPassword') as string,
    });

    console.log("viendo si se valida la data")

    // if (!validatedData.success) {
    //     console.log(prevState.message)
    //     console.log(prevState.errors)
    //     return {
    //         errors: validatedData.error.flatten().fieldErrors,
    //         message: 'Invalid Fields. Failed to Create User.',
    //     };
    // }
    console.log("Hello world");

    // const { username, name, nationality, password, confirmPassword } =
    //     validatedData.data;

    console.log(validatedData)
    console.log("gello")

    // if (password !== confirmPassword) {
    //     return {
    //         errors: {},
    //         message: 'Password does not match',
    //     };
    // }
    console.log("las passwords no son las mismas")

    // POST /tourist/create, http://127.0.0.1:8000/tourist/create

    const data = {
        username: "Toleod",
        full_name: "tpledo loa hace",
        email: "probando@gmail.com",
        hashed_password: "2121",
    };

    console.log("haciendo post...")

    try {
        const resp = await fetch('http://127.0.0.1:8000/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        console.log("Ya se termino el response con Status ok? :");
        console.log(resp.ok);

        const tmpMessage = resp.ok ? "Success" : "Error";

        console.log(tmpMessage);

        return {
            errors: {},
            message: tmpMessage,
        };
    } catch (error) {

        console.log("Ya se termino el response con Status ok? : False")


        return {
            errors: {},
            message: "False"
        }
    }
}