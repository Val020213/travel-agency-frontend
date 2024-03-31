import { FetchUser } from '@/lib/data/data';
import { UserInfoCard } from './UserInfoCard';

export default async function ReservationTravelInput() {
  const user = await FetchUser();
  return (
    <div className='flex flex-col gap-16'>
      <h2 className='text-3xl text-gray-800 dark:text-extends-darker-blue-200'>
        Datos de las reservaciones
      </h2>
      <select name='touristID' className='w-1/2 p-2 border border-gray-300 dark:border-gray-400 rounded-md hidden'>
        <option value={user?.id}></option>
      </select>
      <UserInfoCard userID={user?.id} />
    </div>
  );
}
