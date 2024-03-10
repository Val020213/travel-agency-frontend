import clsx from "clsx";
import {
  IconBus,
  IconPlane,
  IconBackpack,
  IconCategory2
} from "@tabler/icons-react";
import { useState, useEffect } from "react";

//aqui podria importar todos los iconos para hacerlo dry
//en dependencia de la instancia printear uno u otro

export const CategoryCard = ({ categoryType }: { categoryType: number }) => {
  interface CardStyle {
    icon: JSX.Element;
    color: string;
    message: {
      desktopTop: string;
      desktopDown: string;
      mobileTop: string;
      mobileDown: string;
    };
  }
  const cardStyles: { [key: number]: CardStyle } = {
    1: {
      icon: <IconPlane size={35} className="text-blue-600" />,
      color: "bg-blue-300",
      message: {
        desktopTop: "Conoce el mundo con nuestras agencias",
        desktopDown: "Tenemos viajes a todos los países, sin limitaciones, somos una compañía sin fronteras, contáctanos!",
        mobileTop: "Agencias",
        mobileDown: "Somos una compañía sin fronteras, contáctanos!",
      },
    },
    2: {
      icon: <IconBus size={35} className="text-green-600" />,
      color: "bg-green-300",
      message: {
        desktopTop: "Fortalece tus lazos familiares con nuestras excursiones",
        desktopDown: "Regálales a tus famailiares un recuerdo unico con nuestras excursiones, tenemos excursiones para todas las edades",
        mobileTop: "Excursiones",
        mobileDown: "Regálales a tus famailiares un recuerdo único",
      },
    },
    3: {
      icon: <IconCategory2 size={35} className="text-rose-600" />,
      color: "bg-rose-300",
      message: {
        desktopTop: "Todas nuestras ofertas",
        desktopDown: "Somos la compania No. 1 en ofertas del mes, experiencias nuevas, todo tipo de precios, vivimos por ti",
        mobileTop: "Todas nuestras ofertas",
        mobileDown: "Somos la compañía No. 1 en ofertas del mes",
      },
    },
    4: {
      icon: <IconBackpack size={35} className="text-orange-600" />,
      color: "bg-orange-300",
      message: {
        desktopTop: "Se afortunado con un paquete",
        desktopDown: "Dejanos todo en tus manos, seremos tus guias. Esta nueva modalidad incluye hotel, excursiones, mejores ofertas, todo lo que necesitas en tus vacaciones",
        mobileTop: "Paquetes",
        mobileDown: "Dejanos todo en tus manos, guiamos tu aventura",
      },
    },
  };

  const selectedStyle = cardStyles[categoryType] || cardStyles[1]; 
   const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


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
        " gap-2 p-4",
        " w-[266px] md:w-[296px]"
      )}
    >
      <div
        className={clsx(
          "rounded-[20px]",
          "relative",
          "flex flex-col",
          "justify-start",
          "items-center",
          "shadow-xl",
          selectedStyle.color,
          " gap-0 p-7"
        )}
      >
        {selectedStyle.icon}
      </div>

      <div
        className={clsx(
          "flex w-full flex-col",
          "md:gap-4 *:flex *:flex-row *:gap-2"
        )}
      >
        <div>
          <h1
            className={clsx(
              " w-full ",
              " line-clamp-3",
              "hover:line-clamp-none",
              "text-xl font-semibold",
              "text-gray-800 dark:text-white"
            )}
          >
            {isMobileView ? selectedStyle.message.mobileTop : selectedStyle.message.desktopTop}
          </h1>
        </div>

        <div className="text-base">{ isMobileView ? selectedStyle.message.mobileDown : selectedStyle.message.desktopDown}</div>
      </div>
    </div>
  );
};
