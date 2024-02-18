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
        'hover:text-blue-500 text-gray-800 dark:text-gray-50 font-semibold',
        'leading-7 text-xl'
      )}
    >
      {title}
    </button>
  );
};
