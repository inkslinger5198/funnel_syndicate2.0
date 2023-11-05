import React from "react";
import "./about.css";
import icon1Image from "../../assets/Timeline/icon_1-removebg-preview.png";
import icon2Image from "../../assets/Timeline/icon_2-removebg-preview.png";
import icon3Image from "../../assets/Timeline/icon_3-removebg-preview.png";
import icon4Image from "../../assets/Timeline/02b00525-a3b6-49cd-9e55-40703f8017ea.png";

const About = () => {
  return (
    <div class="FS__About section__padding" id="about">
      <div class="timeline-container">
        <div class >
          <h1 class="timeline-header gradient__text">THE SYNDICATE MODEL</h1>
          <div className="timeline-content-box">
            <div className="timeline-left">
              <div className="bt1">
                <img
                  src={icon1Image}
                  alt=""
                />
              </div>       
              <div className="bt6">
                <h1>2. Strategy Development</h1>
                <p>
                  We dive deep into understanding your business & brand to create
                  a unique positioning strategy. This personalized approach forms
                  the cornerstone of your success, allowing you to carve a niche
                  and make a lasting impact.
                </p>
              </div>
              <div className="bt3">
                <img
                  src={icon3Image}
                  alt=""
                />
              </div>
              <div className="bt8">
                <h1>4. Monetization</h1>
                <p>
                  We assist you in discovering the optimal approach to monetize
                  your brand, leveraging attention to craft a sales funnel using
                  community building or high-ticket closing strategies.
                </p>
              </div>
            </div>
            <div className="timeline-right">
            <div className="bt5">
                <h1>1. Free Funnel Audit</h1>
                <p>
                  We take an in-depth look into your funnels to analyze missed
                  sales opportunities & guide you with an actionable plan to
                  optimize your funnel for maximum conversions.
                </p>
              </div>
              <div className="bt2">
                <img
                  src={icon2Image}
                  alt=""
                />
              </div>
              
              <div className="bt7">
                <h1>3. Brand Ascension</h1>
                <p>
                  We help you build a loyal following through personalized content
                  creation based on our 4 Main Pillars of Organic Growth
                  <br />
                  Attention → Credibility → Authority → Monetization
                </p>
              </div>
              <div className="bt4">
                <img
                  src={icon4Image}
                  alt=""
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
