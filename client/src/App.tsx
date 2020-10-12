import React from 'react';
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import NotFound from "./components/NotFound";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>

        <Switch>
          <Route path="/v.0.1.0" exact component={Main} />
          <Route path="" exact component={NotFound} />
        </Switch>

        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
