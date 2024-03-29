"use client";
import { CreateHotelAction } from "@/lib/actions/Admin/hotel/hotel";
import { useFormState } from "react-dom";
import { HotelFormState } from "@/lib/actions/Admin/hotel/hotel";
import { IFormInput } from "../../marketing/components/GenerateForm";
import { GenerateForm } from "../../marketing/components/GenerateForm";
import { ContinueButton } from "../../layout/navbar/modal/ContinueButton";

export async function CreateHotel() {
 const initialState = {};

 const [state, dispatch] = useFormState<HotelFormState, FormData>(
    CreateHotelAction,
    initialState
 );

 const formsFields: IFormInput[] = [
    {
      name: "photo_url",
      placeholder: "URL de la foto",
    },
    {
      name: "name",
      placeholder: "Nombre del hotel",
    },
    {
      name: "address",
      placeholder: "Dirección del hotel",
    },
    {
      name: "category",
      placeholder: "Categoría del hotel",
    },
 ];

 return (
    <section>
      <h2 className="text-2xl font-semibold">Creando Hotel</h2>
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
          <ContinueButton text="Crear Hotel" />
        </div>
      </form>
    </section>
 );
}
