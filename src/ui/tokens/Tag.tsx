import clsx from 'clsx';

export const Tag = ({
  text,
  icon = undefined,
  className = '',
}: {
  text: string;
  icon: React.ReactNode | undefined;
  className: string | undefined;
}) => {
  return (
    <div
      className={clsx(
        { className },
        'flex flex-row w-fit items-center justify-center',
        'bg-orangePinkRight gap-0 md:gap-2',
        'text-white',
        'px-4 py-2',
        'rounded-full',
        'text-base leading-6'
      )}
    >
      {text}
      {icon}
    </div>
  );
};
