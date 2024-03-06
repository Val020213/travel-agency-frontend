import Image from "next/image";

export type CardData = {
    imageSrc : string;
    title : string;
    description : string;
    href : string;
    price : number;
}

export type OfferCard = {
    price : number;
}

export type AgencyCard = {
    offersAmount : number ;
}


export default function Card(cardData: CardData): JSX.Element {
    return(
    <div className="flex flex-col">
        <Image alt="image_not_found" src={cardData.imageSrc} width={300} height={300} className="w-full" />
        <div className="flex flex-col pt-2 pb-4">
            <div className="text-xl leading-7 text-gray-800 dark:text-gray-50 line-clamp-2">
            {cardData.title}
            </div>
            <div className="text-lg leading-7 line-clamp-3 text-gray-500 dark:to-extends-darker-blue-300">
            {cardData.description}
            </div>
        </div>
    </div>
    )
}

const CardFactory = { }