// define all types and interfaces here
import { ReactElement } from "react";

// hint: prisma
export type category = {
    name: string,
    href: string,
    icon: React.ReactNode,
}

export type tourist = {
    id: number,
    name: string,
    nationality: string,
}
