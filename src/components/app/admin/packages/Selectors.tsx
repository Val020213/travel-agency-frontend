import { FetchAgencies, FetchExtended } from "@/lib/data/data";
import { excursion } from "@/lib/entities";


export async function Selectors() {

    const allExtended_excurions: excursion[] = await FetchExtended()


    return (
        <div className="flex flex-col py-8 gap-8 text-gray-600">
            <div className="flex flex-col gap-2">
                <label
                    className='text-gray-300 dark:text-extends-darker-blue-300'
                >
                    excursiones prolongadas
                </label>
                <select name="extended_excursion_id" id="extended_excursion_id" className='border-b border-gray-400 dark:border-gray-400 w-max' >
                    {
                        allExtended_excurions.map((extended_excursion) => (
                            <option key={extended_excursion.id} value={extended_excursion.id}>{extended_excursion.arrivalLocation}</option>
                        ))
                    }
                </select>
            </div>
            <AgenciesSelector />
        </div>
    )

}

async function AgenciesSelector() {
    const allAgencies = await FetchAgencies(1, 10000);
    return (
        <div className="flex flex-col gap-2">
            <label
                className='text-gray-300 dark:text-extends-darker-blue-300'
            >
                agencias
            </label>
            <select name="agency_id" id="agency_id" className='border-b border-gray-400 dark:border-gray-400 w-max' >
                {
                    allAgencies.map((agency) => (
                        <option key={agency.id} value={agency.id}>{agency.name}</option>
                    ))
                }
            </select>
        </div>
    )
}