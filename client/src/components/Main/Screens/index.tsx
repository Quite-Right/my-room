import React, { ReactElement, useState } from 'react'
import { useLocation, useHistory } from "react-router-dom";

import { Swipeable } from 'react-swipeable';

import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { routerAnimationsLeft, routerAnimationsRight, routerTransition, Directions, App } from "../../../constants";

import AppOpened from "./AppOpened";
import CommingSoon from './CommingSoon';

interface Props {
    routes: Array<string>;
    direction: Directions;
    setDirection: React.Dispatch<React.SetStateAction<Directions>>;
    apps: Array<App>;
}



export default function Screen({ routes, direction, setDirection, apps}: Props): ReactElement {
    const location = useLocation();
    const history = useHistory();
    const [selectedId, setSelectedId] = useState<string | undefined>(undefined);
    
    
    return (
        <motion.div
            exit="exit"
            animate="animate"
            initial="initial"
            transition={routerTransition}
            variants={direction === Directions.right ? routerAnimationsRight : routerAnimationsLeft}
            className="__screen"
        >

            <AnimateSharedLayout type="crossfade" >
                {/* Apps */}
                <Swipeable

                    className="__app_wrapper"
                    onSwipedLeft={() => {
                        setDirection(Directions.right);
                        // определяем текущий роут
                        const current = routes.indexOf(location.pathname);
                        // если индекс следующего роута больше длины списка роутов заменяем его на 0 индекс, чтобы вернуться в начало
                        if (current + 1 === routes.length)
                            history.push(routes[0]);
                        else
                            history.push(routes[current + 1])
                    }}
                onSwipedRight={() => {
                    setDirection(Directions.left);
                    const current = routes.indexOf(location.pathname);
                    if (current === 0)
                     history.push(routes[routes.length - 1]);
                    else
                        history.push(routes[current - 1])
                }}
                >
                    {apps.map((app, index) => {
                        return <motion.img style={{ width: 200, height: 200 }} src={app.image} key={index} onClick={() => { setSelectedId(`${index}`) }} layoutId={`${index}`} />
                    })}
                    {apps.length === 0 ? < CommingSoon/>: ""}
                </Swipeable>
                <AnimatePresence>
                    {selectedId && <AppOpened
                        layoutId={selectedId}
                        image={apps[Number(selectedId)].image}
                        close={setSelectedId}
                        name={apps[Number(selectedId)].name}
                        description={apps[Number(selectedId)].description}
                        changelog={apps[Number(selectedId)].changelog}
                        launchLink={apps[Number(selectedId)].launchLink}
                        githubLink={apps[Number(selectedId)].githubLink}
                    />
                    }
                </AnimatePresence>

            </AnimateSharedLayout>
        </motion.div >
    )
}


