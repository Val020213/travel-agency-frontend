'use client';
import { Button } from '@/components/ui/button';
import { CreateTTTourist, TouristTypeState } from '@/lib/actions/Tourist/touristType';
import {
    FetchTouristType,
} from '@/lib/data/data';
import { touristType } from '@/lib/entities';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';

export function CreateAssociationComponent({ touristID }: { touristID: number }) {

    const initialState: TouristTypeState = {
        message: '',
        errors: {},
    };

    const createPackageWithId = CreateTTTourist.bind(
        null,
        touristID,
    );
    const [state, dispatch] = useFormState(createPackageWithId, initialState);

    const [allTouristTypes, setAllTouristTypes] = useState<touristType[]>([]);

    useEffect(() => {
        FetchTouristType('', 1, 10000).then((data) => {
            setAllTouristTypes(data);
        });
    }, [state]);

    return (
        <form className='flex flex-col gap-4' action={dispatch}>
            <div className='flex flex-row gap-4 items-center justify-between'>
                <div className='flex flex-col gap-1 text-base text-gray-600 dark:text-extends-darker-blue-200 w-full'>
                    <select
                        name='touristTypeID'
                        id='touristTypeID'
                        className='border-b border-gray-400 dark:border-gray-400'
                    >
                        {allTouristTypes.map((tourist_type) => (
                            <option key={tourist_type.id} value={tourist_type.id}>
                                {tourist_type.name}
                            </option>
                        ))}
                    </select>
                </div>
                <Button className='bg-green-500 dark:bg-green-400 p-5' type='submit'>Asociar</Button>
            </div>
            <div>
                {
                    state.errors && (
                        <div className='text-red-500 dark:text-red-400'>
                            {state.errors.touristTypeID}
                        </div>
                    )
                }
                {
                    state.message && (
                        <div className='text-red-500 dark:text-red-400'>
                            {state.message}
                        </div>
                    )
                }
            </div>
        </form>
    )
}