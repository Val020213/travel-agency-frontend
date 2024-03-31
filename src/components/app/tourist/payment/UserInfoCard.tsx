import Image from "next/image";
import { GetTouristByID } from "@/lib/data/data";
import { tourist } from "@/lib/entities";

export async function UserInfoCard({userID} : {userID : number | undefined} ) {
    
    if(!userID){
        return
    }

    const tourist: tourist | undefined = await GetTouristByID(userID);
  
    return (
      <div className='flex flex-row gap-6  bg-extends-blue-gray-100 dark:bg-extends-darker-blue-900 p-8 rounded-2xl'>
        <Image
          src={require('@/assets/profile.png')}
          width={230}
          height={230}
          alt='google'
          className='h-auto w-auto'
        />
        <div className='flex flex-col gap-3 text-gray-600 dark:text-gray-400'>
          <h2 className='text-2xl text-gray-800 dark:text-extends-darker-blue-200'>
            Reservación a nombre de:
          </h2>
          <div className='flex flex-col text-base leading-6'>
            <label
              className='text-gray-300 dark:text-extends-darker-blue-300'
              htmlFor='address'
            >
              nombre de usuario
            </label>
            <div className='md:text-xl border-b border-gray-300 dark:border-gray-400'>
              {tourist?.name}
            </div>
          </div>
          <div className='flex flex-col text-base leading-6'>
            <label
              className='text-gray-300 dark:text-extends-darker-blue-300'
              htmlFor='address'
            >
              correo
            </label>
            <div className='md:text-xl border-b border-gray-300 dark:border-gray-400'>
              {tourist?.email}
            </div>
          </div>
          <div className='flex flex-col text-base leading-6'>
            <label
              className='text-gray-300 dark:text-extends-darker-blue-300'
              htmlFor='address'
            >
              nationalidad
            </label>
            <div className='md:text-xl border-b border-gray-300 dark:border-gray-400'>
              {tourist?.nationality}
            </div>
          </div>
        </div>
      </div>
    );
  }
  