"use client";
import { CreateExcursionAction } from "@/lib/actions/Admin/excursion/excursion"; 
import { useFormState } from "react-dom";
import { ExcursionFormState } from "@/lib/actions/Admin/excursion/excursion"; 
import { IFormInput } from "../../marketing/components/GenerateForm";
import { GenerateForm } from "../../marketing/components/GenerateForm";
import { ContinueButton } from "../../layout/navbar/modal/ContinueButton";
import { MultiSelectorHotel } from "./MultiSelectorHotel";

export async function CreateExcursion() {
  const initialState = {};

  const [state, dispatch] = useFormState<ExcursionFormState, FormData>(
    CreateExcursionAction,
    initialState
  );

  const formsFields: IFormInput[] = [
    {
      name: "departureLocation",
      placeholder: "Ubicación de salida",
    },
    {
      name: "arrivalLocation",
      placeholder: "Ubicación de llegada",
    },
    {
      name: "departureDate",
      placeholder: "Fecha de salida",
    },
    {
      name: "arrivalDate",
      placeholder: "Fecha de llegada",
    },
    {
      name: "departureTime",
      placeholder: "Hora de salida",
    },
    {
      name: "arrivalTime",
      placeholder: "Hora de llegada",
    },
    {
      name: "price",
      placeholder: "Precio",
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold">Creando Excursión</h2>
      <form
        action={dispatch}
        className="flex flex-col gap-4 md:gap-8 lg:gap-16"
      >
        <GenerateForm formsFields={formsFields} />
            <MultiSelectorHotel/>
        <div className="flex flex-row justify-between items-center *:min-w-96">
          <div className="flex flex-row justify-start items-start">
            {state.message && (
              <div className="text-red-500 text-sm">{state.message}</div>
            )}
          </div>
          <ContinueButton text="Crear Excursión" />
        </div>
      </form>
    </section>
  );
}
