import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

const className = clsx(
  'flex items-center justify-center',
  'bg-orangePinkRight text-white text-opacity-100 md:text-xl leading-7',
  'rounded-lg py-2 md:py-4 px-4 font-medium',
  ' hover:filter hover:brightness-75'
);

export const ContinueLink = ({
  text,
  href,
}: {
  text?: string;
  href: string;
}) => {
  return (
    <Link className={className} href={href}>
      {text}
    </Link>
  );
};

export const ContinueButton = ({ text }: { text?: string }) => {
  const pending = useFormStatus().pending;
  return (
    <button className={className} aria-disabled={pending}>
      {text || 'Continuar'}
    </button>
  );
};
