import Link from "@docusaurus/Link";
import clsx from "clsx";
import React, { FC, PropsWithChildren, SVGProps } from "react";
import styles from "./styles.module.css";

type Props = {
  className?: string;
  icon?: React.ReactNode;
  to?: string;
  onClick?: () => void;
};

export const LandingSectionCtaButtonAlt: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  to,
  onClick,
  icon,
}) => {
  return (
    <Link
      to={to}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={clsx(
        className,
        "select-none sm:max-w-[293px] mx-auto relative rounded-full flex items-center justify-center gap-2 py-3 pr-4 pl-6 text-base font-semibold overflow-hidden",
        "text-[#0080ff] bg-[#0080ff1a]",
        "dark:text-[#47ebeb] dark:bg-[#47ebeb1a]",
        styles.ctaHover
      )}
      style={{ textDecoration: "none" }}
    >
      {children}
      {icon || <DefaultIcon />}
    </Link>
  );
};

const DefaultIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M10.646 14.146a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L12.793 12l-2.147 2.146Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 1a7 7 0 1 1 0 14 7 7 0 0 1 0-14Z"
      clipRule="evenodd"
    />
  </svg>
);
