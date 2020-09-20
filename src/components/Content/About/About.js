import React from "react";
import "./About.css";

import profilephoto from "../../../images/profilephoto.jpg";

function About() {
  return (
    <div className="About">
      <div className="wrap">
        <h3 className="page-title">About Me</h3>

        <h2 className="title">Ahmed Saifulla</h2>
        <h4 className="sub-title">Full Stack Developer</h4>

        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          inventore nihil vero officiis dolores accusantium dicta veniam, totam
          deleniti soluta voluptas consequatur reprehenderit atque qui ab
          architecto? Ipsum, dolores reiciendisur adipisicing elit. Dolorem
          inventore nihil vero officiis dolores accusantium dicta veniam, totam
          deleniti soluta voluptas consequatur reprehenderit atque qui ab
          architecto? Ipsum, dolores reiciendis?{" "}
        </p>

        <h4 className="section-title">
          {" "}
          <span className="yellow-text"> S </span>kills
        </h4>
        <div className="skills">
          <div className="skill">
            <img src={profilephoto} alt="" />
            <h5>HTML</h5>
          </div>
          <div className="skill">
            <img src={profilephoto} alt="" />
            <h5>CSS</h5>
          </div>
          <div className="skill">
            <img src={profilephoto} alt="" />
            <h5>JS</h5>
          </div>
          <div className="break"></div> {/*--------------*/}
          <div className="skill">
            <img src={profilephoto} alt="" />
            <h5>ReactJS</h5>
          </div>
          <div className="skill">
            <img src={profilephoto} alt="" />
            <h5>Angular</h5>
          </div>
          <div className="skill">
            <img src={profilephoto} alt="" />
            <h5>Bootstrap</h5>
          </div>
          <div className="skill">
            <img src={profilephoto} alt="" />
            <h5>Materialize</h5>
          </div>
          <div className="break"></div> {/*--------------*/}
          <div className="skill">
            <img src={profilephoto} alt="" />
            <h5>NodeJS</h5>
          </div>
          <div className="skill">
            <img src={profilephoto} alt="" />
            <h5>Express</h5>
          </div>
          <div className="skill">
            <img src={profilephoto} alt="" />
            <h5>Postman</h5>
          </div>
          <div className="break"></div> {/*--------------*/}
          <div className="skill">
            <img src={profilephoto} alt="" />
            <h5>MySQL</h5>
          </div>
          <div className="skill">
            <img src={profilephoto} alt="" />
            <h5>MongoDB</h5>
          </div>
          <div className="skill">
            <img src={profilephoto} alt="" />
            <h5>PostgreSQL</h5>
          </div>
          <div className="break"></div> {/*--------------*/}
          <div className="skill">
            <img src={profilephoto} alt="" />
            <h5>Google Cloud</h5>
          </div>
        </div>

        <h4 className="section-title">
          {" "}
          <span className="yellow-text"> E </span>ducation
        </h4>
        <div className="education">
          <div className="edu-item">
            <img src={profilephoto} alt="" />
            <div className="edu-item-right">
              <h4 className="primary-color">Bachelor of Engineering (B. E.)</h4>
              <h5 className="secondary-color">Visvesvaraya Technological University, Karnataka, India</h5>
              <h6 className="ternary-color">P. A. College of Engineering, Mangalore.</h6>
            </div>
          </div>

          <div className="edu-item">
            <img src={profilephoto} alt="" />
            <div className="edu-item-right">
              <h4 className="primary-color">High School</h4>
              <h5 className="secondary-color">Higher Seconadary Education, Kerala. India.</h5>
              <h6 className="ternary-color">Thanbeehul Islam. H. S. S, Kasaragod.</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
