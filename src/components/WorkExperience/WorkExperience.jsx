import "./WorkExperience.css";

const Works = () => {
  return (
    <section className="works" id="works">
      <p className="subtitle">Professional</p>
      <h2 className="title">Experience</h2>
      <div className="works__list">
        <div className="works__item">
          <h3 className="works__item-title">Web Development Trainee</h3>
          <p className="works__item-description">Pixel - 2024, now</p>
        </div>
        <div className="works__item">
          <h3 className="works__item-title">Internship</h3>
          <p className="works__item-description">Y - 2021 to 2022</p>
        </div>
      </div>
    </section>
  );
};

export default Works;
