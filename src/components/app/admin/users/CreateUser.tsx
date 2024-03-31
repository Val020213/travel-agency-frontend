"use client"
import { CreateUserAction } from "@/lib/actions/Admin/user/user";
import { useFormState } from "react-dom";
import { UserFormState } from "@/lib/actions/Admin/user/user";
import { IFormInput } from "../../marketing/components/GenerateForm";
import { GenerateForm } from "../../marketing/components/GenerateForm";
import { ContinueButton } from "../../layout/navbar/modal/ContinueButton";

export async function CreateUser() {
  const initialState = {};

  const [state, dispatch] = useFormState<UserFormState, FormData>(
    CreateUserAction,
    initialState
  );

  const formsFields: IFormInput[] = [
    {
      name: "username",
      placeholder: "Nombre de usuario",
    },
    {
      name: "name",
      placeholder: "Nombre completo",
    },
    {
      name: "phone",
      placeholder: "Número de teléfono",
    },
    {
      name: "email",
      placeholder: "Correo electrónico",
    },
    {
      name: "role",
      placeholder: "Rol",
    },
    {
      name: "agency_id",
      placeholder: "ID de la agencia",
    },
    {
      name: "password",
      placeholder: "Contraseña",
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold">Creando Usuario</h2> 
      <form
        action={dispatch}
        className="flex flex-col gap-4 md:gap-8 lg:gap-16"
      >
        <GenerateForm formsFields={formsFields} />
        <div className="flex flex-row justify-between items-center *:min-w-96">
          <div className="flex flex-row justify-start items-start">
            {state.message && (
              <div className="text-red-500 text-sm">{state.message}</div>
            )}
          </div>
          <ContinueButton text="Crear Usuario" />
        </div>
      </form>
    </section>
  );
}
