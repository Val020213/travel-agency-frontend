import { AgencyFormState, UpdateAgencyAction } from "@/lib/actions/Admin/agency/agency";
import { useFormState } from "react-dom";
import { ContinueButton } from "../../layout/navbar/modal/ContinueButton";

export async function EditAgency({ id }: { id: number }) {
    const initialState: AgencyFormState = {}
    const updateAgencyWithId = UpdateAgencyAction.bind(null, id);
    const [state, dispatch] = useFormState(updateAgencyWithId, initialState);

    return (
        <form action={dispatch}>
            <label
                className='text-gray-300 dark:text-extends-darker-blue-300'
                htmlFor='name'
            >
                Nombre de la agencia
            </label>
            <input
                required
                className='md:text-xl border-b border-gray-300 dark:border-gray-400'
                type='text'
                name='name'
                placeholder={'Agencia de viajes Travelix'}
            />
            <label
                className='text-gray-300 dark:text-extends-darker-blue-300'
                htmlFor='fax'
            >
                Número de fax
            </label>
            <input
                required
                className='md:text-xl border-b border-gray-300 dark:border-gray-400'
                type='text'
                name='fax'
                placeholder={'123456789'}
            />
            <label
                className='text-gray-300 dark:text-extends-darker-blue-300'
                htmlFor='address'
            >
                Dirección de la agencia
            </label>
            <input
                required
                className='md:text-xl border-b border-gray-300 dark:border-gray-400'
                type='text'
                name='address'
                placeholder={'Calle de la agencia'}
            />
            <label
                className='text-gray-300 dark:text-extends-darker-blue-300'
                htmlFor='email'
            >
                Correo electrónico
            </label>
            <input
                required
                className='md:text-xl border-b border-gray-300 dark:border-gray-400'
                type='text'
                name='email'
                placeholder="travelix@gmail.com"
            />
            <ContinueButton text="Actualizar Agencia" />
            {
                state.message && <p className="text-xs text-red-500">{state.message}</p>
            }
        </form>
    )
}