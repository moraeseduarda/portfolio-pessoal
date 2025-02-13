import './Navbar.css'
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="nav-content">
        <div className="logo">
          <Link to="hero" smooth={true} duration={500} className="menu-item">
            Eduarda
          </Link>
        </div>
        <ul>
            <li>
              <Link to="aboutme" smooth={true} duration={500} className="menu-item">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} className="menu-item">
                Habilidades
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} className="menu-item">
                Projetos
              </Link>
            </li>
            <li>
              <Link to="cv" smooth={true} duration={500} className="menu-item">
                Currículo
              </Link>
            </li>

          <button className="contact-btn" onClick={() => {}}>
            Contato
          </button>



        </ul>
        <button className="menu-btn" onClick={() => {}}>
            <span
            class={"material-symbols-outlined"}
            style={{ fontSize: "1.8rem" }}
            >
              menu
            </span>
          </button>
      </div>
    </nav>

  )
}

export default Navbar