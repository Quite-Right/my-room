import React, { ReactElement, useState } from 'react'


import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import AppOpened from "../Main/Screens/AppOpened"

interface Props {

}

interface Item {
    id: number,
    subtitle: string,
    title: string,
}


export default function Main({ }: Props): ReactElement {
    const [selectedId, setSelectedId] = useState<string | undefined>(undefined);

    const images: Array<string> = ["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg", "https://cdn.eso.org/images/thumb300y/eso1907a.jpg"];

    return (<div>
        <AnimateSharedLayout type="crossfade">
            
            {images.map((img, index) => {
                return <motion.img style={{ width: 200, height: 200 }} src={img} key={index} onClick={() => { setSelectedId(`${index}`) }} layoutId={`${index}`} />
            })}
            <AnimatePresence>
                {selectedId && <AppOpened
                    layoutId={selectedId}
                    image={images[Number(selectedId)]}
                    close={setSelectedId}
                    name="Short Links"
                >
                    <p>
                        Служба Яндекс.Рефераты предназначена для студентов и школьников, дизайнеров и журналистов, создателей научных заявок и отчетов — для всех, кто относится к тексту, как к количеству знаков.
                    </p>
                    <p>
                        Нажав на кнопку «Написать реферат», вы лично создаете уникальный текст, причем именно от вашего нажатия на кнопку зависит, какой именно текст получится — таким образом, авторские права на реферат принадлежат только вам.
                    </p>
                    <p>
                        Теперь никто не сможет обвинить вас в плагиате, ибо каждый текст Яндекс.Рефератов неповторим.
                    </p>
                    <p>
                        Текстами рефератов можно пользоваться совершенно бесплатно, однако при транслировании и предоставлении текстов в массовое пользование ссылка на Яндекс.Рефераты обязательна.
                    </p>
                </AppOpened>
                }
            </AnimatePresence>

        </AnimateSharedLayout>
    </div>)
}