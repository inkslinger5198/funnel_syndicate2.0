import React from "react";
import "./header.css";


const Header = () => {
  return (
    <div className="FS__header section__padding " style={{ marginTop: '30px' }} id="home">
      <div className="FS__header-content" >
        <p class="p1" style={{ marginTop: '0' }}>Attention Coaches and Educators</p>
        <h1 className="gradient__text">As "Backend Partners", we'll add an extra $40,000-$120,000/mo to your
          businesses bottom-line in 90 days or less using <span style={{ textDecoration: 'underline' }}>The Syndicate Model</span>..</h1>
        <p class="p2">Without worrying about marketing content or running complicated funnels yourself.</p>
      </div>
      <div className="FS__header-video" style={{ marginTop: '20px' }}>
      <iframe width="600" height="380" src="https://www.youtube.com/embed/8eHHZWEMlik" title="VSL New"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default Header;
