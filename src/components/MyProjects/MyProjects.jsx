import "./MyProjects.css";
import ProjectImage from '../../img/project-img.jpg';
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "Project 1"},
  { id: 2, title: "Project 2"},
  { id: 3, title: "Project 3"},
  { id: 4, title: "Project 4"},
];

const MyProjects = () => {
  return (
    <motion.div className="projects__section" id="projects"
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
      <p className="subtitle">Recent</p>
      <h2 className="title">Projects</h2>
      <div className="projects__container">
        {projects.map((project) => (
          <div key={project.id} className="project__card">
            <img src={ProjectImage} alt={project.title} className="project__card-image" />
            <h3>{project.title}</h3>
            <button className="repo-button">
              <FaGithub className="github-icon" /> View repository
          </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default MyProjects;
