import { BrowserRouter, Route, Link, Routes } from "react-router-dom"
import {Component} from "react"
import React from "react";
import Home from "./components/Home";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation"
import Student from "./components/Student";
import customHistory from "./History";
import handleRedirectClick from "./components/Redirect";
import Redirecter from "./components/Redirect";

const NewRoute = () => {
  return (

    <div>
      <p>New Route</p>
    </div>

  );
};


class App extends Component {
  
  render() { 
    return (
      <BrowserRouter history={customHistory}>
      <div>
        <Navigation/>
        <Routes>
        <Route path="/" Component={Home} exact/>
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route Component={Error} />
        <Route path="/student/:studentname/:studentno?" Component={Student} />
      </Routes>
      <Redirecter/>
      </div>
      </BrowserRouter>
    );
  };
};
 
export default App;