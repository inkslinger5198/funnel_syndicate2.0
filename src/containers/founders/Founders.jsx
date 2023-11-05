import React from "react";
import "./founders.css";
import TwitterLogo from "../../assets/Founders/twitter logo without bg.svg";
import Founder1 from "../../assets/Founders/pb_pic_rot.jpg";
import Founder2 from "../../assets/Founders/vd_pic_crop.jpg";

const Founders = () => {
  return (
    <div className="FS__founders section__padding">
      <div className="FS__contact-header">
        <h1 className="gradient__text">CONTACT US</h1>
      </div>
      <div className="FS__card-grid">
        <a className="FS__card-contact" href="https://twitter.com/pravitb_">
          <div
            className="FS__card-background"
            style={{ backgroundImage: `url(${Founder1})` }}
          ></div>
          <div className="FS__card-content">
            <img
              src={TwitterLogo}
              alt="Twitter Logo"
              style={{ height: "20px", width: "20px", margin: "10px" }}
            />
            <p className="FS__card-category">FOUNDER</p>
            <h3 className="FS__card-heading">PRAVIT</h3>
          </div>
        </a>

        <a className="FS__card-contact" href="https://twitter.com/VaarunDadlaney">
          <div
            className="FS__card-background"
            style={{ backgroundImage: `url(${Founder2})` }}
          ></div>
          <div className="FS__card-content">
            <img
              src={TwitterLogo}
              alt="Twitter Logo"
              style={{ height: "20px", width: "20px", margin: "10px" }}
            />
            <p className="FS__card-category">FOUNDER</p>
            <h3 className="FS__card-heading">VAARUN</h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Founders;
