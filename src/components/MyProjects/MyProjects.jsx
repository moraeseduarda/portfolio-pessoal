import "./MyProjects.css";
import ProjectImage from '../../img/hero-img.jpg'

const projects = [
  { id: 1, title: "Project 1"},
  { id: 2, title: "Project 2"},
  { id: 3, title: "Project 3"},
  { id: 4, title: "Project 4"},
];

const MyProjects = () => {
  return (
    <section className="projects-section" id="projects">
      <p className="subtitle">Recent</p>
      <h2 className="title">Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={ProjectImage} alt={project.title} className="project-card__image" />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
