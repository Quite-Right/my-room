import React, { ReactElement, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';

const logo = require("../../img/logo.png");

interface Props {

}

export default function Header({ }: Props): ReactElement {
    const location = useLocation();
    const [toggle, setToggle] = useState(true);
    return (
        <div className="header">
            <NavLink to="/Web" >
                <div className="header-logo">
                    <img style={{ height: "30px"}} src={logo} alt="Logo" />
                    My Room
                </div>
            </NavLink>

            <div className="header-nav">
                <NavLink className="header-nav__item" to="/Web" activeClassName="__current">Web</NavLink>
                <NavLink className="header-nav__item" to="/Mobile" activeClassName="__current">Mobile</NavLink>
                <NavLink className="header-nav__item" to="/Desktop" activeClassName="__current">Desktop</NavLink>
                <NavLink className="header-nav__item" to="/Games" activeClassName="__current">Games</NavLink>
            </div>
            <div className="header-nav__mobile">
                <div onClick={() => { setToggle(!toggle) }}>
                    <div >
                        <svg viewBox="0 -53 384 384" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#fff" d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
                        <path fill="#fff" d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
                        <path fill="#fff" d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
                        </svg>
                    </div>
                    <div className={`header-nav__mobile__toggle ${toggle ? "__active" : ""}`}>
                        <NavLink className="header-nav__mobile__item" to="/Web" activeClassName="__current">Web</NavLink>
                        <NavLink className="header-nav__mobile__item" to="/Mobile" activeClassName="__current">Mobile</NavLink>
                        <NavLink className="header-nav__mobile__item" to="/Desktop" activeClassName="__current">Desktop</NavLink>
                        <NavLink className="header-nav__mobile__item" to="/Games" activeClassName="__current">Games</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}