export const ReservationSection = () => {
  const reservations = []; //fetch reservations
  return (
    <div className='flex flex-col justify-start item-start'>
      <div className='text-xl md:text-4xl text-gray-900 dark:text-white font-medium'>
        Reservations
      </div>
      <div>Aqui van las reservaciones</div>
    </div>
  );
};
