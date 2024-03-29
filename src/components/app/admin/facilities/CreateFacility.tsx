"use client";
import { CreateFacilityAction } from "@/lib/actions/Admin/facility/facility";
import { useFormState } from "react-dom";
import { FacilityFormState } from "@/lib/actions/Admin/facility/facility";
import { IFormInput } from "../../marketing/components/GenerateForm";
import { GenerateForm } from "../../marketing/components/GenerateForm";
import { ContinueButton } from "../../layout/navbar/modal/ContinueButton";

export async function CreateFacility() {
  const initialState = {};

  const [state, dispatch] = useFormState<FacilityFormState, FormData>(
    CreateFacilityAction,
    initialState
  );

  const formsFields: IFormInput[] = [
    {
      name: "description",
      placeholder: "Descripción de la facilidad",
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold">Creando Facilidad</h2>
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
          <ContinueButton text="Crear Facilidad" />
        </div>
      </form>
    </section>
  );
}
