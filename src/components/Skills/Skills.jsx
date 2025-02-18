import './Skills.css';
import skillsData from "../../data/skillsData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faCss3, faJs, faPython } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const iconMap = {
  faReact: faReact,
  faCss3: faCss3,
  faJs: faJs,
  faPython: faPython
};

const Skills = () => {
  return (
    <motion.section 
    className="skills section" 
    id="skills"
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
      <div className="skills__header">
        <p className="subtitle">Developing</p>
        <h2 className="title">Skills</h2>
      </div>
      <div className="skills__container">
        {skillsData?.skills?.map((item, index) => (
          <div key={index}
          className="skills__card">
            <div className="skills__icon">
              <FontAwesomeIcon icon={iconMap[item.icon]} size="3x" style={{ color: item.color }} />
            </div>
            <div className="skills__card-content">
              <h3 className="skills__title">{item.title}</h3>
              <p className="skills__description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;