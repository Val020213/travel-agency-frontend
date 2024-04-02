import { FetchExcursionsReservationsByTourist, FetchPackagesReservationsByTourist, FetchUser } from "@/lib/data/data";
import { CardContent, Card } from "@/components/ui/card"
import { LayoutGrid } from "../../layout/LayoutGrid";
import { Tag } from "@/components/ui/tokens/Tag";
import { IconVip } from "@tabler/icons-react";
import { db } from "@/lib/utils";
import { TicketIcon } from "../payment/icons/icon";

export async function ReservationSection() {
  const tourist = await FetchUser()

  if (!tourist) {
    return
  }

  const packagesReservations = await FetchPackagesReservationsByTourist(tourist.id)
  const excursionReservations = await FetchExcursionsReservationsByTourist(tourist.id)
  const isAgencyTourist = packagesReservations.length >= 1
  return (
    <div className='flex flex-col justify-start item-start gap-6'>
      <div className='text-xl md:text-4xl text-gray-900 dark:text-white font-medium'>
        <div className="flex flex-row justify-between">
          Reservaciones
          {isAgencyTourist && <Tag text='turista de agencia' className='' icon={<IconVip />} />}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          packagesReservations.map((pack, index) => (
            <Ticket key={index} title={'Comprobante'} Fields={[
              {
                name: 'Fecha',
                description: pack.date
              },
              {
                name: 'Personas',
                description: String(pack.amountOfPeople)
              },
              {
                name: 'Aereolinea',
                description: String(pack.airline)
              },
            ]} />
          ))
        }
        {
          excursionReservations.map((excursion, index) => (
            <Ticket key={index} title={'Comprobante'} Fields={[
              {
                name: 'Fecha',
                description: excursion.date
              },
              {
                name: 'Personas',
                description: String(excursion.amountOfPeople)
              },
              {
                name: 'Aereolinea',
                description: String(excursion.airline)
              },
            ]} />
          ))}
      </div>
    </div>
  );
};

type myFields = {
  name: string,
  description: string
}

function Ticket({ title, Fields }: { title: string, Fields: myFields[] }) {

  return (
    <Card className="w-full">
      <CardContent className="p-4 grid gap-4">
        <div className="flex items-center gap-2">
          <TicketIcon isActive={true} />
          <div className="text-sm font-medium">{title}</div>
        </div>
        <div className="grid gap-1.5">
          {
            Fields.map((field, index) => (
              <div key={index} className="flex justify-between text-xs text-gray-500">
                <span>{field.name}</span>
                <span className="line-clamp-1">{field.description}</span>
              </div>
            ))
          }
        </div>
      </CardContent>
    </Card>
  )
}
