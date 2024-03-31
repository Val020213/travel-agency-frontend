'use client';
import { useFormState } from 'react-dom';
import { IFormInput } from '../../marketing/components/GenerateForm';
import { GenerateForm } from '../../marketing/components/GenerateForm';
import { ContinueButton } from '../../layout/navbar/modal/ContinueButton';
import {
  CreatePackageAction,
  PackageFormState,
} from '@/lib/actions/Admin/package/package';
import { MultiSelectorHotel } from './MultiSelectorHotel';

export function CreatePackage() {
  const initialState = {};

  const [state, dispatch] = useFormState<PackageFormState, FormData>(
    CreatePackageAction,
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
      name: 'agency_id',
      placeholder: 'ID de la Agencia',
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
        <MultiSelectorHotel />
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
