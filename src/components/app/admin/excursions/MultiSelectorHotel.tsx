import { FetchHotels } from '@/lib/data/data';

import { hotel } from '@/lib/entities';
import { Menu } from '../../../ui/Menu';
import { CheckFieldHotel } from './CheckFieldHotel';

export async function MultiSelectorHotel() {
  const hotels: hotel[] = await FetchHotels('', 1);

  return (
    <Menu placeholder='Seleccione el hotel'>
      <div className='flex flex-col gap-2'>
        {hotels.map((hotel, index) => {
          return (
            <CheckFieldHotel key={index} hotelName={hotel.name} hotelID={hotel.id} />
            );
          })}
      </div>
    </Menu>
  );
}
