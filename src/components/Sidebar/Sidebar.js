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

  scrollup(e) {
    // e.preventDefault();
    const offsetTop = document.querySelector('.Content').offsetTop;

    window.scroll({
      top: offsetTop,
      behavior: "smooth"
    });
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
          <Link to="/" onClick={(e) => this.scrollup(e)}>
            <li className="menu-item">Home</li>
          </Link>
          <Link to="/about" onClick={(e) => this.scrollup(e)}>
            <li className="menu-item">About</li>
          </Link>
          <Link to="/portfolio" onClick={(e) => this.scrollup(e)}>
            <li className="menu-item">Portfolio</li>
          </Link>
          <Link to="/contact" onClick={(e) => this.scrollup(e)}>
            <li className="menu-item">Contact</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
