import React, { ReactElement } from 'react'
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";

import Screen from "./Screens";

import Desktop from "./Screens/Desktop";
import Games from "./Screens/Games";
import Mobile from "./Screens/Mobile";
import NotFound from "./Screens/NotFound";
import Web from "./Screens/Web";

import V1 from "../V1";


interface Props {
}

export default function Main({ }: Props): ReactElement {
    // возможно заменить на history
    const location = useLocation();
    return (
        <div className="__main">
            <AnimatePresence exitBeforeEnter={false}>
                <Switch location={location} key={location.pathname}>
                    <Route path="/v.0.1.0" key="/v.0.1.0" exact
                        render={() => {
                            return (
                                <Screen><V1 /></Screen>
                            )
                        }}
                    />
                    <Route path="/Desktop" key="/Desktop" exact render={() => {
                        return (
                            <Screen><Desktop /></Screen>
                        )
                    }} />
                    <Route path="/Games" key="/Games" exact render={() => {
                        return (
                            <Screen><Games /></Screen>
                        )
                    }} />
                    <Route path="/Mobile" key="/Mobile" exact render={() => {
                        return (
                            <Screen><Mobile /></Screen>
                        )
                    }} />
                    <Route path="/Web" key="/Web" exact render={() => {
                        return (
                            <Screen><Web /></Screen>
                        )
                    }} />

                    <Route path="" exact render={() => {
                        return (
                            <Screen><NotFound /></Screen>
                        )
                    }} />

                </Switch>
            </AnimatePresence>
        </div>
    )
}
