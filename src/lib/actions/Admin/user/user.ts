"use server"
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const FormSchema = z.object({
  id: z.string(),
  username: z.string({
    invalid_type_error: "invalid_type_error",
    required_error: "Introduce un nombre de usuario",
  }),
  name: z.string({
    invalid_type_error: "invalid_type_error",
    required_error: "Introduce un nombre",
  }),
  phone: z.string({
    invalid_type_error: "invalid_type_error",
    required_error: "Introduce un número de teléfono",
  }),
  email: z
    .string({
      invalid_type_error: "invalid_type_error",
      required_error: "Introduce un correo electrónico",
    })
    .email({
      message: "Introduce un correo electrónico válido",
    }),
  role: z.string({
    invalid_type_error: "invalid_type_error",
    required_error: "Introduce un rol",
  }),
  agency_id: z.string({
    invalid_type_error: "invalid_type_error",
    required_error: "Introduce un ID de agencia",
  }),
  password: z.string({
    invalid_type_error: "invalid_type_error",
    required_error: "Introduce una contraseña",
  }),
});

export type UserFormState = {
  message?: string;
  errors?: {
    username?: string[];
    name?: string[];
    phone?: string[];
    email?: string[];
    role?: string[];
    agency_id?: string[];
    password?: string[];
  };
};

const UserSchema = FormSchema.omit({ id: true });

export async function CreateUserAction(
  prevState: UserFormState,
  formData: FormData
): Promise<UserFormState> {
  const validatedFields = UserSchema.safeParse({
    username: formData.get("username") as string,
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    role: formData.get("role") as string,
    agency_id: formData.get("agency_id"),
    password: formData.get("password") as string,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: validatedFields.error.message,
    };
  }

  const { username, name, phone, email, role, agency_id, password } =
    validatedFields.data;

  const data = {
    username: username,
    name: name,
    phone: phone,
    email: email,
    role: role,
    agency_id: agency_id,
    password: password,
  };

  try {
    const response = await fetch("http://127.0.0.1:8000/user/create/agent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
  } catch (error) {
    console.error(error);
  }
  
  revalidatePath("/admin/users");
  redirect("/admin/users");
  return {
    message: "Error al crear el usuario",
    errors: {},
  };
}



export async function DeleteUser(id: number): Promise<void> {
 try {
    const response = await fetch(`http://127.0.0.1:8000/user/delete/${id}`);

    if (!response.ok) {
      console.log(response.statusText);
      return;
    }

 } catch {
    console.log("Database Connection Error");
 }
 revalidatePath("/admin/users")
}

// export async function CreateAgentAction(
//  prevState: AgentFormState,
//  formData: FormData
// ): Promise<AgentFormState> {
//  // Asegúrate de que AgentSchema valide los campos específicos para un agente
//  const validatedFields = AgentSchema.safeParse({
//     username: formData.get("username") as string,
//     name: formData.get("name") as string,
//     phone: formData.get("phone") as string,
//     email: formData.get("email") as string,
//     role: formData.get("role") as string,
//     agency_id: formData.get("agency_id"),
//     password: formData.get("password") as string,
//  });

//  if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: validatedFields.error.message,
//     };
//  }

//  const { username, name, phone, email, role, agency_id, password } =
//     validatedFields.data;

//  const data = {
//     username: username,
//     name: name,
//     phone: phone,
//     email: email,
//     role: role,
//     agency_id: agency_id,
//     password: password,
//     // Aquí puedes incluir campos específicos del agente si los hay
//  };

//  try {
//     const response = await fetch("http://127.0.0.1:8000/agent/create", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//       const text = await response.text();
//       return {
//         message: text,
//         errors: {},
//       };
//     }
//  } catch (error) {
//     console.error(error);
//  }
  
//  revalidatePath("/admin/agents");
//  redirect("/admin/agents");
//  return {
//     message: "Error al crear el agente",
//     errors: {},
//  };
// }


