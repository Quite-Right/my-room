import React, { ReactElement } from 'react'
import { NavLink, useHistory } from 'react-router-dom';

interface Props {

}

export default function Header({ }: Props): ReactElement {
    const history = useHistory();
    return (
        <div>
            <button onClick={() => {
                history.push("/v.0.1.0");
            }}>+</button>
            <div>
                <NavLink to="/v.0.1.0" >/v.0.1.0</NavLink>

            </div>
            <div>
                <NavLink to="/test" >/test</NavLink>
            </div>
            <div>
                <NavLink to="/1" >/1</NavLink>
            </div>
            <div>
                <NavLink to="/2" >/2</NavLink>
            </div>
            <div>
                <NavLink to="/3" >/3</NavLink>
            </div>
            <div>
                <NavLink to="/4" >/4</NavLink>
            </div>
            <div>
                <NavLink to="/5" >/5</NavLink>
            </div>
        </div>
    )
}





