import { Transition, Variants } from "framer-motion"


export const routerAnimations: Variants = {
    animate: { left: 0 },
    exit: { left: "-100vw" },
    initial: { left: "100vw" },
}
export const routerTransition: Transition = { type: "spring", damping: 19 }