import React from "react";
import "./Contact.css";

import profilephoto from "../../../images/profilephoto.jpg";

function Contact() {
  return (
    <div className="Contact">
      <h3 className="page-title">Contact Me</h3>
      <div className="contact-wrap">
        <div className="left">
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="John Doe" required />
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="yourmail@domain.com" required />
            <label htmlFor="message">Message</label>
            <textarea
              required
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="hey there..."
            ></textarea>

            <input type="submit" className="submit-btn" />
          </form>
        </div>
        <div className="right">
          <h3>Stay in touch</h3>
          <div className="medias">
            <a href="#!" className="media">
              <img src={profilephoto} alt="" />
              <h6>Github</h6>
            </a>
            <a href="#!" className="media">
              <img src={profilephoto} alt="" />
              <h6>Github</h6>
            </a>
            <a href="#!" className="media">
              <img src={profilephoto} alt="" />
              <h6>Github</h6>
            </a>
            <div className="break"></div> {/*--------------*/}
            <a href="#!" className="media">
              <img src={profilephoto} alt="" />
              <h6>Github</h6>
            </a>
            <a href="#!" className="media">
              <img src={profilephoto} alt="" />
              <h6>Github</h6>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
