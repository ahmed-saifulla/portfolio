import React from "react";
import "./About.css";

import htmlimage from "../../../images/html.png";
import cssimage from "../../../images/css.png";
import jsimage from "../../../images/js.png";
import profilephoto from "../../../images/profilephoto.jpg";
import reactimage from "../../../images/react-logo.png";
import angularimage from "../../../images/angular.png";
import bootstrapimage from "../../../images/bootstrap.png";
import materializeimage from "../../../images/materialize.png";
import nodejsimage from "../../../images/nodejs.png";
import expressimage from "../../../images/express.png";
import postmanimage from "../../../images/postman.png";
import mysqlimage from "../../../images/mysql.png";
import mongodbimage from "../../../images/mongodb.png";
import postgresqlimage from "../../../images/postgresql.png";
import gcloudimage from "../../../images/gcloud.png";

function About() {
  return (
    <div className="About">
      <div className="wrap">
        <h3 className="page-title">About Me</h3>

        <h2 className="title">Ahmed Saifulla</h2>
        <h4 className="sub-title">Full Stack Developer</h4>

        <p className="about-para">
          Enthusiast React, Angular, Codigniter Developer with a demonstrated
          history of working in the marketing and advertising industry. Skilled
          in Javascript, PHP, (Programming Language), jQuery, Bootstrap,
          and Cascading Style Sheets (CSS). Strong engineering professional with
          a Bachelor's degree focused in Computer Engineering from Visvesvaraya
          Technological University.
        </p>

        <h4 className="section-title">
          {" "}
          <span className="yellow-text"> S </span>kills
        </h4>
        <div className="skills">
          <div className="skill">
            <img src={htmlimage} alt="" />
            <h5>HTML</h5>
          </div>
          <div className="skill">
            <img src={cssimage} alt="" />
            <h5>CSS</h5>
          </div>
          <div className="skill">
            <img src={jsimage} alt="" />
            <h5>JS</h5>
          </div>
          <div className="break"></div> {/*--------------*/}
          <div className="skill">
            <img src={reactimage} alt="React" />
            <h5>ReactJS</h5>
          </div>
          <div className="skill">
            <img src={angularimage} alt="Angular" />
            <h5>Angular</h5>
          </div>
          <div className="skill">
            <img src={bootstrapimage} alt="" />
            <h5>Bootstrap</h5>
          </div>
          <div className="skill">
            <img src={materializeimage} alt="" />
            <h5>Materialize</h5>
          </div>
          <div className="break"></div> {/*--------------*/}
          <div className="skill">
            <img src={nodejsimage} alt="" />
            <h5>NodeJS</h5>
          </div>
          <div className="skill">
            <img src={expressimage} alt="" />
            <h5>Express</h5>
          </div>
          <div className="skill">
            <img src={postmanimage} alt="" />
            <h5>Postman</h5>
          </div>
          <div className="break"></div> {/*--------------*/}
          <div className="skill">
            <img src={mysqlimage} alt="" />
            <h5>MySQL</h5>
          </div>
          <div className="skill">
            <img src={mongodbimage} alt="" />
            <h5>MongoDB</h5>
          </div>
          <div className="skill">
            <img src={postgresqlimage} alt="" />
            <h5>PostgreSQL</h5>
          </div>
          <div className="break"></div> {/*--------------*/}
          <div className="skill">
            <img src={gcloudimage} alt="" />
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
              <h5 className="secondary-color">
                Visvesvaraya Technological University, Karnataka, India
              </h5>
              <h6 className="ternary-color">
                P. A. College of Engineering, Mangalore.
              </h6>
            </div>
          </div>

          <div className="edu-item">
            <img src={profilephoto} alt="" />
            <div className="edu-item-right">
              <h4 className="primary-color">High School</h4>
              <h5 className="secondary-color">
                Higher Seconadary Education, Kerala. India.
              </h5>
              <h6 className="ternary-color">
                Thanbeehul Islam. H. S. S, Kasaragod.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
