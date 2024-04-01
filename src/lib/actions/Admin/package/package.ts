'use server';
import { unstable_noStore as noStore } from 'next/cache';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const PackageSchema = z.object({
  price: z.number(),
  description: z.string(),
  duration: z.number(),
  agency_id: z.number(),
  extended_excursion_id: z.number(),
  photo_url: z.string(),
  facilities: z.array(z.string()).nullable(),
});

export type PackageFormState = {
  message?: string;
  errors?: {
    price?: string[];
    description?: string[];
    duration?: string[];
    agency_id?: string[];
    extended_excursion_id?: string[];
    photo_url?: string[];
  };
};

export async function AddFacilitiesToPackageID(
  facilityID: number,
  packageID: number
) {
  try {
    const data = { facility_id: facilityID, package_id: packageID };

    const response = await fetch(
      'http://127.0.0.1:8000/package_facility/create',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const text = await response.text();
      return text;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function CreatePackageAction(
  prevState: PackageFormState,
  formData: FormData
): Promise<PackageFormState> {
  const validatedFields = PackageSchema.safeParse({
    price: parseInt(formData.get('price') as string, 10),
    description: formData.get('description') as string,
    duration: parseInt(formData.get('duration') as string, 10),
    agency_id: parseInt(formData.get('agency_id') as string, 10),
    extended_excursion_id: parseInt(
      formData.get('extended_excursion_id') as string,
      10
    ),
    facilities: formData.getAll('facility'),
    photo_url: formData.get('photo_url') as string,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: validatedFields.error.message,
    };
  }

  const {
    price,
    description,
    duration,
    agency_id,
    extended_excursion_id,
    photo_url,
    facilities,
  } = validatedFields.data;

  const data = {
    price,
    description,
    duration,
    agency_id,
    extended_excursion_id,
    photo_url,
  };

  try {
    const response = await fetch('http://127.0.0.1:8000/package/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const text = await response.text();
      return {
        message: text,
        errors: {},
      };
    }
    const dataResponse = await response.json();
    const packageID = dataResponse

    await facilities?.forEach((facility) => {
      AddFacilitiesToPackageID(Number(facility), packageID);
    });

    revalidatePath('/admin/packages/');
  } catch (error) {
    console.log(error);
  }
  redirect('/admin/packages/');
  return {
    message: 'Se creo el paquete, pero no las facilidades',
    errors: {},
  };
}

export async function UpdatePackageAction(
  id: number,
  prevState: PackageFormState,
  formData: FormData
) {
  const validatedFields = PackageSchema.safeParse({
    price: parseInt(formData.get('price') as string, 10),
    description: formData.get('description') as string,
    duration: parseInt(formData.get('duration') as string, 10),
    agency_id: parseInt(formData.get('agency_id') as string, 10),
    extended_excursion_id: parseInt(
      formData.get('extended_excursion_id') as string,
      10
    ),
    photo_url: formData.get('photo_url') as string,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: validatedFields.error.message,
    };
  }

  const {
    price,
    description,
    duration,
    agency_id,
    extended_excursion_id,
    photo_url,
  } = validatedFields.data;
  const data = {
    price,
    description,
    duration,
    agency_id,
    extended_excursion_id,
    photo_url,
  };

  try {
    const response = await fetch('http://127.0.0.1:8000/packages/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return {
        message: response.statusText,
      };
    }
  } catch (error) {
    console.log('Database Connection Error:', error);
  }

  revalidatePath('/admin/packages');
}

export async function DeletePackage(id: number): Promise<void> {
  try {
    const response = await fetch(`http://127.0.0.1:8000/package/delete${id}`);
    if (!response.ok) {
      console.log(response.statusText);
      return;
    }
    revalidatePath('/admin/packages');
    revalidatePath('/marketing/packages')
  } catch {
    console.log('Database Connection Error');
  }
}
