import React, { ReactElement } from 'react'
import {BtnColor, Btn} from "../../../constants";


interface Props extends Btn {
    
}

export default function Button({ text, link, type, onClick }: Props): ReactElement {
    return (
        <a className={`__btn __${type}`} href={link ? link : ""} onClick={onClick ? onClick : () => { }}>
            {text}
        </a>
    )
}
