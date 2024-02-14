import { SVGProps } from "react";
import clsx from "clsx";


export function IconFactory(
  { icon, size = 64, className }: { icon: React.ReactNode, size?: number, className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      className={clsx(className)}
    >
      <rect
        width={size}
        height={size}
        fill="url(#access-control-a)"
        fillOpacity={0.4}
        rx={16}
      />
      <rect
        width={size - 1}
        height={size - 1}
        x={0.5}
        y={0.5}
        // stroke="url(#access-control-b)"
        strokeOpacity={0.5}
        rx={15.5}
      />
      {icon}
      <defs>
        <radialGradient
          id="access-control-a"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(45) scale(90.5097)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="currentColor" />
          <stop offset={1} stopColor="currentColor" stopOpacity={0.25} />
        </radialGradient>
        <radialGradient
          id="access-control-b"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(45) scale(90.5097)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="currentColor" />
          <stop offset={0.5} stopColor="currentColor" stopOpacity={0} />
          <stop offset={1} stopColor="currentColor" stopOpacity={0.25} />
        </radialGradient>
      </defs>
    </svg>
  );

}