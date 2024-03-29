"use server";
import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const FormSchema = z.object({
  id: z.string(),
  description: z.string({
    invalid_type_error: "invalid_type_error",
    required_error: "Introduce una descripción para la facilidad",
  }),
});

export type FacilityFormState = {
  message?: string;
  errors?: {
    description?: string[];
  };
};

const FacilitySchema = FormSchema.omit({ id: true });

export async function CreateFacilityAction(
  prevState: FacilityFormState,
  formData: FormData
) {
  const validatedFields = FacilitySchema.safeParse({
    description: formData.get("description") as string,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: validatedFields.error.message,
    };
  }

  const { description } = validatedFields.data;

  const data = {
    description: description,
  };

  try {
    const response = await fetch("http://127.0.0.1:8000/facility/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return {
        message: response.statusText,
        errors: {},
      };
    }
  } catch (error) {
    console.log(error);
    return {
      message: "Error al crear la facilidad",
      errors: {},
    };
  }
  revalidatePath("/admin/facilities")
  redirect("/admin/facilities");
}

export async function DeleteFacility(id: number): Promise<void> {
    try {
        const response = await fetch(`http://127.0.0.1:8000/facility/delete${id}`);

        if (!response.ok) {
            console.log(response.statusText);
            return;
        }
  revalidatePath("/admin/facilities")
    } catch {
        console.log("Error de conexión con la base de datos");
    }
}
