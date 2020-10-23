import React, { ReactElement, useState } from 'react'

interface Props {
    title: string;
    text: string;
    maxHeight?: number;
    children?: React.ReactNode;
    initial?: boolean;
    headerBackground?: string;
    mainBackground?: string;
}

// style={{ borderBottom: `${opened ? "" : `4px solid ${mainBackground}`}`}}

export default function Accordion({ title, text, children, initial = false, maxHeight = 100, headerBackground = "#282828", mainBackground = "#414141" }: Props): ReactElement {
    const [opened, toggle] = useState<boolean>(initial)
    return (
        <div className="__accordion" >
            <div className="__accordion_header_wrapper" style={{ backgroundColor: headerBackground }} >
                <div className="__accordion_title">
                    {title}
                </div>
                <div className="__accordion_title_svg_wrapper">
                    <svg onClick={() => toggle(!opened)}  className="__accordion_title_svg" style={{ transform: `${opened ? "none" : "rotateX(180deg)"}` }} width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 54 54" xmlSpace="preserve">
                        <path fill="#ffffff" d="M28.209,19.501c-0.666-0.666-1.752-0.666-2.418,0L14.293,30.999c-0.391,0.391-0.391,1.023,0,1.414s1.023,0.391,1.414,0   L27,21.12l11.293,11.293c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414   L28.209,19.501z" />
                    </svg>
                </div>

            </div>
            <div className="__accordion_main_wrapper" style={{ maxHeight: opened ? "none" : maxHeight, backgroundColor: mainBackground }}>
                {children ? children : text}
            </div>
        </div >
    )
}
