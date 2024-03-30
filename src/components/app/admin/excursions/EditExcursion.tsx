"use client";
import {
  ExcursionFormState,
  UpdateExcursionAction,
} from "@/lib/actions/Admin/excursion/excursion";
import { useFormState } from "react-dom";
import { ContinueButton } from "../../layout/navbar/modal/ContinueButton";

export async function EditExcursion({
  departureLocation,
  arrivalLocation,
  departureDate,
  arrivalDate,
  departureTime,
  arrivalTime,
  hotelID,
  id,
  price,
}: {
  departureLocation: string;
  arrivalLocation: string;
  departureDate: string;
  arrivalDate: string;
  departureTime: string;
  arrivalTime: string;
  hotelID?: number;
  id: number;
  price: number
}) {
  const initialState: ExcursionFormState = {};
  const updateExcursionWithId = UpdateExcursionAction.bind(null, id);
  const [state, dispatch] = useFormState(updateExcursionWithId, initialState);

  return (
    <form action={dispatch} className="flex flex-col gap-4 md:gap-6 lg:gap-8">
      <div className="flex flex-col text-base leading-6 gap-2">
        <label
          className="text-gray-300 dark:text-extends-darker-blue-300"
          htmlFor="departureLocation"
        >
          Lugar de salida
        </label>
        <input
          className="md:text-xl border-b border-gray-300 dark:border-gray-400"
          type="text"
          name="departureLocation"
          placeholder={departureLocation}
        />
      </div>
      <div className="flex flex-col text-base leading-6 gap-2">
        <label
          className="text-gray-300 dark:text-extends-darker-blue-300"
          htmlFor="arrivalLocation"
        >
          Lugar de llegada
        </label>
        <input
          className="md:text-xl border-b border-gray-300 dark:border-gray-400"
          type="text"
          name="arrivalLocation"
          placeholder={arrivalLocation}
        />
      </div>
      <div className="flex flex-col text-base leading-6 gap-2">
        <label
          className="text-gray-300 dark:text-extends-darker-blue-300"
          htmlFor="departureDate"
        >
          Fecha de salida
        </label>
        <input
          className="md:text-xl border-b border-gray-300 dark:border-gray-400"
          type="text"
          name="departureDate"
          placeholder={departureDate}
        />
      </div>
      <div className="flex flex-col text-base leading-6 gap-2">
        <label
          className="text-gray-300 dark:text-extends-darker-blue-300"
          htmlFor="arrivalDate"
        >
          Fecha de llegada
        </label>
        <input
          className="md:text-xl border-b border-gray-300 dark:border-gray-400"
          type="text"
          name="arrivalDate"
          placeholder={arrivalDate}
        />
      </div>
      <div className="flex flex-col text-base leading-6 gap-2">
        <label
          className="text-gray-300 dark:text-extends-darker-blue-300"
          htmlFor="departureTime"
        >
          Hora de salida
        </label>
        <input
          className="md:text-xl border-b border-gray-300 dark:border-gray-400"
          type="text"
          name="departureTime"
          placeholder={departureTime}
        />
      </div>
      <div className="flex flex-col text-base leading-6 gap-2">
        <label
          className="text-gray-300 dark:text-extends-darker-blue-300"
          htmlFor="arrivalTime"
        >
          Hora de llegada
        </label>
        <input
          className="md:text-xl border-b border-gray-300 dark:border-gray-400"
          type="text"
          name="arrivalTime"
          placeholder={arrivalTime}
        />
      </div>
      
        <div className="flex flex-col text-base leading-6 gap-2">
          <label
            className="text-gray-300 dark:text-extends-darker-blue-300"
            htmlFor="hotelID"
          >
            ID del hotel
          </label>
          <input
            className="md:text-xl border-b border-gray-300 dark:border-gray-400"
            type="text"
            name="hotelID"
            placeholder={String(hotelID)}
          />
        </div>

       
        <div className="flex flex-col text-base leading-6 gap-2">
          <label
            className="text-gray-300 dark:text-extends-darker-blue-300"
            htmlFor="price"
          >
            Precio
          </label>
          <input
            className="md:text-xl border-b border-gray-300 dark:border-gray-400"
            type="text"
            name="price"
            placeholder={String(price)}
          />
        </div>
      

      <div className="flex flex-row justify-between items-center *:min-w-96">
        <div className="flex flex-row justify-start items-start">
          {state.message && (
            <div className="text-red-500 text-sm">{state.message}</div>
          )}
        </div>
        <ContinueButton text="Actualizar Excursión" />
      </div>
    </form>
  );
}
