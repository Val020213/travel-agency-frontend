'use client';
import { useFormState } from 'react-dom';
import { IFormInput } from '../../marketing/components/GenerateForm';
import { GenerateForm } from '../../marketing/components/GenerateForm';
import { ContinueButton } from '../../layout/navbar/modal/ContinueButton';
import { MultiSelectorFacilities } from '../../admin/packages/MultiSelectorFacilities';
import { CreatePackageActionInAgencie, PackageFormStateInAgencie } from '@/lib/actions/marketing/packages/packages';
export function CreatePackageInAgencie() {
  const initialState = {};

  const [state, dispatch] = useFormState<PackageFormStateInAgencie, FormData>(
    CreatePackageActionInAgencie,
    initialState
  );

  const formsFields: IFormInput[] = [
    {
      name: 'photo_url',
      placeholder: 'URL de la Foto',
    },
    {
      name: 'description',
      placeholder: 'Descripción del Paquete',
    },
    {
      name: 'price',
      placeholder: 'Precio',
    },
    {
      name: 'duration',
      placeholder: 'Duración',
    },
    {
      name: 'extended_excursion_id',
      placeholder: 'ID de la Excursión Extendida',
    },
  ];

  return (
    <section>
      <h2 className='text-2xl font-semibold'>Creando Paquete</h2>
      <form
        action={dispatch}
        className='flex flex-col gap-4 md:gap-8 lg:gap-16'
      >
        <GenerateForm formsFields={formsFields} />
        <div className='w-screen'>
          <MultiSelectorFacilities />
        </div>
        <div className='flex flex-row justify-between items-center *:min-w-96'>
          <div className='flex flex-row justify-start items-start'>
            {Array.isArray(state.errors) &&
              state.errors.map(
                (error: string) =>
                  error && (
                    <p key={error} className='text-red-500'>
                      {error}
                    </p>
                  )
              )}
            {state.message && <p className='text-red-500'>{state.message}</p>}
          </div>
          <ContinueButton text='Crear Paquete' />
        </div>
      </form>
    </section>
  );
}
