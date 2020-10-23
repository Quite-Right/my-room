import React, { Component } from 'react'
import { NavLink} from 'react-router-dom';

interface Props {

}

interface State {
    toggle?: boolean,
}

export default class index extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            toggle: true
        }
    }
    render() {
        const { toggle } = this.state;
        return (
            <div onClick={() => { this.setState({ toggle: !toggle }) }}>
                <div >
                    123
                </div>
                <div className={`${toggle ? "__active" : ""}`}>
                    <NavLink to="/Web" activeClassName="__current">Web</NavLink>
                    <NavLink to="/Mobile" activeClassName="__current">Mobile</NavLink>
                    <NavLink to="/Desktop" activeClassName="__current">Desktop</NavLink>
                    <NavLink to="/Games" activeClassName="__current">Games</NavLink>
                </div>
            </div>
        )
    }
}
