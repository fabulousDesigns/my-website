import React from "react";
import "./nav.css";
import { BiHomeCircle } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import { SiBookmeter } from "react-icons/si";
import { GrServices } from "react-icons/gr";
import { GrContact } from "react-icons/gr";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <BiHomeCircle className="nav__icons"/>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FcAbout className="nav__icons"/>
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <SiBookmeter className="nav__icons"/>
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <GrServices className="nav__icons"/>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <GrContact className="nav__icons"/>
      </a>
    </nav>
  );
};

export default Nav;
