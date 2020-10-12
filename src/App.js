import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Pizza from "./components/Pizza";

const App = () => {
  return (
    <div className="App">
      <nav>
        <img src="../Assets/lambdalogo.png" alt="Lambda School Logo"/>
        <h1>Lambda Eats!</h1>
        <div className="nav-link">
          <Link to="/">Home</Link>
          <Link to="/pizza">Make Your Pizza</Link>
        </div>
      
      </nav>
    
    <Route exact path="/" component={Home}/>
    <Route path="/pizza" component={Pizza}/>
    </div>
  );
};
export default App;
