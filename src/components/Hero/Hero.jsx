import "./Hero.css"
import { MaquinaDeEscrever } from "../MaquinaDeEscrever";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section className="hero-container" id="hero">
      <div className="hero-content">
        <h1>EDUARDA MORAES</h1>
        <div>
          {/* <h2><MaquinaDeEscrever text="Front-End Developer"></MaquinaDeEscrever></h2> */}
          <h2>Front-End Developer</h2>
        </div>
        <p>Creating Websites with Pixel</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/eduardamoraesdossantos/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/moraeseduarda" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>

      <div className="hero-img-container">
        <div>
          <img className="hero-img" src="src\img\hero-img.jpg"></img>
        </div>
      </div>
      
    </section>
  )
}

export default Hero;