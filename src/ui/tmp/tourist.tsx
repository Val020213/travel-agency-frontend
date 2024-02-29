import { tourist } from "@/libs/definitions"

export const Tourist = ({ tourist }: { tourist: tourist }) => {
    return (
        <div className="shadow-xl p-6 flex flex-col gap-2 rounded-2xl">
            <h1 className=" text-xl text-gray-800 dark:text-white"> {tourist?.name} </h1>
            <p className="text-base text-gray-500 dark:text-gray-500"> ID: {tourist.id} </p>
            <p className="text-base text-gray-500 dark:text-gray-500">Nationality: {tourist.nationality} </p>
        </div>
    )
}