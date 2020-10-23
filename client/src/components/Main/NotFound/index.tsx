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
            <div className="__app_wrapper">
                <div className="__not-found">
                    <img className="__not-found_gif" src="https://media1.tenor.com/images/579a105cce021c5f9cbb60c0d9a63d46/tenor.gif?itemid=16985960"/>
                    <div className="__not-found_text">
                    Page <NavLink to={location}>{`${location}`}</NavLink> not found. Try to reload the page or return to the <NavLink to="/Web"> main page </NavLink>
                    </div>
                   
                </div>

            </div>
        </motion.div>
    )
}

