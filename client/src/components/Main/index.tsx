import React, { ReactElement, useState } from 'react'
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation, useHistory, Redirect } from "react-router-dom";

import { Directions, App, TagType, BtnColor } from "../../constants";

import Screen from "./Screens";
import NotFound from './NotFound';
import Tag from '../ReusableComponents/Tag';



interface Apps {
    [propName: string]: Array<App>;
}

interface routeComponentsInt {
    [propName: string]: React.ReactNode;
}

interface Props {
}



export default function Main({ }: Props): ReactElement {
    const location = useLocation();
    const routes = [
        "/Web",
        "/Mobile",
        "/Desktop",
        "/Games",
    ];
    const Apps: Apps = {
        "/Web": [
            {
                id: "shortLinksApp",
                name: "Short Links",
                image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
                tag: {
                    tag: "development",
                    tagType: TagType.break,
                },
                description: "App for creating short and pretty links for your website or app",
                changelog: "This app is being developed",
                githubLink: "https://github.com/Quite-Right/shortLinks.git",
                btns: [
                    {
                        text: "Comming soon",
                        type: BtnColor.grey,
                        link:"",
                    }
                ]
            },
        ],
        "/Desktop": [
        ],
        "/Games": [
        ],
        "/Mobile": [
        ]
    }
    const history = useHistory();
    // console.log(history)

    const [direction, setDirection] = useState<Directions>(Directions.right);
    // if (location.state) {
    //     if (routes.indexOf(location.state.prev) < routes.indexOf(location.pathname) && direction === Directions.right) {
    //         // location.state.prev = location.pathname;
    //         setDirection(Directions.left)
    //     }
    //     else if (routes.indexOf(location.state.prev) > routes.indexOf(location.pathname) && direction === Directions.left) {
    //         // location.state.prev = location.pathname;
    //         setDirection(Directions.right)
    //     }
    // }
    return (
        <div className="__main">
            <AnimatePresence exitBeforeEnter={false}>
                <Switch location={location} key={location.pathname}>
                    {routes.map(route => {
                        return <Route path={route} key={route} exact render={() => {
                            return (
                                <Screen apps={Apps[route]} direction={direction} setDirection={setDirection} routes={routes} />
                            )
                        }} />
                    })}
                    <Route path="/" exact render={() => {
                        return (
                            <Redirect to="/Web" />
                        )
                    }} />
                    <Route path="" exact render={() => {
                        return (
                            <NotFound location={location.pathname}/>
                        )
                    }} />

                </Switch>
            </AnimatePresence>
        </div>
    )
}
