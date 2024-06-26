import { FetchFacilities, FetchHotels } from '@/lib/data/data';
import { Checkbox } from '@/components/ui/checkbox';
import { facility, hotel } from '@/lib/entities';
import { Menu } from '../../../ui/Menu';

export async function MultiSelectorFacilities() {
  const facilities: facility[] = await FetchFacilities('', 1);

  return (
    <Menu placeholder='Seleccione las facilidades'>
      <div className='flex flex-col gap-2'>
        {facilities.map((facility, index) => {
          return (
            <div className='flex flex-row items-center gap-2' key={index}>
              <Checkbox value={facility.id} id={String(facility.id)} name='facility' />
              <label>{facility.description}</label>
            </div>
          );
        })}
      </div>
    </Menu>
  );
}


export async function MultiSelectorHotel() {
  const hotels: hotel[] = await FetchHotels('', 1);

  return (
    <Menu placeholder='Seleccione las facilidades'>
      <div className='flex flex-col gap-2'>
        {hotels.map((hotel, index) => {
          return (
            <div className='flex flex-row items-center gap-2' key={index}>
              <Checkbox value={hotel.id} id={String(hotel.id)} name='hotel' />
              <label>{hotel.name}</label>
            </div>
          );
        })}
      </div>
    </Menu>
  );
}

