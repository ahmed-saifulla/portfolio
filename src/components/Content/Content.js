import React, { Component } from "react";
import "./Content.css";
import {  Router, Switch, Route, BrowserRouter } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";

class Content extends Component {
  render() {
    var currentLocation = window.location.pathname;

    return (
      <div className="Content">
        {/* <div className="first-row"> */}
        {/* <button className="dark-theme-toggle-btn">Dark</button> */}
        {/* </div> */}

        <div className="main-content">

          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default Content;
