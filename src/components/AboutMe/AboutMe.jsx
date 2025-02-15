import React from "react"
import './AboutMe.css'
import AboutImage from '../../img/perfil-img.png'

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me__header">
        <p className="subtitle">A little</p>
        <h2 className="title">About Me</h2>
      </div>
      <div className="about-me__content">
        <img src={AboutImage} className="about-me__image" alt="Profile"/>
        
        <div className="about-me__details">
          <div className="about-me__bio">
            <p className="about-me__bio-text">Hi, I'm Eduarda 💛 </p>
            <p className="about-me__bio-text">I'm a beginner software developer from Brazil.</p>
          </div>
          <div>
            <div className="about-info">
              <div className="about-info__description"> 
                <p>I'm currently on my Information Systems bachelor's degree at Universidade Federal de Santa Catarina (UFSC) and I'm focused on improving my skills in computing and software development.</p>
                </div>
            </div>
          </div>
        </div>
    
      </div>
    </section>
  )
}

export default AboutMe