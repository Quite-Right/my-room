import React, { ReactElement } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
const logo = require("../img/logo.ico");

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
                <NavLink to="/Web" activeClassName="current">Web</NavLink>
                <NavLink to="/Mobile" activeClassName="current">Mobile</NavLink>
                <NavLink to="/Desktop" activeClassName="current">Desktop</NavLink>
                <NavLink to="/Games" activeClassName="current">Games</NavLink>
            </div>
        </div>
    )
}
//const history = useHistory();
// {/* <button onClick={() => {
//                 history.push("/v.0.1.0");
//             }}>+</button> */}




