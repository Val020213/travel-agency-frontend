"use server";

import { unstable_noStore as noStore } from 'next/cache'; 
import { z } from "zod";
import { revalidatePath } from "next/cache";

const FormSchema = z.object({
  id: z.string(),
  departureLocation: z.string({
    invalid_type_error: "invalid_type_error",
    required_error: "Introduce un lugar de salida",
  }),
  arrivalLocation: z.string({
    invalid_type_error: "invalid_type_error",
    required_error: "Introduce un lugar de llegada",
  }),
  departureDate: z.string({
    invalid_type_error: "invalid_type_error",
    required_error: "Introduce una fecha de salida",
  }),
  arrivalDate: z.string({
    invalid_type_error: "invalid_type_error",
    required_error: "Introduce una fecha de llegada",
  }),
  departureTime: z.string({
    invalid_type_error: "invalid_type_error",
    required_error: "Introduce una hora de salida",
  }),
  arrivalTime: z.string({
    invalid_type_error: "invalid_type_error",
    required_error: "Introduce una hora de llegada",
  }),
  hotelID: z.string({
    invalid_type_error: "invalid_type_error",
    required_error: "Introduce el ID del hotel",
  }),
});

export type ExcursionFormState = {
  message?: string;
  errors?: {
    departureLocation?: string[];
    arrivalLocation?: string[];
    departureDate?: string[];
    arrivalDate?: string[];
    departureTime?: string[];
    arrivalTime?: string[];
    hotelID?: string[];
  };
};

const ExcursionSchema = FormSchema.omit({ id: true });

export async function CreateExcursionAction(
  prevState: ExcursionFormState,
  formData: FormData
) {
  const validatedFields = ExcursionSchema.safeParse({
    departureLocation: formData.get("departureLocation") as string,
    arrivalLocation: formData.get("arrivalLocation") as string,
    departureDate: formData.get("departureDate") as string,
    arrivalDate: formData.get("arrivalDate") as string,
    departureTime: formData.get("departureTime") as string,
    arrivalTime: formData.get("arrivalTime") as string,
    hotelID: formData.get("hotelID") as string,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: validatedFields.error.message,
    };
  }

  const { departureLocation, arrivalLocation, departureDate, arrivalDate, departureTime, arrivalTime, hotelID } = validatedFields.data;

  const data = {
    departureLocation,
    arrivalLocation,
    departureDate,
    arrivalDate,
    departureTime,
    arrivalTime,
    hotelID,
  };

  try {
    const response = await fetch("http://127.0.0.1:8000/excursion/create", {
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
        message: "Error al crear la excursión",
        errors: {},
    };
  }

  revalidatePath("/admin/excursions");
}

export async function UpdateExcursionAction(
  id: number,
  prevState: ExcursionFormState,
  formData: FormData
) {
  noStore();

  const departureLocation = formData.get("departureLocation") ;
  const arrivalLocation = formData.get("arrivalLocation") ;
  const departureDate = formData.get("departureDate") ;
  const arrivalDate = formData.get("arrivalDate") ;
  const departureTime = formData.get("departureTime") ;
  const arrivalTime = formData.get("arrivalTime") ;
  const hotelID = formData.get("hotelID") ;

  if (departureLocation === null && arrivalLocation === null && departureDate === null && arrivalDate === null && departureTime === null && arrivalTime === null && hotelID === null) {
    const status: ExcursionFormState = {
      message: "No se han hecho cambios en la excursión",
      errors: {},
    };
    return status;
  }

  const data = {
    id,
    departureLocation: departureLocation == '' ? undefined : departureLocation,
    arrivalLocation: arrivalLocation == '' ? undefined : arrivalLocation,
    departureDate: departureDate == '' ? undefined : departureDate,
    arrivalDate: arrivalDate == '' ? undefined : arrivalDate,
    departureTime: departureTime == '' ? undefined : departureTime,
    arrivalTime: arrivalTime == '' ? undefined : arrivalTime,
    hotelID: hotelID == '' ? undefined : hotelID,
  };

  try {
    const response = await fetch('http://127.0.0.1:8000/excursion/update', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if(!response.ok) {
      return {
        message: response.statusText,
      };
    }
  } catch (error) {
    console.log("Database Connection Error", error);
  }

  revalidatePath("/admin/excursions");
}

export async function DeleteExcursion(id: number): Promise<void> {
  try {
    const response = await fetch(`http://127.0.0.1:8000/excursion/delete/${id}`);
    if (!response.ok) {
      console.log(response.statusText);
      return;
    }
    revalidatePath('/admin/excursions');
  } catch (error) {
    console.log("Database Connection Error", error);
  }
}

