import clsx from 'clsx';
import Link from 'next/link';

export const Button = ({
  title,
  icon,
  className,
  href = '',
  action = () => {},
}: {
  title: string;
  icon?: React.ReactNode;
  className?: string;
  href?: string;
  action?: () => void;
}) => {
  return (
    <Link
      href={href}
      onClick={action}
      className={clsx(
        className,
        'flex flex-row justify-center items-center w-fit px-8 py-3 rounded-lg hover:bg-black transition-all duration-300 ease-in-out text-white font-medium text-lg gap-1'
      )}
    >
      {title}
      {icon}
    </Link>
  );
};

export const SpecialButton = ({
  title,
  icon,
  className,
  href = '',
  action = () => {},
}: {
  title: string;
  icon?: React.ReactNode;
  className?: string;
  href?: string;
  action?: () => void;
}) => {
  return (
    <Button
      title={title}
      icon={icon}
      action={action}
      href={href}
      className={clsx(className, 'bg-orangePinkLeft')}
    />
  );
};
