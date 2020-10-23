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
    tag: {
        tag: string;
        tagType: TagType;
    },
    description: string,
    changelog: string,
    githubLink?: string,
    btns?: Array<Btn>,
}

export enum BtnColor {
    green="green",
    red="red",
    grey="grey",
    blue="blue"
}

export enum TagType {
    new = "new",
    update = "update",
    break = "break",
    closed = "closed",
}

export interface Btn {
    text: string;
    type: BtnColor;
    link?: string;
    onClick?(): void;
}