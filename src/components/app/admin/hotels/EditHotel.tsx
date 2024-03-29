'use client'
import {
    HotelFormState,
    UpdateHotelAction,
} from "@/lib/actions/Admin/hotel/hotel";
import { useFormState } from "react-dom";
import { ContinueButton } from "../../layout/navbar/modal/ContinueButton";

export async function EditHotel({ name, address, category, photoUrl, id }: { name: string, address: string, category: number, photoUrl: string, id: number }) {
    const initialState: HotelFormState = {};
    const updateHotelWithId = UpdateHotelAction.bind(null, id);
    const [state, dispatch] = useFormState(updateHotelWithId, initialState);

    return (
        <form action={dispatch} className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            <div className="flex flex-col text-base leading-6 gap-2">
                <label
                    className="text-gray-300 dark:text-extends-darker-blue-300"
                    htmlFor="name"
                >
                    Nombre del hotel
                </label>
                <input
                    className="md:text-xl border-b border-gray-300 dark:border-gray-400"
                    type="text"
                    name="name"
                    placeholder={name}
                />
            </div>
            <div className="flex flex-col text-base leading-6 gap-2">
                <label
                    className="text-gray-300 dark:text-extends-darker-blue-300"
                    htmlFor="photoUrl"
                >
                    URL de la foto del hotel
                </label>
                <input
                    className="md:text-xl border-b border-gray-300 dark:border-gray-400"
                    type="text"
                    name="photoUrl"
                    placeholder={photoUrl}
                />
            </div>
            <div className="flex flex-col text-base leading-6 gap-2">
                <label
                    className="text-gray-300 dark:text-extends-darker-blue-300"
                    htmlFor="category"
                >
                    Categoría del hotel
                </label>
                <input
                    className="md:text-xl border-b border-gray-300 dark:border-gray-400"
                    type="number"
                    name="category"
                    placeholder={String(category)}
                />
            </div>
            <div className="flex flex-col text-base leading-6 gap-2">
                <label
                    className="text-gray-300 dark:text-extends-darker-blue-300"
                    htmlFor="address"
                >
                    Dirección del hotel
                </label>
                <input
                    className="md:text-xl border-b border-gray-300 dark:border-gray-400"
                    type="text"
                    name="address"
                    placeholder={address}
                />
            </div>

            <div className="flex flex-row justify-between items-center *:min-w-96">
                <div className="flex flex-row justify-start items-start">
                    {state.message && (
                        <div className="text-red-500 text-sm">{state.message}</div>
                    )}
                </div>
                <ContinueButton text="Actualizar Hotel" />
            </div>
        </form>
    );
}
