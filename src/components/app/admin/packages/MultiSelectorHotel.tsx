import { FetchHotels } from '@/lib/data/data';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Checkbox } from '@/components/ui/checkbox';
import { Suspense } from 'react';

export async function MultiSelectorHotel() {
  const hotels = await FetchHotels('', 1);

  return (
    <Suspense fallback={<div>Cargando hoteles...</div>}>
      <DropdownMenu>
        <DropdownMenuTrigger>Seleccionar Hotel</DropdownMenuTrigger>
        <DropdownMenuContent className='flex flex-col gap-1'>
          {hotels.map((hotel) => (
            <Checkbox key={hotel.id} value={hotel.id} name='hotel'>
              <DropdownMenuItem key={hotel.id}>{hotel.name}</DropdownMenuItem>
            </Checkbox>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </Suspense>
  );
}
