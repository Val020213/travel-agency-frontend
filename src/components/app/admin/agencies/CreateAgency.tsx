import { CreateAgencyAction } from "@/lib/actions/Admin/agency/agency";
import { useFormState } from "react-dom";
import { AgencyFormState } from "@/lib/actions/Admin/agency/agency";
import { IFormInput } from "../../marketing/components/GenerateForm";
import { GenerateForm } from "../../marketing/components/GenerateForm";
import { agency } from "@/lib/entities";
import { ContinueButton } from "../../layout/navbar/modal/ContinueButton";

export async function CreateAgency() {
    const initialState = {};

    const [state, dispatch] = useFormState<AgencyFormState, FormData>(
        CreateAgencyAction,
        initialState);

    const formsFields: IFormInput[] = [
        {
            name: 'name',
            placeholder: 'Nombre de la agencia',
        },
        {
            name: 'fax',
            placeholder: 'Número de fax',
        },
        {
            name: 'address',
            placeholder: 'Dirección de la agencia',
        },
        {
            name: 'email',
            placeholder: 'Correo electrónico',
        },
    ];

    return (
        <section>
            <h2 className="text-2xl font-semibold text-gray-900">Create Agency</h2>
            <form action={dispatch}>
                <GenerateForm formsFields={formsFields} />
                <ContinueButton text="Crear Agencia" />
            </form>
        </section>

    )
}