// import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom';

// interface Props {

// }

// export default function index({ }: Props): ReactElement {
//     return (
//         <div>
//             <div>
//                 <NavLink to="/v.0.1.0" >/v.0.1.0</NavLink>

//             </div>
//             <div>
//                 <NavLink to="/test" >/test</NavLink>
//             </div>
//         </div>
//     )
// }

import React, { Component } from 'react'

interface Props {

}
interface State {

}

export default class index extends Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
             
        }
    }
    render() {
        return (
            <div>
                <div>
                    <NavLink to="/v.0.1.0" >/v.0.1.0</NavLink>

                </div>
                <div>
                    <NavLink to="/test" >/test</NavLink>
                </div>
            </div>
        )
    }
}
