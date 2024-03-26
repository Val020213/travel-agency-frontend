import clsx from 'clsx';
import { useFormStatus } from 'react-dom';

export const ContinueButton = ({ text }: { text?: string }) => {
  const pending = useFormStatus().pending;
  return (
    <button
      aria-disabled={pending}
      className={clsx(
        'flex items-center justify-center',
        'bg-orangePinkRight text-white text-opacity-100 md:text-xl leading-7',
        'rounded-lg py-2 md:py-4 px-4 font-medium',
        ' hover:filter hover:brightness-75',
        {
          'bg-none bg-gray-300 text-gray-500': pending,
        }
      )}
    >
      {text || 'Continuar'}
    </button>
  );
};
