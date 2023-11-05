import React from "react";
import "./service.css";
import { Feature } from "../../components";

const service = () => {
  return (
    <div className="FS_service section__margin" id="service">
      <div className="FS_service-heading">
        <h1 className="gradient__text">
        Funnel Syndicate offers various Services
        </h1>
        <p>Explore our Services</p>
      </div>
      <div className="FS_service-container">
        <Feature
          title="FUNNEL BUILDING"
          text="Our Funnel Creation service helps businesses attract and convert leads into customers using customized sales funnels that are tailored for you."
        />
        <Feature
          title="EMAIL MARKETING"
          text="We help you to position yourself as a Brand in your niches while maintaining Authenticity, Authority and build a loyal audience by engaging with your fans to gain consistent inbound leads."
        />
        <Feature
          title="COMMUNITY MANAGEMENT"
          text="Helping you to create a thriving online community where members can connect and leverage the attention to convert it into consistent paying dollars."
        />
        <Feature 
        title="DM UPSELLING"
        text="We realize that gathering attention is not enough, Upselling to High-ticket products guarantees an excellent ROI of your time and we help you achieve that." 
        />
      </div>
    </div>
  );
};

export default service;
