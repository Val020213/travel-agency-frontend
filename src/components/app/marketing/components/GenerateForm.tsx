import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@radix-ui/react-select';

export type IFormField = {
  name: string;
};

export type IFormInput = IFormField & {
  placeholder: string;
};

export type IOption = IFormField & {
  id: string;
};

export type IFormSelect = IFormField & {
  options: IOption[];
};

export function GenerateForm({
  formsFields,
}: {
  formsFields: IFormField[];
}) {
  return (
    <>
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
                type='text'
                name={field.name}
                placeholder={(field as IFormInput).placeholder}
              />
            )}
            {'options' in field && (
              <Select name={field.name}>
                <SelectTrigger
                  id={field.name}
                  className='border-b border-gray-300 dark:border-gray-400'
                >
                  <SelectValue placeholder={field.name} />
                </SelectTrigger>
                <SelectContent
                  position='popper'
                  className='fixed pt-1 h-60 md:h-48'
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
    </>
  );
}
