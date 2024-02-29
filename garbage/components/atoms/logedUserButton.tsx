import { IconUserCircle } from '@tabler/icons-react';

export const LogedUserButton = ({
  name,
  onClick,
}: {
  name: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={() => onClick()}
      className='text-gray-800 dark:text-gray-50 text-xl leading-7 font-semibold'
    >
      {name}
      <IconUserCircle stroke={1.5} />
    </button>
  );
};
