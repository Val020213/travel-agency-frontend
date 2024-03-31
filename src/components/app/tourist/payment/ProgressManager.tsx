import {
  PlaneIcon,
  CreditCardIcon,
  TicketIcon,
} from '@/components/app/tourist/payment/icons/icon';

export const ProgressManager = ({step} : {step : number}) => {

  return (
    <div className='flex flex-row justify-between items-center px-2 sm:px-8 md:px-12 lg:px-52 relative'>
      <PlaneIcon isActive={step >= 0} />
      <TicketIcon isActive={step > 1} />
      <CreditCardIcon isActive={step > 2} />
    </div>
  );
};
