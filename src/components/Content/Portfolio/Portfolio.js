import React from "react";
import "./Portfolio.css";

import profilephoto from "../../../images/profilephoto.jpg";

function Portfolio() {
  return (
    <div className="About">
        <h3 className="page-title">My Works</h3>
        <div className="works">
          <div className="work">
            <img src={profilephoto} alt="" />
            <h5>Lorem Ipsun 1206</h5>
          </div>
          <div className="work">
            <img src={profilephoto} alt="" />
            <h5>Lorem Ipsun 1206</h5>
          </div>
          <div className="work">
            <img src={profilephoto} alt="" />
            <h5>Lorem Ipsun 1206</h5>
          </div>
          <div className="break"></div> {/*--------------*/}
          <div className="work">
            <img src={profilephoto} alt="" />
            <h5>Lorem Ipsun 1206</h5>
          </div>
          <div className="work">
            <img src={profilephoto} alt="" />
            <h5>Lorem Ipsun 1206</h5>
          </div>
          <div className="work">
            <img src={profilephoto} alt="" />
            <h5>Lorem Ipsun 1206</h5>
          </div>
          <div className="break"></div> {/*--------------*/}
          <div className="work">
            <img src={profilephoto} alt="" />
            <h5>Lorem Ipsun 1206</h5>
          </div>
          <div className="work">
            <img src={profilephoto} alt="" />
            <h5>Lorem Ipsun 1206</h5>
          </div>
          <div className="work">
            <img src={profilephoto} alt="" />
            <h5>Lorem Ipsun 1206</h5>
          </div>
        </div>
    </div>
  );
}

export default Portfolio;
