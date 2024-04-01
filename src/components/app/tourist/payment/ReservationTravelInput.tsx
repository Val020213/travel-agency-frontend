import { FetchTourists, FetchUser, FetchUsers } from '@/lib/data/data';
import { UserInfoCard } from './UserInfoCard';
import { SelectUser } from './SelectorUser';

export default async function ReservationTravelInput() {
  const user = await FetchUser();

  return (
    <div className='flex flex-col gap-16'>
      <h2 className='text-3xl text-gray-800 dark:text-extends-darker-blue-200'>
        Datos de las reservaciones
      </h2>
      {user?.rol === 'agent' ? (
        <SelectUser />
      ) : (
        <>
        <select key={'touristID'} name='touristID' className='hidden'>
          <option value={user?.id}></option>
        </select>
        <UserInfoCard userID={user?.id} />
        </>
      )}
    </div>
  );
}
