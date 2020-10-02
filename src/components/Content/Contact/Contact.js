import React from "react";
import "./Contact.css";

import profilephoto from "../../../images/profilephoto.jpg";
import github from "../../../images/github.png";
import gmail from "../../../images/gmail.png";
import whatsapp from "../../../images/whatsapp.png";
import instagram from "../../../images/instagram.png";
import linkedin from "../../../images/linkedin.png";

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
            <a href="https://github.com/ahmed-saifulla" target="_blank" className="media">
              <img src={github} alt="" />
              <h6>Github</h6>
            </a>
            <a href="mailto:ahsaifulla@gmail.com" target="_blank" className="media">
              <img src={gmail} alt="" />
              <h6>Gmail</h6>
            </a>
            <a href="https://www.linkedin.com/in/ahmed-saifulla/" target="_blank" className="media">
              <img src={linkedin} alt="" />
              <h6>LinkedIn</h6>
            </a>
            <div className="break"></div> {/*--------------*/}
            <a href="https://www.instagram.com/ah_saifullah/" target="_blank" className="media">
              <img src={instagram} alt="" />
              <h6>Instagram</h6>
            </a>
            <a href="https://wa.me/918129318510" target="_blank" className="media">
              <img src={whatsapp} alt="" />
              <h6>Whatsapp</h6>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
