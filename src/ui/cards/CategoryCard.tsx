import clsx from "clsx";
import {
  IconBus,
  IconPlane,
  IconBackpack,
  IconCategory2
} from "@tabler/icons-react";
import { useBreakpoints } from "@/hooks/useBreakpoint";
import React from "react";
import Link from "next/link";

type CardStyle = {
  icon: React.ReactNode;
  message: {
    title: string;
    description: string;
    shortTitle: string;
    shortDescription: string;
  };
}

const cardStyles: { [key: number]: CardStyle } = {
  1: {
    icon: <IconCategory2 size={24} stroke={1.5} className="text-rose-600  dark:text-rose-800 w-16 h-16 p-5 bg-rose-300" />,
    message: {
      title: "Todas nuestras ofertas",
      description: "Somos la compania No. 1 en ofertas del mes, experiencias nuevas, todo tipo de precios, vivimos por ti",
      shortTitle: "Todas nuestras ofertas",
      shortDescription: "Somos la compañía No. 1 en ofertas del mes",
    },
  },
  2: {
    icon: <IconBus size={24} stroke={1.5} className="text-green-600 dark:text-green-800 w-16 h-16 p-5 bg-green-300" />,
    message: {
      title: "Fortalece tus lazos familiares con nuestras excursiones",
      description: "Regálales a tus famailiares un recuerdo unico con nuestras excursiones, tenemos excursiones para todas las edades",
      shortTitle: "Excursiones",
      shortDescription: "Regálales a tus famailiares un recuerdo único",
    },
  },
  3: {
    icon: <IconBackpack size={24} stroke={1.5} className="text-orange-600 dark:text-orange-800 w-16 h-16 p-5 bg-orange-300" />,
    message: {
      title: "Se afortunado con un paquete",
      description: "Dejanos todo en tus manos, seremos tus guias. Esta nueva modalidad incluye hotel, excursiones, mejores ofertas, todo lo que necesitas en tus vacaciones",
      shortTitle: "Paquetes",
      shortDescription: "Dejanos todo en tus manos, guiamos tu aventura",
    },
  },
  4: {
    icon: <IconPlane size={24} stroke={1.5} className="text-blue-600 dark:text-blue-800 w-16 h-16 p-5 bg-blue-300" />,
    message: {
      title: "Conoce el mundo con nuestras agencias",
      description: "Tenemos viajes a todos los países, sin limitaciones, somos una compañía sin fronteras, contáctanos!",
      shortTitle: "Agencias",
      shortDescription: "Somos una compañía sin fronteras, contáctanos!",
    },
  },
};


export const CategoryCard = ({ categoryType, href }: { categoryType: number, href: string }) => {

  const selectedStyle = cardStyles[categoryType];
  const bp = useBreakpoints();

  return (
    selectedStyle && (
      <Link href={href}
        className={clsx(
          "relative",
          "flex flex-col",
          "justify-start",
          "items-start",
          "rounded-3xl md:rounded-[36px]",
          "hover:shadow-xl hover:border hover:border-gray-100 hover:dark:border-extends-darker-blue-900",
          "hover:dark:bg-extends-darker-blue-900",
          "gap-2 p-8",
          "w-72 md:w-80"
        )}
      >
        <div className="rounded-xl overflow-clip">
          {selectedStyle.icon}
        </div>

        <div
          className={clsx(
            "flex w-full flex-col",
            "md:gap-4 *:flex *:flex-row *:gap-2"
          )}
        >
          <h1
            className={clsx(
              "w-full ",
              "line-clamp-3",
              "hover:line-clamp-none",
              "text-xl font-medium",
              "text-gray-800 dark:text-white"
            )}
          >
            {!bp.sm ? selectedStyle.message.shortTitle : selectedStyle.message.title}
          </h1>
          <p className="text-base text-gray-500 dark:text-extends-darker-blue-300">{!bp.sm ? selectedStyle.message.shortDescription : selectedStyle.message.description}</p>
        </div>
      </Link>)
  );
};
