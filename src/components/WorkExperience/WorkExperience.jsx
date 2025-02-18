import "./WorkExperience.css";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <motion.div
    className="works section" id="works"
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

      <p className="subtitle">Work</p>
      <h2 className="title">Experience</h2>
      <div className="works__list">
        <div className="works__item">
          <h3 className="works__item-title">Web Development Trainee</h3>
          <p className="works__item-description">Pixel - 2024, now</p>
        </div>
        <div className="works__item">
          <h3 className="works__item-title">Freelancer Virtual Assistant</h3>
          <p className="works__item-description">Elleva - 2024, 2025</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Works;
