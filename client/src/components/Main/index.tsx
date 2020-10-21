import React, { ReactElement } from 'react'
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";

import { Swipeable } from 'react-swipeable';

import Screen from "./Screens";

import Desktop from "./Screens/Desktop";
import Games from "./Screens/Games";
import Mobile from "./Screens/Mobile";
import NotFound from "./Screens/NotFound";
import Web from "./Screens/Web";

import V1 from "../V1";


interface Props {
}
interface routeComponentsInt {
    [propName: string]: React.ReactNode;
}

export default function Main({ }: Props): ReactElement {
    const location = useLocation();
    const history = useHistory();

    // список используемых роутов
    const routes = [
        "/Web",
        "/Mobile",
        "/Desktop",
        "/Games"
    ];
    // const routeComponents : routeComponentsInt = {
    //     "/Web": <Web />,
    //     "/Mobile": <Mobile />,
    //     "/Desktop": <Desktop />,
    //     "/Games": <Games />,
    // };
    const routeComponents: routeComponentsInt = {
        "/Web": Web,
        "/Mobile": Mobile,
        "/Desktop": Desktop,
        "/Games": Games,
    };
    return (
        <Swipeable className="__main"
            onSwipedLeft={() => {
                // определяем текущий роут
                const current = routes.indexOf(location.pathname);
                // если индекс следующего роута больше длины списка роутов заменяем его на 0 индекс, чтобы вернуться в начало
                if (current + 1 === routes.length)
                    history.push(routes[0]);
                else
                    history.push(routes[current + 1])
            }}
        // не работает, потому что свайп происходит в другую сторону
        // чтобы работало нужно перепистать анимации экранов,
        // сделав их зависимыми от состояния свайпа
        // onSwipedRight={() => {
        //     const current = routes.indexOf(location.pathname);
        //     if (current === 0)
        //      history.push(routes[routes.length - 1]);
        //     else
        //         history.push(routes[current - 1])
        // }}
        >
            <AnimatePresence exitBeforeEnter={false}>
                <Switch location={location} key={location.pathname}>

                    <Route path="/v.0.1.0" key="/v.0.1.0" exact
                        render={() => {
                            return (
                                <Screen><V1 /></Screen>
                            )
                        }}
                    />
                    {routes.map(route => {
                        return <Route path={route} key={route} exact render={() => {
                            // const Component: any = new routeComponents[route];
                            // const Rendered = new Component;
                            // console.log(Component)
                            return (
                                <Screen>
                                    {
                                        route === "/Web" && <Web />
                                        || route === "/Mobile" && <Mobile />
                                        || route === "/Desktop" && <Desktop />
                                        || route === "/Games" && <Games />
                                    }
                                </Screen>
                            )
                        }} />
                    })}
                    {/* <Route path="/Desktop" key="/Desktop" exact render={() => {
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
                    <Route path={["/Web", "/"]} key="/Web" exact render={() => {
                        return (
                            <Screen><Web /></Screen>
                        )
                    }} /> */}

                    <Route path="" exact render={() => {
                        return (
                            <Screen><NotFound /></Screen>
                        )
                    }} />

                </Switch>
            </AnimatePresence>
        </Swipeable>
    )
}
