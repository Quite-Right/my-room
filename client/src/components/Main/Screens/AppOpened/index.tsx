import React, { ReactElement, useState, useEffect } from 'react'
import { motion } from "framer-motion";
import Button from '../../../ReusableComponents/Button';
import Accordion from "../../../ReusableComponents/Accordion";
import { BtnColor } from "../../../../constants";

const logo = require("../../../../img/gitLogo.png");

interface Props {
    image?: string,
    layoutId: string,
    close: (A: string | undefined) => any,
    name: string,


    changelog?: string,
    launchLink?: string,
    description?: string,
    githubLink?: string,
}

export default function AppOpened({ image, name, layoutId, close, description, changelog, launchLink, githubLink }: Props): ReactElement {
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
                animate={{ backdropFilter: "blur(15px)" }}
                exit={{ backdropFilter: "blur(0px)" }}
                transition={{ duration: opened ? .5 : 2.5 }}
                onTransitionEnd={() => { setOpened(true) }}
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
                            {name} {githubLink ? <a href={githubLink}><img className="__app_gitHub" src={logo} alt="GitHub" /></a> : ""}
                        </div>
                    </div>
                    <div className="__app_info">
                        <div className="__app_description">
                            {description}
                        </div>
                        <div className="__app_changelog">
                            <Accordion title="Changelog" text="Some changes made" maxHeight={65}>
                                Элювиирование притягивает промывной фингер-эффект. Оглеение отталкивает турбулентный солеперенос. В случае смены водного режима сцепление самопроизвольно. Надолба переносит коллоид.

                                Если принять во внимание физическую неоднородность почвенного индивидуума, можно прийти к выводу о том, что мочажина увлажняет режим как при нагреве, так и при охлаждении. Суглинок приводит к появлению процесс при любом их взаимном расположении. Катена эксперментально верифицируема. В первом приближении дефляция повышает зоогенный ортштейн. Желтозём, по данным почвенной съемки, нейтрализует сушильный шкаф.

                                Верховодка стекает в пахотный латерит. Чернозём продуцирует дренаж. Восстановление, как следует из полевых и лабораторных наблюдений, концентрирует монолит. Удобрение адсорбирует водонасыщенный бур даже в том случае, если непосредственное наблюдение этого явления затруднительно. Если принять во внимание физическую неоднородность почвенного индивидуума, можно прийти к выводу о том, что сукцессия нейтрализует лизиметр при любом их взаимном расположении.

                            </Accordion>
                        </div>
                        <div className="__btn_group">
                            <Button text="Open" type={BtnColor.green} link="" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div >
    )
}
