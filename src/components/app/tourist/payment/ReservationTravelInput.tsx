import {
  FetchUser,
  GetAgencyByExcursionID,
  GetAgentByUserID,
} from '@/lib/data/data';
import { UserInfoCard } from './UserInfoCard';
import { SelectUser } from './SelectorUser';
import clsx from 'clsx';

export default async function ReservationTravelInput({ excursionID }: { excursionID?: number }) {
  const user = await FetchUser();

  if (!user) {
    return;
  }

  const userAgency = await GetAgentByUserID(user.id);

  return (
    <div className='flex flex-col gap-16'>
      <h2 className='text-3xl text-gray-800 dark:text-extends-darker-blue-200'>
        Datos de las reservaciones
      </h2>
      {user.rol === 'agent' ? (
        <>
          <SelectUser />
          <select name='agency_id' key={'agency_id'} className='hidden'>
            <option key={'agency_id'} value={userAgency?.agencyID}></option>
          </select>
        </>
      ) : (
        <>
          <select key={'touristID'} name='touristID' className='hidden'>
            <option value={user.id}></option>
          </select>
          <UserInfoCard userID={user.id} />
          {excursionID && <SelectAgency excursionID={excursionID} />}
        </>
      )}
    </div>
  );
}

export async function SelectAgency({ excursionID }: { excursionID: number }) {
  const agencies = await GetAgencyByExcursionID(excursionID);
  return (
    <select
      name='agency_id'
      key={'agnecy_id'}
      className='w-full p-2 border border-gray-300 dark:border-gray-400 rounded-md'
    >
      {agencies.map((agency) => (
        <option key={agency.id} value={agency.id}>
          {agency.name}
        </option>
      ))}
    </select>
  );
}
