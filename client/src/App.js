import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Dog from './components/Dog';
import Form from './components/Form';



function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage}/>
      <Route path="/home" component={NavBar}/>
      <Route exact path="/home" component={Home}/>
      <Route  path="/breeds/:id" component={Dog}/>
      <Route  path="/home/create" component={Form}/>
      
    </div>
  );
}

export default App;
