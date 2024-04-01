"use server"
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from 'next/cache';

const AgentFormSchema = z.object({
 id: z.string(),
 username: z.string({
    invalid_type_error: "invalid_type_error",
    required_error: "Introduce el nombre de usuario del agente",
 }),
 name: z.string({
    invalid_type_error: "invalid_type_error",
    required_error: "Introduce el nombre del agente",
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
 password: z.string({
    invalid_type_error: "invalid_type_error",
    required_error: "Introduce una contraseña",
 }),
});

export type AgentFormState = {
 message?: string;
 errors?: {
    username?: string[];
    name?: string[];
    phone?: string[];
    email?: string[];
    agency_id?: string[];
    password?: string[];
 };
};

const AgentSchema = AgentFormSchema.omit({ id: true });

export async function CreateAgentAction(
 prevState: AgentFormState,
 formData: FormData
): Promise<AgentFormState> {
 const validatedFields = AgentSchema.safeParse({
    username: formData.get("username") as string,
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    agency_id: formData.get("agency_id"),
    password: formData.get("password") as string,
 });

 if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: validatedFields.error.message,
    };
 }

 const { name, username, phone, email, password } =
    validatedFields.data;

//  const user = await ReadSession();
//  const agencyID = user.
 const data = {
    name: name,
    username: username,
    phone: phone,
    email: email,
    agency_id: 40,
    password: password,
 };

 try {
   noStore();
    const response = await fetch(`http://127.0.0.1:8000/user/create/agent/${data.agency_id}`, {
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
  
 revalidatePath("/marketing/agents");
 redirect("/marketing/agents");
 return {
    message: "Error al crear el agente",
    errors: {},
 };
}

export async function DeleteAgent(id: number): Promise<void> {
 try {
   noStore();
    const response = await fetch(`http://127.0.0.1:8000/user/delete/${id}`);

    if (!response.ok) {
      console.log(response.statusText);
      return;
    }

 } catch {
    console.log("Database Connection Error");
 }
 revalidatePath("/marketing/agents")
 redirect("/marketing/agents")
}
