'use client'

import { Button } from "@/components/ui/button"
import { DeleteTouristTypeAssociation } from "@/lib/actions/Tourist/touristType";

export async function DeleteButton({ touristTypeID, touristID }: { touristTypeID: number, touristID: number }) {
    function DeleteBind(tourist_type_id: number, tourist_id: number) {
        return DeleteTouristTypeAssociation.bind(null, tourist_id, tourist_type_id);
    }
    return (
        <form action={DeleteBind(touristTypeID, touristID)}>
            <Button
                variant={'destructive'}
            >
                Eliminar
            </Button>
        </form>
    )
}