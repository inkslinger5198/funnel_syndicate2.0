import React from "react";
import "./footer.css";
import Logo from "../../assets/Logo/Logo.png";
const Footer = () => {
  return (
    <div className="FS__footer section__padding">
      <div className="FS__footer-links">
        <div className="FS__footer-links_logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="FS__footer-links_div">
          <h4>Get in touch</h4>
          <p>
            <a
              href="https://calendly.com/funnelsyndicate/io?month=2023-08"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call
            </a>
          </p>
        </div>

        <div className="FS__footer-links_div">
          <h4>Links for Twitter</h4>
          <p><a href="https://twitter.com/pravitb_">Pravit Bhatia</a></p>
          <p><a href="https://twitter.com/VaarunDadlaney">Vaarun Dadlaney</a></p>
        </div>

        <div className="FS__footer-links_div">
          <h4>Company</h4>
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#service">Services</a>
          </p>
          <p>
            <a href="#about">About</a>
          </p>
          <p>
            <a href="#testimonial">Testimonial</a>
          </p>
        </div>

        
      </div>
    </div>
  );
};

export default Footer;
