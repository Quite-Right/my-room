import React, { ReactElement } from 'react'
import { NavLink, useHistory } from 'react-router-dom';

import './style.scss';

interface Props {

}

export default function Header({ }: Props): ReactElement {
    //const history = useHistory();
    return (
        <div className="__header">
            {/* <button onClick={() => {
                history.push("/v.0.1.0");
            }}>+</button> */}
            <div>
                <NavLink to="/Web" >Web</NavLink>
            </div>
            <div>
                <NavLink to="/Mobile" >Mobile</NavLink>
            </div>
            <div>
                <NavLink to="/Desktop" >Desktop</NavLink>
            </div>
            <div>
                <NavLink to="/Games" >Games</NavLink>
            </div>
            <div>
                <NavLink to="/v.0.1.0" >/v.0.1.0</NavLink>
            </div>
            <div>
                <NavLink to="/NotFound" >/NotFound</NavLink>
            </div>
        </div>
    )
}





