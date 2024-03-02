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
        " gap-9 p-9 pb-12",
        "md:w-[700px] w-[300px]",
      )}
    >
      <h1 className="text-4xl font-medium text-gray-900 dark:text-white">{name}</h1>
      <div className="flex w-full flex-col gap-4 *:flex *:flex-row *:gap-2 text-gray-500 dark:text-extends-darker-blue-200 text-lg">
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
