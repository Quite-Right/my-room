import React, { ReactElement } from 'react'
import {BtnColor} from "../../../constants";


interface Props {
    text: string;
    type: BtnColor;
    link?: string;
    onClick?(): void;
}

export default function Button({ text, link, type, onClick }: Props): ReactElement {
    return (
        <a className={`__btn __${type}`} href={link ? link : ""} onClick={onClick ? onClick : () => { }}>
            {text}
        </a>
    )
}
