import "./Hero.css"
import { WritingEffect } from "../WritingEffect/WritingEffect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import HeroImage from '../../img/hero-img.jpg'

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <h1 className="hero__logo">EDUARDA MORAES</h1>
        <div>
          {/* <h2><WritingEffect text="Front-End Developer"></WritingEffect></h2> */}
          <h2 className="hero__subtitle">Front-End Developer</h2>
        </div>
        <p className="hero__description">Creating Websites with Pixel</p>
        <div className="hero__social-links">
          <a className="hero__social-link" href="https://www.linkedin.com/in/eduardamoraesdossantos/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: 'white' }} />
          </a>
          <a className="hero__social-link" href="https://github.com/moraeseduarda" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white' }} />
          </a>
        </div>
      </div>

      <div className="hero__image-container">
        <div className="hero__image-wrapper">
          <img className="hero__image" src={HeroImage} alt="Hero"></img>
        </div>
      </div>
    </section>
  )
}

export default Hero;