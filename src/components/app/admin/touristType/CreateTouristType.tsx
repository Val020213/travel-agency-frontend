'use client';
import { useFormState } from 'react-dom';
import { UserFormState } from '@/lib/actions/Admin/user/user';
import { IFormInput } from '../../marketing/components/GenerateForm';
import { GenerateForm } from '../../marketing/components/GenerateForm';
import { ContinueButton } from '../../layout/navbar/modal/ContinueButton';
import { CreateTouristTypeAction } from '@/lib/actions/Admin/touristType/touristType';

export async function CreateTouristType() {
  const initialState = {};

  const [state, dispatch] = useFormState<UserFormState, FormData>(
    CreateTouristTypeAction,
    initialState
  );

  const formsFields: IFormInput[] = [
    {
      name: 'name',
      placeholder: 'Tipo de Turista',
    },
  ];

  return (
    <section>
      <h2 className='text-2xl font-semibold'>Creando un Tipo de Turista</h2>
      <form
        action={dispatch}
        className='flex flex-col gap-4 md:gap-8 lg:gap-16'
      >
        <GenerateForm formsFields={formsFields} />
        <div className='flex flex-row justify-between items-center *:min-w-96'>
          <div className='flex flex-row justify-start items-start'>
            {state.message && (
              <div className='text-red-500 text-sm'>{state.message}</div>
            )}
          </div>
          <ContinueButton text='Crear tipo de turista' />
        </div>
      </form>
    </section>
  );
}
