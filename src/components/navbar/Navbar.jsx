import React from "react";
import "./navbar.css";
import logo from "../../assets/GPT-3.svg";
import { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState(false);

  const toggleMenuHandler = () => {
    settoggleMenu(!toggleMenu);
  };
  const Menu = () => (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#WhatisGPT?">What is GPT?</a>
      </p>
      <p>
        <a href="#OpenAI">Open AI</a>
      </p>
      <p>
        <a href="#CaseStudies">Case Studies</a>
      </p>
      <p>
        <a href="#Library">Library </a>
      </p>
    </>
  );
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links-container">
          <Menu />
        </div>
      </div>

      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button>Sign up</button>
      </div>

      <div className="gpt3__navbar-menu">
        <div
          className={`toggle-button ${toggleMenu ? "active" : ""}`}
          onClick={toggleMenuHandler}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        {/* {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => settoggleMenu(false)}

          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => settoggleMenu(true)}
            />
        )} */}

        
        {toggleMenu && (
          <div className="gpt3__navbar-menu_comtainer scale-up-center">
            <div className="gpt3__navbar-menu_comtainer-links">
              <Menu />
              <div className="gpt3__navbar-menu_comtainer-links-sign">
                <p>Sign in</p>
                <button>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
