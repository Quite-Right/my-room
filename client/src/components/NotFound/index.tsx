import React, { ReactElement } from 'react'
import { AnimatePresence, motion } from "framer-motion";

interface Props {
    
}

export default function index({}: Props): ReactElement {
    return (
        <motion.div transition={{}} key="/NotFound" exit={{x: "-100vw"}} animate={{x: 0}} initial={{x: "100vw"}} >
            Not Found
        </motion.div>
    )
}
