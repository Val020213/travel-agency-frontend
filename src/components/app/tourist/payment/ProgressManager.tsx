'use client'
import {
  PlaneIcon,
  CreditCardIcon,
  TicketIcon,
} from '@/components/app/tourist/payment/icons/icon';
import { useSearchParams } from 'next/navigation';

export const ProgressManager = () => {
  const step = Number(useSearchParams().get('step') ?? '0')
  
  return (
    <div className='flex flex-row justify-between items-center px-2 sm:px-8 md:px-12 lg:px-52'>
      <PlaneIcon isActive={step >= 0} />
      <TicketIcon isActive={step >= 1} />
      <CreditCardIcon isActive={step >= 2} />
    </div>
  );
};
