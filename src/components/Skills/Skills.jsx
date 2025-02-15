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
    <section className="skills" id="skills">
      <div className="skills__header">
        <p className="subtitle">In development</p>
        <h2 className="title">Skills</h2>
      </div>
      <div className="skills__container">
        {data?.skills?.map((item, index) => (
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
    </section>
  )
}

export default Skills