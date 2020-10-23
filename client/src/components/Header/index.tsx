import React, { ReactElement } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
const logo = require("../../img/logo.png");


interface Props {

}

export default function Header({ }: Props): ReactElement {
    const location = useLocation();
    return (
        <div className="header">
            <NavLink to="/Web" >
                <div className="header-logo">
                    <img src={logo} alt="Logo" />
                    My Room
                </div>
            </NavLink>

            <div className="header-nav">
                <NavLink to={{pathname: "/Web", state: {prev: location.pathname}}} activeClassName="__current">Web</NavLink>
                <NavLink to={{pathname: "/Mobile", state: {prev: location.pathname}}} activeClassName="__current">Mobile</NavLink>
                <NavLink to={{pathname: "/Desktop", state: {prev: location.pathname}}} activeClassName="__current">Desktop</NavLink>
                <NavLink to={{pathname: "/Games", state: {prev: location.pathname}}} activeClassName="__current">Games</NavLink>
            </div>
        </div>
    )
}