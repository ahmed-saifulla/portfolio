import React, { Component } from "react";
import "./Sidebar.css";
import profilephoto from "../../images/profilephoto.jpg";
// import { Route, BrowserRouter as Router } from "react-router-dom";
// import { browserHistory } from "react-router";
import { Link, BrowserRouter, Switch } from "react-router-dom";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  switchtab(e) {
    console.log("click");
  }

  render() {
    return (
      <div className="Sidebar">
        <picture>
          <img
            src={profilephoto}
            className="profile-photo"
            alt="Ahmed Saifulla"
          />
        </picture>
        <h1 className="fullname">Ahmed Saifulla</h1>
        <h2 className="designation">Full Stack Developer</h2>
        <ul className="menu">
          <BrowserRouter>
            <div>
              <Link to="/">
                <li className="menu-item">Home</li>
              </Link>
              <Link to="/about">
                <li className="menu-item">About</li>
              </Link>
              <Link to="/portfolio">
                <li className="menu-item">Portfolio</li>
              </Link>
              <Link to="/contact">
                <li className="menu-item">Contact</li>
              </Link>
            </div>
          </BrowserRouter>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
