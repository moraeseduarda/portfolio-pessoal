import React, { useState } from "react";
import MobileNav from "./MobileNav/MobileNav";
import './Navbar.css';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toogleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toogleMenu={toogleMenu}/>

      <nav className="navbar">
        <div className="navbar__content">
          <div className="navbar__logo">
            <FontAwesomeIcon icon={ faCode } size="2x"/>
          </div>
          <ul className={`navbar__menu ${openMenu ? 'active' : ''}`}> 
              <li>
                <Link to="about-me" smooth={true} duration={500} offset={-60} className="navbar__menu-item">About</Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={500} className="navbar__menu-item">Skills</Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500} offset={-80} className="navbar__menu-item">Projects</Link>
              </li>
              <li>
                <Link to="works" smooth={true} duration={500} offset={-80} className="navbar__menu-item">Work Experience</Link>
              </li>
              <li>
                <Link to='contact' smooth={true} duration={500} offset={-80}>
                  <button className="navbar__contact-btn">Contact Me</button>
                </Link>
              </li>
          </ul>
          <button className="navbar__menu-btn" onClick={toogleMenu}>
              <span className="material-symbols-outlined" 
              style={{ fontSize: "1.8rem" }}
              >
                {openMenu ? "close" : "menu"}
              </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
