import React from "react"
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="nav-content">
        <div className="logo">EDUARDA</div>
        <ul>
          <li>
            <a className="menu-item">Sobre</a>
          </li>
          <li>
            <a className="menu-item">Habilidades</a>
          </li>
          <li>
            <a className="menu-item">Projetos</a>
          </li>
          <li>
            <a className="menu-item">Currículo</a>
          </li>

          <button className="contact-btn" onClick={() => {}}>
            Contato
          </button>

          <button className="menu-btn" onClick={() => {}}>
            <span
            class={"material-symbols-outlined"}
            style={{ fontSize: "1.8rem" }}
            >
              menu
            </span>
          </button>

        </ul>
      </div>
    </nav>

  )
}

export default Navbar