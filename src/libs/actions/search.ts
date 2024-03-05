import { z } from 'zod';

export type SearchState = {
    errors?: {
        categoryType?: string;
    };
    message?: string | null;
};

const FormSearchSchema = z.object({
    query: z.string(),
    category: z.enum(['Todas', 'Excursiones', 'Paquetes', 'Agencias'], {
        invalid_type_error: 'Invalid category',
    }),
});

export async function Search(prevState: SearchState, formData: FormData) {
    const validatedData = FormSearchSchema.safeParse({
        query: formData.get('query') as string,
        category: formData.get('category') as string,
    });

    if (!validatedData.success) {
        return {
            errors: validatedData.error.flatten().fieldErrors,
            message: 'Invalid Fields. Failed to Search.',
        };
    }

    const { query, category } = validatedData.data;

    //tricks here
    // const results = await fetch(`/api/search?query=${query}&category=${category}`);
    const results = null;
    return { results };
}

export async function SearchSubmit(formData: FormData) {
    //tricks here
    // const results = await fetch(`/api/search?query=${query}&category=${category}`);
    // const validatedData = FormSearchSchema.parse(formData);
    // const { query, category } = validatedData;
    const results = null;
    // console.log(`Searching ...${query} in ${category}`)
    return { results };
}
