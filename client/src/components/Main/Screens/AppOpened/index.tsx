import React, { ReactElement, useState, useEffect } from 'react'
import { motion } from "framer-motion";

interface Props {
    image?: string,
    layoutId: string,
    close: (A: string | undefined) => any,
    name: string,
    children?: React.ReactNode,

}

export default function AppOpened({ image, name, layoutId, close, children }: Props): ReactElement {
    const [opened, setOpened] = useState<boolean>(false);
    return (
        <motion.div
            layoutId={layoutId}
            transition={{duration: .5}}
            initial={{background: "rgba(12, 12, 12, 0.1)"}}
            animate={{background: "rgba(12, 12, 12, 0.7)"}}
        >
            <motion.div
                initial={{ backdropFilter: "blur(0px)" }}
                animate={{ backdropFilter: "blur(15px)" }}
                exit={{ backdropFilter: "blur(0px)" }}
                transition={{ duration: opened ? .5 : 2.5  }}
                onTransitionEnd={() => {setOpened(true)}}
                className="__app_opened_wrapper"
                >
                <div className="__app_opened style-7">
                    
                    <div className="__app_banner" style={{ backgroundImage: `url(${image})` }}>
                        <div className="__app_close_btn" onClick={() => {
                            setOpened(true);
                            close(undefined);
                            }}>
                            <svg width="17px" height="17px" style={{ margin: "auto" }} xmlns={"http://www.w3.org/2000/svg"} xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" viewBox="0 0 371.23 371.23" xmlSpace="preserve">
                                <polygon fill="#ffffff" points="371.23,21.213 350.018,0 185.615,164.402 21.213,0 0,21.213 164.402,185.615 0,350.018 21.213,371.23   185.615,206.828 350.018,371.23 371.23,350.018 206.828,185.615 " />
                            </svg>
                        </div>
                        <div className="__app_name">
                            {name}
                        </div>
                    </div>
                    <div className="__app_description">
                        {children}
                    </div>     
                </div>
            </motion.div>
        </motion.div >
    )
}
