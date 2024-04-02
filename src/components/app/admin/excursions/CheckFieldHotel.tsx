'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from "react";

export function CheckFieldHotel({ hotelName, hotelID }: { hotelName: string, hotelID: number }) {
    const [checked, setChecked] = useState<boolean>(false);
    return (
        <div key={hotelID} className='flex flex-row text-nowrap items-center  gap-3 justify-between bg-inherit max-w-screen-md'>
            <div className='flex flex-row gap-2 text-nowrap items-center'>
            <Checkbox value={hotelID} id={String(hotelID)} name='hotel' onCheckedChange={() => setChecked(true)} />
            <label>{hotelName}</label>
            </div>
            {
                checked && (
                    <div className='flex flex-row gap-4'>
                        <input type="date" name="dateHotel1" required  className='border-b-2 border-gray-400 focus:border-orange-500'/>
                        <input type="date" name="dateHotel2" required  className='border-b-2 border-gray-400 focus:border-orange-500'/>
                    </div>
                )
            }
        </div>
    );
}

