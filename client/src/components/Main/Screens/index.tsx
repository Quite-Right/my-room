import React, { ReactElement } from 'react'

import { motion } from "framer-motion";
import { routerAnimations, routerTransition } from "../../../constants";


interface Props {
    children?: React.ReactNode
}

export default function Screen({children}: Props): ReactElement {
    console.log(children)
    return (
        <motion.div
            exit="exit"
            animate="animate"
            initial="initial"
            transition={routerTransition}
            variants={routerAnimations}
            className="__screen"
        >
           {children}
        </motion.div >
    )
}


