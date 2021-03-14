import React, { Component } from "react";
import "./Content.css";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";

class Content extends Component {
  render() {
    var currentLocation = window.location.pathname;

    const links = document.querySelectorAll(".page-header ul a");

   

    return (
      <div className="Content">
        {/* <div className="first-row"> */}
        {/* <button className="dark-theme-toggle-btn">Dark</button> */}
        {/* </div> */}

        <div className="main-content">

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Content;
