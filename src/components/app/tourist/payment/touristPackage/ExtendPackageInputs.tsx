import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@radix-ui/react-select';
import {
  GenerateForm,
} from '../../../marketing/components/GenerateForm';


export function ExtendedInputReservation() {
  return (
    <div className='flex flex-col gap-4 py-16 relative'>
      <AmountOfPeople />
      <Airline />
    </div>
  );
}

export const Airline = () => {

  const airlines = [
    'Aerolíneas Argentinas',
    'LATAM Airlines',
    'Avianca',
    'AeroMéxico',
    'GOL Linhas Aéreas',
    'Copa Airlines',
    'Volaris',
    'Azul Linhas Aéreas Brasileiras',
    'Interjet',
    'Sky Airline',
  ];

  return (
    <div className='flex flex-col text-base leading-6 gap-2'>
      <label
        className='text-gray-400 dark:text-extends-darker-blue-300'
        htmlFor='airline'
      >
        aerolíneas
      </label>
      <select
        id='airline'
        className='border-b border-gray-400 dark:border-gray-400'
        name='airline'
      >
        <option value=''>Seleccione una aerolínea</option>
        {airlines.map((airline) => (
          <option key={airline} value={airline}>
            {airline}
          </option>
        ))}
      </select>
    </div>
  );
};

export const AmountOfPeople = () => {
  return (
    <div className='flex flex-col text-base leading-6 gap-2'>
      <label
        className='text-gray-400 dark:text-extends-darker-blue-300'
        htmlFor='amountOfPeople'
      >
        cantidad personas
      </label>
      <select
        id='amountOfPeople'
        name='amountOfPeople'
        className='border-b border-gray-400 dark:border-gray-400'
      >
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </select>
    </div>
  );
};

export const Example = () => {
  const formsFields = [
    {
      name: 'Name',
      placeholder: 'Enter your name',
    },
    {
      name: 'Country',
      options: [
        { id: '1', name: 'USA' },
        { id: '2', name: 'Canada' },
        { id: '3', name: 'Mexico' },
      ],
    },
  ];

  return <GenerateForm formsFields={formsFields} />;
};
