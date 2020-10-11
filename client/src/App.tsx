import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      {/* Router */}
      <Header></Header>
      {/* Switch */}
      {/* Route  /v.0.1.0 */}
      <Main></Main>
      {/* Route без рута */}
      <NotFound />
      {/* Switch end */}
      <Footer></Footer>
      {/* Router end */}
    </div>
  );
}

export default App;
