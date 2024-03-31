import { FetchHotels } from '@/lib/data/data';
import { Checkbox } from '@/components/ui/checkbox';
import { hotel } from '@/lib/entities';
import { Menu } from '../../../ui/Menu';

export async function MultiSelectorHotel() {
  const hotels: hotel[] = await FetchHotels('', 1);

  return (
      <Menu placeholder='Seleccione el hotel'>
        <div className='flex flex-col gap-2'>
          {hotels.map((hotel, index) => {
            return (
              <div className='flex flex-row items-center gap-2' key={index}>
                {/* <div onClick={() => setSelected(AddorRemove(hotel.name, selected))}> */}
                <Checkbox value={hotel.id} id={String(hotel.id)} name='hotel' />
                <label>{hotel.name}</label>
                {/* </div> */}
              </div>
            );
          })}
        </div>
      </Menu>
  );
}
