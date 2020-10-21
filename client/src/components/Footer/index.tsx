import React, { ReactElement } from 'react'
const logo = require("../img/gitLogo.png");

interface Props {

}

export default function index({ }: Props): ReactElement {
    return (
        <div className="__footer">
            <a href="https://github.com/VoevodskiyEA/my-room.git" target="_blank">
                <img src={logo} alt="GitHub" />
                GitHub
            </a>
        </div>
    )
}
