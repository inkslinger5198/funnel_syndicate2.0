import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="FS__contact section__padding" id="contact">
      <div className="FS__contact__book_call">
        <div className="FS__contact_book-call_content">
            <h1 className="gradient__text">Book a Call</h1>
            <p className="">We are an All In One funnel agency who help you with email marketing and building sales funnel to monetize your audience.</p>
            <h3 className="gradient__text">Take your business to a new level.</h3>
        </div>
        <div className="FS__contact_book-call_frame">
          <iframe
            src="https://calendly.com/funnelsyndicate/io?month=2023-08"
            width="100%"
            height="100%"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
