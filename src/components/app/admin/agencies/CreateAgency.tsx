"use client";
import { CreateAgencyAction } from "@/lib/actions/Admin/agency/agency";
import { useFormState } from "react-dom";
import { AgencyFormState } from "@/lib/actions/Admin/agency/agency";
import { IFormInput } from "../../marketing/components/GenerateForm";
import { GenerateForm } from "../../marketing/components/GenerateForm";
import { ContinueButton } from "../../layout/navbar/modal/ContinueButton";

export async function CreateAgency() {
  const initialState = {};

  const [state, dispatch] = useFormState<AgencyFormState, FormData>(
    CreateAgencyAction,
    initialState
  );

  const formsFields: IFormInput[] = [
    {
      name: "image",
      placeholder: "url bing",
    },
    {
      name: "name",
      placeholder: "Nombre de la agencia",
    },
    {
      name: "fax",
      placeholder: "Número de fax",
    },
    {
      name: "address",
      placeholder: "Dirección de la agencia",
    },
    {
      name: "email",
      placeholder: "Correo electrónico",
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold text-gray-900">Creando Agencia</h2>
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
          <ContinueButton text="Crear Agencia" />
        </div>
      </form>
    </section>
  );
}
