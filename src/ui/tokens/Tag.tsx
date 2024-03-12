import clsx from 'clsx';

export const Tag = ({
  text,
  icon,
  className,
}: {
  text: string;
  icon?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        className,
        'flex flex-row w-fit items-center justify-center',
        'bg-orangePinkRight gap-0 md:gap-2',
        'text-white',
        'px-4 py-2',
        'rounded-full',
        'text-base leading-6'
      )}
    >
      {icon}
      {text}
    </div>
  );
};
