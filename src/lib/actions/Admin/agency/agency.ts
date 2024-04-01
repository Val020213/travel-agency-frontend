"use server";
import { unstable_noStore as noStore } from 'next/cache';
 
import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const FormSchema = z.object({
  id: z.string(),
  image: z.string(),
  name: z.string({
    invalid_type_error: "invalid_type_error",
    required_error: "Introduce un nombre para la agencia",
  }),
  fax: z.string({
    invalid_type_error: "invalid_type_error",
    required_error: "Introduce un número de fax",
  }),
  address: z.string({
    invalid_type_error: "invalid_type_error",
    required_error: "Introduce una dirección",
  }),
  email: z
    .string({
      invalid_type_error: "invalid_type_error",
      required_error: "Introduce un correo electrónico",
    })
    .email({
      message: "Introduce un correo electrónico válido",
    }),
});

export type AgencyFormState = {
  message?: string;
  errors?: {
    image?: string[];
    name?: string[];
    fax?: string[];
    address?: string[];
    email?: string[];
  };
};

const AgencySchema = FormSchema.omit({ id: true });

export async function CreateAgencyAction(
  prevState: AgencyFormState,
  formData: FormData
) {
  const validatedFields = AgencySchema.safeParse({
    name: formData.get("name") as string,
    fax: formData.get("fax") as string,
    address: formData.get("address") as string,
    email: formData.get("email") as string,
    image: formData.get("image") as string,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: validatedFields.error.message,
    };
  }

const { name, fax, address, email, image } = validatedFields.data;
const data = {
    name: name,
    address: address,
    fax_number: fax,
    email: email,
    photo_url: image,
};
try {
    const response = await fetch("http://127.0.0.1:8000/agency/create", {
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
        message: "Error al crear la agencia",
        errors: {},
    };
}

revalidatePath("/admin/agencies");
redirect("/admin/agencies")
}

export async function UpdateAgencyAction(
  id: number,
  prevState: AgencyFormState,
  formData: FormData
) : Promise<AgencyFormState|undefined>{
  noStore();
  // no validation needed
  const name = formData.get("name") ;
  const fax = formData.get("fax") ;
  const address = formData.get("address") ;
  const email = formData.get("email") ;
  const imagen = formData.get("imagen") ;

  if (name === null && fax === null && address === null && email === null) {
    const status: AgencyFormState = {
      message: "No se han hecho cambios en la agencia",
      errors: {},
    };
    return status;
  }

  const data = {
    id: id,
    name: name == '' ? undefined : name,
    fax_number: fax == '' ? undefined : fax,
    address: address == '' ? undefined : address,
    photo_url: imagen == '' ? undefined : imagen,
    email: email == '' ? undefined : email,
  };

  try{
    const response =  await fetch('http://127.0.0.1:8000/agency/update', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
    },
      body: JSON.stringify(data),
    })

    if(!response.ok)
    {
      return {
        message: response.statusText,
      }
    }
  }
  catch {
    console.log("Database Connection Error")
  }

  revalidatePath("/admin/agencies");
}

export async function DeleteAgency(id: number): Promise<void> {
  try{
    const response = await fetch(`http://127.0.0.1:8000/agency/delete/${id}`)
    if(!response.ok)
    {
      console.log(response.statusText)
      return
    }
    revalidatePath('/admin/agencies')
}
  catch {
    console.log("Database Connection Error")
  }
}
