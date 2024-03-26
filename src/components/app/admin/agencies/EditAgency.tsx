'use client'
import {
    AgencyFormState,
    UpdateAgencyAction,
} from "@/lib/actions/Admin/agency/agency";
import { useFormState } from "react-dom";
import { ContinueButton } from "../../layout/navbar/modal/ContinueButton";

export async function EditAgency({ name, address, fax, email,  id }: { name: string, address: string, fax: Number, email:string, id: number }) {
    const initialState: AgencyFormState = {};
    const updateAgencyWithId = UpdateAgencyAction.bind(null, id);
    const [state, dispatch] = useFormState(updateAgencyWithId, initialState);

    return (
        <form action={dispatch} className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            <div className="flex flex-col text-base leading-6 gap-2">
                <label
                    className="text-gray-300 dark:text-extends-darker-blue-300"
                    htmlFor="name"
                >
                    Nombre de la agencia
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
                    htmlFor="imagen"
                >
                    Foto de la agencia
                </label>
                <input
                    className="md:text-xl border-b border-gray-300 dark:border-gray-400"
                    type="text"
                    name="imagen"
                    placeholder={'url de la imagen'}
                />
            </div>
            <div className="flex flex-col text-base leading-6 gap-2">
                <label
                    className="text-gray-300 dark:text-extends-darker-blue-300"
                    htmlFor="fax"
                >
                    Número de fax
                </label>
                <input
                    className="md:text-xl border-b border-gray-300 dark:border-gray-400"
                    type="text"
                    name="fax"
                    placeholder={String(fax)}
                />
            </div>
            <div className="flex flex-col text-base leading-6 gap-2">
                <label
                    className="text-gray-300 dark:text-extends-darker-blue-300"
                    htmlFor="address"
                >
                    Dirección de la agencia
                </label>
                <input
                    className="md:text-xl border-b border-gray-300 dark:border-gray-400"
                    type="text"
                    name="address"
                    placeholder={address}
                />
            </div>
            <div className="flex flex-col text-base leading-6 gap-2">
                <label
                    className="text-gray-300 dark:text-extends-darker-blue-300"
                    htmlFor="email"
                >
                    Correo electrónico
                </label>
                <input
                    className="md:text-xl border-b border-gray-300 dark:border-gray-400"
                    type="text"
                    name="email"
                    placeholder={email}
                />
            </div>

            <div className="flex flex-row justify-between items-center *:min-w-96">
                <div className="flex flex-row justify-start items-start">
                    {state.message && (
                        <div className="text-red-500 text-sm">{state.message}</div>
                    )}
                </div>
                <ContinueButton text="Actualizar Agencia" />
            </div>
        </form>
    );
}
