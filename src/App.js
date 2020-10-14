import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Pizza from "./components/Pizza";

const App = () => {
  return (
    <div className="App">

      

      <nav className="App-header">
      <div className="App-logo" ></div>
        <h1>Lambda Eats!</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/pizza">Make Your Pizza</Link>
        </div>
      
      </nav>
    
    <Route exact path="/" component={Home}/>
    <Route path="/pizza" component={Pizza}/>

    <footer className="App-footer">
      <span>
      &Lambda; Lambda Eats &copy; 2020
      </span>
    </footer>
    </div>
  );
};
export default App;


// /Users/aaronmvskoke/PT19/web-sprint-challenge-single-page-applications/Assets/lambdalogo.png