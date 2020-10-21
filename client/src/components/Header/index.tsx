import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom';
const logo = require("../../img/logo.png");


interface Props {

}

export default function Header({ }: Props): ReactElement {
    return (
        <div className="header">
            <NavLink to="/Web" >
                <div className="header-logo">
                    <img src={logo} alt="Logo" />
                    My Room
                </div>
            </NavLink>

            <div className="header-nav">
                <NavLink to="/Web" activeClassName="__current">Web</NavLink>
                <NavLink to="/Mobile" activeClassName="__current">Mobile</NavLink>
                <NavLink to="/Desktop" activeClassName="__current">Desktop</NavLink>
                <NavLink to="/Games" activeClassName="__current">Games</NavLink>
            </div>
        </div>
    )
}