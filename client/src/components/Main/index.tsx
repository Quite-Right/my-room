import React, { ReactElement, useState } from 'react'


import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

interface Props {

}

interface Item {

    id: number,
    subtitle: string,
    title: string,
}


export default function Main({ }: Props): ReactElement {
    console.log(1)
    const [selectedId, setSelectedId] = useState<string | undefined>(undefined);
    
    const images: Array<string> = ["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg", "https://cdn.eso.org/images/thumb300y/eso1907a.jpg"];
    
    const sas: any = selectedId ? console.log(setSelectedId) : "";

    return (<div>
        <AnimateSharedLayout type="crossfade">
            {images.map((img, index) => {
                // console.log(img)
            return <motion.img  src={img} key={index} onClick={() => {setSelectedId(`${index}`)}} layoutId={`${index}`} />
})}
            <AnimatePresence>
                {selectedId && <motion.img style={{position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "#333333"}} src={images[Number(selectedId)]} layoutId={selectedId} />}
            </AnimatePresence>
            
        </AnimateSharedLayout>
    </div>)
}
