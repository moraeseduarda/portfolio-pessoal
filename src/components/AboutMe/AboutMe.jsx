import './AboutMe.css';
import AboutImage from '../../img/perfil-img.png';
import { FaFire, FaMugHot, FaSmile, FaBook } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.section 
      className="about-me section" 
      id="about-me"
      initial={{ opacity: 0 }}
      whileInView={{ 
        opacity: 1, 
        scale: 1.05,
        transition: { duration: 2 },
      }}
      viewport= {{ 
        once: true,
        amount: "0.5" 
    }}
      
    >
      <div className="about-me__header">
        <p className="subtitle">A little</p>
        <h2 className="title">About Me</h2>
      </div>
      <div className="about-me__content">
        <img src={AboutImage} className="about-me__image" alt="Profile"/>
        
        <div className="about-me__details">
          <div className="about-me__bio">
            <p className="about-me__bio-text">Hi, I'm Eduarda 🩷 </p>
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
      <div className='stats'>
        <div className="stats__item">
          <FaFire className="stats__icon" />
          <div className="stats__content">
            <h3 className="stats__number">XXX</h3>
            <p className="stats__text">Projects Completed</p>
          </div>
        </div>
        <div className="stats__item">
          <FaMugHot className="stats__icon" />
          <div className="stats__content">
            <h3 className="stats__number">XXX</h3>
            <p className="stats__text">Cups of Coffee</p>
          </div>
        </div>
        <div className="stats__item">
          <FaSmile className="stats__icon" />
          <div className="stats__content">
            <h3 className="stats__number">XXX</h3>
            <p className="stats__text">Satisfied Clients</p>
          </div>
        </div>
        <div className="stats__item">
          <FaBook className="stats__icon" />
          <div className="stats__content">
            <h3 className="stats__number">XXX</h3>
            <p className="stats__text">Books read</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
