import React from "react"
import "./Hero.css"
import { MaquinaDeEscrever } from "../MaquinaDeEscrever";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2><MaquinaDeEscrever text="Front End Developer">
        </MaquinaDeEscrever></h2>
        <p>Creating Websites with Pixel</p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img></img>
          </div>
          <img src="src\img\hero-img.jpg"></img>
        </div>
      </div>
    </section>
  )
}

export default Hero;