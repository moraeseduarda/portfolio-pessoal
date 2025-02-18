import { Link } from "react-scroll";
import './MobileNav.css';

const MobileNav = ({isOpen, toogleMenu}) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}
      onClick={toogleMenu}
      >
        <div className="mobile-menu-container">
          <ul>
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
        </div>

      </div>
    </>
  );
};

export default MobileNav;