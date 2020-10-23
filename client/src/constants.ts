import { Transition, Variants } from "framer-motion"

export const routerAnimationsRight: Variants = {
    animate: { left: 0 },
    exit: { left: "-100vw" },
    initial: { left: "100vw" },
}

export const routerAnimationsLeft: Variants = {
    animate: { left: 0 },
    exit: { left: "100vw" },
    initial: { left: "-100vw" },
}

export const routerTransition: Transition = { type: "spring", damping: 19 }

export enum Directions {
    left,
    right,
}

export interface App {
    id: string,
    name: string,
    image: string,
    tag: string,
    description: string,
    changelog: string,
    launchLink: string,
    githubLink?: string,
}

export enum BtnColor {
    green="green",
    red="red",
    grey="grey",
    blue="blue"
}