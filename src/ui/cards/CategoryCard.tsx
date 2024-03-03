import clsx from "clsx";
import {
  IconHome,
  IconBus,
  IconPlane,
  IconBackpack,
} from "@tabler/icons-react";

//aqui podria importar todos los iconos para hacerlo dry
//en dependencia de la instancia printear uno u otro

export const CategoryCard = ({messageUp, messageDown}: {messageUp: string, messageDown:string}) => {
  return (
    <div
      className={clsx(
        "relative",
        "flex flex-col",
        "justify-start",
        "items-center",
        "rounded-3xl md:rounded-[36px]",
        "shadow-xl",
        "bg-white dark:bg-extends-darker-blue-900",
        ' gap-2 md:p-9 md:pb-12',
        "w-[369px] md:w-[296px]"
      )}
    >
      <div className={clsx(
        "rounded-[20px]",
       "border-r-extends-green-600",
        "relative",
        "flex flex-col",
        "justify-start",
        "items-center",
        "rounded-[12px]",
        "shadow-xl",
        " bg-green-300 dark:bg-extends-darker-blue-900",
        ' gap-0 p-7',
        )}> 
        <div className={clsx(
            "flex-auto",
            "self-center",
            "justify-center",
            // "bg-green-600"
        )}
        >
        <IconBus size={35} className=""  />
        </div>
      </div>
      <div>
        <h1 className={clsx(
          'w-full',
          'text-xl text-left font-semibold',
          'text-gray-800 dark:text-white'
        )}>
        {messageUp}
        </h1>
      </div>
      <div className="text-base">
        {messageDown}
      </div>
    </div>
  );
};
