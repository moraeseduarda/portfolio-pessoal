import './Navbar.css'
import { Link } from "react-scroll";

const Navbar = () => {
    const scrollToContact = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

  return (
    <nav className="navbar">
      <div className="navbar__content">
        <div className="navbar__logo">
          <Link to="#" smooth={true} duration={500} className="navbar__menu-item">
            Eduarda
          </Link>
        </div>
        <ul>
            <li>
              <Link to="about-me" smooth={true} duration={500} className="navbar__menu-item">
                About
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} className="navbar__menu-item">
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} offset={-80} className="navbar__menu-item">
                Projects
              </Link>
            </li>
            <li>
              <Link to="works" smooth={true} duration={500} offset={-80} className="navbar__menu-item">
                Work Experience
              </Link>
            </li>

          <button className="navbar__contact-btn" onClick={scrollToContact}>
                Contact Me
              </button>
          
        </ul>
        <button className="navbar__menu-btn" onClick={() => {}}>
            <span class={"material-symbols-outlined"} style={{ fontSize: "1.8rem" }}> menu
            </span>
          </button>
      </div>
    </nav>

  )
}

export default Navbar