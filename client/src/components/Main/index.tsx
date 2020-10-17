import React, { ReactElement } from 'react'
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";

import V1 from "../V1";
import NotFound from "../NotFound";
import Component1 from "../TrashComponents/Component1";
import Component2 from "../TrashComponents/Component2";
import Component3 from "../TrashComponents/Component3";
import Component4 from "../TrashComponents/Component4";
import Component5 from "../TrashComponents/Component5";

import './style.scss';

interface Props {
}

export default function Main({ }: Props): ReactElement {
    const location = useLocation();
    return (
        <div className="__main">
            <AnimatePresence exitBeforeEnter={false}>
                <Switch location={location} key={location.pathname}>
                {/* <Switch> */}
                    <Route path="/v.0.1.0" key="/v.0.1.0" exact component={V1} />

                    <Route path="/1" key="/1" exact component={Component1} />
                    <Route path="/2" key="/2" exact component={Component2} />
                    <Route path="/3" key="/3" exact component={Component3} />
                    <Route path="/4" key="/4" exact component={Component4} />
                    <Route path="/5" key="/5" exact component={Component5} />

                    <Route path="" exact component={NotFound} />

                </Switch>
            </AnimatePresence>
        </div>
    )
}
