"use server";
import { unstable_noStore as noStore } from 'next/cache';
import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const FormSchema = z.object({
 id: z.string(),
 photo_url: z.string(),
 name: z.string({
    invalid_type_error: "invalid_type_error",
    required_error: "Introduce un nombre para el hotel",
 }),
 address: z.string({
    invalid_type_error: "invalid_type_error",
    required_error: "Introduce una dirección",
 }),
 category: z.number({
    invalid_type_error: "invalid_type_error",
    required_error: "Introduce una categoría",
 }),
});

export type HotelFormState = {
 message?: string;
 errors?: {
    photo_url?: string[];
    name?: string[];
    address?: string[];
    category?: string[];
 };
};

const HotelSchema = FormSchema.omit({ id: true });

export async function CreateHotelAction(
 prevState: HotelFormState,
 formData: FormData
) {
   noStore();
 const validatedFields = HotelSchema.safeParse({
    name: formData.get("name") as string,
    address: formData.get("address") as string,
    category: parseInt(formData.get("category") as string, 10), 
    photo_url: formData.get("photo_url") as string,
    
 });


 if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: validatedFields.error.message,
    };
 }

 const { name, address, category, photo_url } = validatedFields.data;
 const data = {
    name: name,
    address: address,
    category: category,
    photo_url: photo_url,
 };

 try {
    const response = await fetch("http://127.0.0.1:8000/hotel/create", {
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
      message: "Error al crear el hotel",
      errors: {},
    };
 }
 revalidatePath("/admin/hotels")
 redirect("/admin/hotels");
}


export async function UpdateHotelAction(
  id: number,
  prevState: HotelFormState,
  formData: FormData
) {
  noStore();
  // No validation needed
  const name = formData.get("name");
  const fax = formData.get("fax");
  const address = formData.get("address");
  const photoUrl = formData.get("photoUrl");

  if (name === null && fax === null && address === null && photoUrl === null) {
    const status: HotelFormState = {
      message: "No se han hecho cambios en el hotel",
      errors: {},
    };
    return status;
  }

  const data = {
    id: id,
    name: name === '' ? undefined : name,
    fax_number: fax === '' ? undefined : fax,
    address: address === '' ? undefined : address,
    photo_url: photoUrl === '' ? undefined : photoUrl,
  };

  try {
    const response = await fetch('http://127.0.0.1:8000/hotel/update', { //todo arreglar cuando se actualice el back
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return {
        message: response.statusText,
      };
    }
  } catch (error) {
    console.log("Database Connection Error:", error);
  }

  redirect("/admin/hotels");
}

export async function DeleteHotel(id: number): Promise<void> {

 try {
    const response = await fetch(`http://127.0.0.1:8000/hotel/delete${id}`);

    if (!response.ok) {
      console.error(`Error al eliminar el hotel ahora : ${response.statusText}`);
      return;
    }

    revalidatePath('/admin/hotels')
 } catch (error) {
    console.error("Error de conexión a la base de datos:", error);
 }
}
