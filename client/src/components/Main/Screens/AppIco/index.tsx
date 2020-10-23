import React, { ReactElement } from 'react'
import Tag from '../../../ReusableComponents/Tag';
import {TagType} from "../../../../constants";
import { motion } from 'framer-motion';


interface Props {
    image: string;
    tag?: {
        tag: string;
        tagType: TagType;
    };
    name: string;
    layoutId?: string;
    open: (A: string | undefined) => any,
}
interface Input {
    url: string;
    tag: string;
    name: string;
}



export default function AppIco({ image, tag, name, layoutId, open }: Props): ReactElement {
    return (
        <motion.div
        layoutId={layoutId}
        onClick={() => {open(layoutId)}}
        className="__app_ico"
        style={{ backgroundImage: `url(${image})` }}
        >
            {tag ?  <Tag tag={tag.tag} type={tag.tagType}/> : ""}
            <div className="__app_ico__name">{name}</div>
        </motion.div>
    )
}

// export function App({ }: any): ReactElement {
//     const input: Array<Input> = [
//         { url: "https://www.adorama.com/images/Large/ro33.jpg", tag: "new", name: "Pink1" },
//         { url: "https://www.adorama.com/images/Large/ro33.jpg", tag: "update", name: "Pink2" },
//         { url: "https://www.adorama.com/images/Large/ro33.jpg", tag: "closed", name: "Pink3" },
//         { url: "https://www.adorama.com/images/Large/ro33.jpg", tag: "break", name: "Pink4" },
//     ];





//     return (
//         <>
//             <div className="__wrapper">
//                 {input.map(({ url, tag, name }: Input, id) => {
//                     return (
//                         <div key={id} className="__wrapper__app" style={{ backgroundImage: `url(${url})` }}>
//                             <div className={`__wrapper__app__${tag}`}>{tag}</div>
//                             <div className="__wrapper__app__name">{name}</div>
//                         </div>
//                     )
//                 })}
//             </div>
//             <div className="__wrapper">
//                 {input.map(({ url, tag, name }: Input, id) => {
//                     return (
//                         <div key={id} className="__wrapper__app" style={{ backgroundImage: `url(${url})` }}>
//                             <div className={`__wrapper__app__${tag}`}>{tag}</div>
//                             <div className="__wrapper__app__name">{name}</div>
//                         </div>
//                     )
//                 })}
//             </div>
//             <hr></hr>
//             <div className="__wrapper2">
//                 {input.map(({ url, tag, name }: Input, id) => {
//                     return (
//                         <div className="__wrapper2__cell">
//                             <div key={id} className="__wrapper2__app" style={{ backgroundImage: `url(${url})` }}>
//                                 <div className={`__wrapper2__app__${tag}`}>{tag}</div>
//                             </div>
//                             <div className="__wrapper2__name">{name}</div>
//                         </div>
//                     )
//                 })}
//             </div>
//             <div className="__wrapper2">
//                 {input.map(({ url, tag, name }: Input, id) => {
//                     return (
//                         <div className="__wrapper2__cell">
//                             <div key={id} className="__wrapper2__app" style={{ backgroundImage: `url(${url})` }}>
//                                 <div className={`__wrapper2__app__${tag}`}>{tag}</div>
//                             </div>
//                             <div className="__wrapper2__name">{name}</div>
//                         </div>
//                     )
//                 })}
//             </div>
//         </>


//     )
// }

