import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <h1 className="hero__description">EDUARDA MORAES</h1>
        <div>
          <h2 className="title">Front-End Developer</h2>
        </div>
        <p className="hero__description">Creating Websites with Pixel</p>
        <div className="hero__social-links">
          <a className="hero__social-link" href="https://www.linkedin.com/in/eduardamoraesdossantos/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: 'white' }} />
          </a>
          <a className="hero__social-link" href="https://github.com/moraeseduarda" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white' }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;