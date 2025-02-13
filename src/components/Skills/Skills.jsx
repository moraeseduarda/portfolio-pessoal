import './Skills.css'
import data from "../../data/index.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faCss3, faJs, faPython } from "@fortawesome/free-brands-svg-icons";

const iconMap = {
  faReact: faReact,
  faCss3: faCss3,
  faJs: faJs,
  faPython: faPython
};

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="portfolio-container">
        <p className="section-title">Em desenvolvimento</p>
        <h2 className="skills-section-heading">Habilidades</h2>
      </div>
      <div className="skills-section-container">
        {data?.skills?.map((item, index) => (
          <div key={index}
          className="skills-section-card">
            <div className="skills-section-img">
              <FontAwesomeIcon icon={iconMap[item.icon]} size="3x" style={{ color: item.color }} />
            </div>
            <div className="skills-section-card-content">
              <h3 className="skills-section-title">{item.title}</h3>
              <p className="skills-section-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills