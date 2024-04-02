import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from '@/components/ui/select';

export type IFormField = {
  name: string;
};

export type IFormInput = IFormField & {
  placeholder: string;
  type?: string;
};

export type IOption = IFormField & {
  id: string;
};

export type IFormSelect = IFormField & {
  title: string;
  options: IOption[];
};

export function GenerateForm({
  formsFields,
}: {
  formsFields: IFormField[];
}) {
  return (
    <div className='flex flex-col *:w-full gap-6'>
      {formsFields.map((field, index) => {
        return (
          <div className='flex flex-col text-base leading-6 gap-2' key={index}>
            <label
              className='text-gray-300 dark:text-extends-darker-blue-300'
              htmlFor={field.name}
            >
              {field.name}
            </label>
            {'placeholder' in field && (
              <input
                required
                className='md:text-xl border-b border-gray-300 dark:border-gray-400'
                type={(field as IFormInput).type || 'text'}
                name={field.name}
                placeholder={(field as IFormInput).placeholder}
              />
            )}
            {'options' in field && 'title' in field && (
              <Select name={field.name}>
                <SelectTrigger
                  id={field.name}
                  className='border-b border-gray-300 dark:border-gray-400'
                >
                  <SelectValue placeholder={field.title as string} />
                </SelectTrigger>
                <SelectContent
                  position='popper'
                  className='fixed w-max gap-px overflow-scroll p-4 mt-1 h-60 md:h-48 bg-white shadow-md dark:bg-extends-darker-blue-900'
                >
                  {(field as IFormSelect).options.map((option, index) => (
                    <SelectItem key={index} value={option.id}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
        );
      })}
    </div>
  );
}

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
}