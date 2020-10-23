import React, { ReactElement, useState, useEffect } from 'react'
import { motion } from "framer-motion";
import Button from '../../../ReusableComponents/Button';
import Accordion from "../../../ReusableComponents/Accordion";
import { BtnColor, Btn } from "../../../../constants";

const logo = require("../../../../img/gitLogo.png");

interface Props {
    image?: string,
    layoutId: string,
    close: (A: string | undefined) => any,
    name: string,


    changelog?: string,
    btns?: Array<Btn>,
    description?: string,
    githubLink?: string,
}

export default function AppOpened({ image, name, layoutId, close, description, changelog, githubLink, btns }: Props): ReactElement {
    const [opened, setOpened] = useState<boolean>(false);
    return (
        <motion.div
            layoutId={layoutId}
            transition={{ duration: .5 }}
            initial={{ background: "rgba(12, 12, 12, 0.1)" }}
            animate={{ background: "rgba(12, 12, 12, 0.7)" }}
        >
            <motion.div
                initial={{ backdropFilter: "blur(0px)" }}
                animate={{ backdropFilter: "blur(4px)" }}
                exit={{ backdropFilter: "blur(0px)" }}
                transition={{ duration: opened ? .5 : .8 }}
                onTransitionEnd={() => { setOpened(true) }}
                className="__app_opened_wrapper"
            >
                <div className="__app_opened">
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
                            {name} {githubLink ? <a href={githubLink}><img className="__app_gitHub" src={logo} alt="GitHub" /></a> : ""}
                        </div>
                    </div>
                    <div className="__app_info">
                        <div className="__app_description">
                            {description}
                        </div>
                        <div className="__app_changelog">
                            <Accordion title="Changelog" text="Some changes made" maxHeight={65}>
                                {changelog}
                            </Accordion>
                        </div>
                        {btns ? <div className="__btn_group">
                            {btns.map((btn, index) => {
                            return <Button key={index} text={btn.text} type={btn.type} link={btn.link} /> })}
                        </div> : ""}

                    </div>
                </div>
            </motion.div>
        </motion.div >
    )
}
