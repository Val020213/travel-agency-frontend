import clsx from "clsx";
import { IconMapPin ,IconBrandWhatsapp} from "@tabler/icons-react";
export const InfoCard = ({
  name,
  address,
  phone,
}: {
  name: string;
  address: string;
  phone: string;
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col",
        " justify-start",
        "items-center",
        "rounded-[36px]",
        "shadow-xl",
        "bg-white dark:bg-extends-darker-blue-900",
        "gap-3 p-8 pb-8 md:gap-9 md:p-9 md:pb-12",
        "w-[300px] md:w-[700px]",
      )}
    >
      <h1 className=" w-full mx-auto break-words text-xl text-center md:text-4xl font-medium text-gray-900 dark:text-white">{name}</h1>
      <div className="flex w-full mx-auto break-words flex-col gap-4 *:flex *:flex-row *:gap-2 text-gray-500 dark:text-extends-darker-blue-200 text-base md:text-lg">
        
        <div>
          <IconMapPin/>
          <div className="w-full mx-auto">
          {address}
          </div>
        </div>
        <div >
          <IconBrandWhatsapp />
          <div className="w-full mx-auto">
          {phone}
          </div>
        </div>
      </div>
    </div>
  );
};
