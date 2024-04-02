import { Button } from '@/components/ui/button';
import { DeleteTouristTypeAssociation } from '@/lib/actions/Tourist/touristType';
import {
    FetchUser,
    GetTouristByID,
    GetTouristTypeByID,
} from '@/lib/data/data';
import { CreateAssociationComponent } from './CreateAssociation';
import { DeleteButton } from './DeleteType';

export async function TouristTypeSection() {
    const user = await FetchUser();

    if (!user) {
        return;
    }

    const tourist = await GetTouristByID(user.id);

    if (!tourist) {
        return;
    }

    const touristID = tourist.id;

    const tourist_types = await GetTouristTypeByID(touristID);

    return (
        <section className='flex flex-col gap-4'>
            <h2 className='text-xl md:text-4xl text-gray-900 dark:text-white font-medium'>
                Tipos de Turista asociados
            </h2>
            <ul className='flex flex-col gap-3'>
                {tourist_types.map((tourist_type) => (
                    <li key={tourist_type.id} className='flex flex-row gap-4 items-center justify-between'>
                        <span className='border-b border-gray-300 w-full'>{tourist_type.name}</span>
                        <DeleteButton touristTypeID={tourist_type.id} touristID={touristID} />
                    </li>
                ))}
            </ul>
            <CreateAssociationComponent touristID={touristID} />
        </section>
    );
}
