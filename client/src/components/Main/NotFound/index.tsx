import React, { ReactElement } from 'react'
import { motion } from "framer-motion";
import { routerAnimationsRight, routerTransition } from "../../../constants";
import { NavLink } from 'react-router-dom';

interface Props {
    location: string
}

export default function NotFound({ location }: Props): ReactElement {
    return (
        <motion.div exit="exit"
            animate="animate"
            initial="initial"
            transition={routerTransition}
            variants={routerAnimationsRight}
            className="__screen">
            <p>
                Page <NavLink to={location}>{location}</NavLink> not found
                </p>
            <p>
                Try to reload the page or return to the <NavLink to="/Web">main page</NavLink>
            </p>
        </motion.div>
    )
}

