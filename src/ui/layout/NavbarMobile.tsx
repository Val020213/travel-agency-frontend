import { useState } from 'react';
import { SearchBar } from '@/ui/layout/SearchBar';
import clsx from 'clsx';

export const NavbarMobile = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <button onClick={() => handleClick()} className={clsx('rounded-full')}>
      <SearchBar />
    </button>
  );
};
