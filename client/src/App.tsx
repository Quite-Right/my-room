import React from 'react';
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import NotFound from "./components/NotFound";


import { AnimatePresence, motion } from "framer-motion";

import Component1 from "./components/TrashComponents/Component1";
import Component2 from "./components/TrashComponents/Component2";
import Component3 from "./components/TrashComponents/Component3";
import Component4 from "./components/TrashComponents/Component4";
import Component5 from "./components/TrashComponents/Component5";

import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";

function Wrapper() {
  return (<Router>
    <App />
  </Router>)
}

function App() {
  const location = useLocation();
  console.log(location)
  return (
    <div className="App" style={{ width: "100vw", overflowX: "hidden" }}>


        <Header></Header>
        <AnimatePresence exitBeforeEnter={true}>
        <Switch location={location} key={location.pathname}>

          <Route path="/v.0.1.0" key="/v.0.1.0" exact component={Main} />

          <Route path="/1" key="/1" exact component={Component1} />
          <Route path="/2" key="/2" exact component={Component2} />
          <Route path="/3" key="/3" exact component={Component3} />
          <Route path="/4" key="/4" exact component={Component4} />
          <Route path="/5" key="/5" exact component={Component5} />

          <Route path="" exact component={NotFound} />

        </Switch>
          </AnimatePresence>

      <Footer></Footer>


    </div >
  );
}

export default Wrapper;
