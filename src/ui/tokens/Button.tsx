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
      className={clsx(className, 'flex flex-row py-16 px-24 hover:opacity-60')}
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
