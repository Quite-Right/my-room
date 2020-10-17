import React from 'react';
import './scss/App.scss';

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import { BrowserRouter as Router, useLocation } from "react-router-dom";

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
      <Main></Main>
      <Footer></Footer>
    </div >
  );
}

export default Wrapper;
