import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
const Menu = () => (
  <>
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
    <p>
      <a href="#contact">Contact Us</a>
    </p>
  </>
);

//the <> </> is a fragment, it is used to wrap multiple elements without adding an extra node to the DOM
//BEM -> Block Element Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="FS__navbar">
      <div className="FS__navbar-links">
        <div className="FS__navbar-links_logo">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "white",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "black",
                  fontSize: "17px",
                  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                  fontWeight: 600,
                }}
              >
                FS
              </span>
            </div>
            <div
              style={{
                color: "white",
                fontSize: "17px",
                fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                fontWeight: 500,
              }}
            >
              FUNNEL
              <br />
              SYNDICATE
            </div>
          </div>
        </div>
        <div className="FS__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="FS__navbar-sign">
        <button>
          <a
            href="https://calendly.com/funnelsyndicate/io?month=2023-08"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Apply Now{" "}
          </a>
        </button>
      </div>
      <div className="FS__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="FS__navbar-menu_container scale-up-center">
            <div className="FS__navbar-menu_container-links">
              <Menu />
              <div className="FS__navbar-menu_container-links-sign">
                <button>
                  <a
                    href="https://calendly.com/funnelsyndicate/io?month=2023-08"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Now
                  </a>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
