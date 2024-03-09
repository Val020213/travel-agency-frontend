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
        "items-start",
        "rounded-3xl md:rounded-[36px]",
        "shadow-xl",
        "bg-white dark:bg-extends-darker-blue-900",
        ' gap-2 p-4',
        " w-[266px] md:w-[296px]"
      )}
    >
    
      <div className=
        // {
        // clsx(
        // "rounded-[20px]",
        // "relative",
        // "flex flex-col",
        // "justify-start",
        // "items-center",
        // "shadow-xl",
        // " bg-green-300 ",
        // ' gap-0 p-7',
        // )}
        // <IconBus size={35} className="text-green-600"  />
         {
           clsx(
             "rounded-[20px]",
             "relative",
             "flex flex-col",
             "justify-start",
             "items-center",
             "shadow-xl",
             " bg-blue-300",
             ' gap-0 p-7',
             )}
        > 
        
        <IconPlane size={35} className="text-blue-600"  />
      </div>

    
    

    <div
    className={clsx(
          'flex w-full flex-col',
          'md:gap-4 *:flex *:flex-row *:gap-2',

        )}
    >

      <div>
        <h1 className={clsx(
          ' w-full ',
          ' line-clamp-3',
          'hover:line-clamp-none',
          'text-xl font-semibold',
          'text-gray-800 dark:text-white'
          )}>
        {messageUp}
        </h1>
      </div>

      <div className="text-base">
        {messageDown}
      </div>
    
    </div>



    </div>
  );
};
