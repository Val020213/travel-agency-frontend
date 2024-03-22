import Link from 'next/link';
import clsx from 'clsx';

export const Login = ({ title }: { title: string }) => {
  return (
    <Link
      href='?login=true'
      className={clsx(
        'text-gray-800 dark:text-gray-50 hover:text-blue-500 font-semibold',
        'leading-7 text-xl'
      )}
    >
      {title}
    </Link>
  );
};
