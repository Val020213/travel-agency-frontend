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
        "items-start",
        "rounded-[36px]",
        "shadow-xl",
        "bg-white dark:bg-extends-darker-blue-900",
        " gap-9 p-9",
        "w-[800px]",
        "h-80"
      )}
    >
      <h1 className="text-5xl text-gray-900 dark:text-white">{name}</h1>
      <div className=" flex flex-col gap-4 *:flex *:flex-row *:gap-2 text-gray-500 dark:text-extends-darker-blue-200">
        <div>
          <IconMapPin />
          {address}
        </div>
        <div>
          <IconBrandWhatsapp />
          {phone}
        </div>
      </div>
    </div>
  );
};
