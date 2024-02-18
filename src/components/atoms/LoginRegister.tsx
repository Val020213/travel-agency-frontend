import clsx from 'clsx';

export const LoginRegisterButton = ({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={() => onClick()}
      className={clsx(
        'text-blue-600 dark:text-gray-50 opacity-75 hover:opacity-100 font-semibold',
        'leading-7 text-xl'
      )}
    >
      {title}
    </button>
  );
};
