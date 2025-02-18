import "./ContactMe.css";
import { FaEnvelopeOpen, FaGithub, FaLinkedin } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const ContactMe = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="title contact__title">Get in Touch</h2>
      <div className="contact__container">
        <div className="contact__data">
          <h2 className="contact__description">Feel free to contact me!</h2>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon"/>
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__email">eduardamorads@gmail.com</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://www.linkedin.com/in/eduardamoraesdossantos/" target="_blank" className="contact__socials-link">
              <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: 'white' }} />
            </a>
            <a href="https://github.com/moraeseduarda" target="_blank" className="contact__socials-link">
              <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white' }} />
            </a>
          </div>
        </div>
        <form className="contact__form">
          <div className="contact__form-group">
            <div className="form__input-div">
              <label className="contact__form-label">Name</label>
              <input
                type="text"
                className="contact__form-control"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form__input-div">
              <label className="contact__form-label">Email</label>
              <input
                type="email"
                className="contact__form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form__input-div">
              <label className="contact__form-label">Subject</label>
                <input
                  type="subject"
                  className="contact__form-control"
                  placeholder="Your subject"
                  required
                />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              id="message"
              className="contact__form-control textarea"
              placeholder="Write your message"
              required 
            ></textarea>
          </div>

          <button type="submit" className="contact__form-button">Submit</button>
        </form>
      </div>

    </section>
  );
};

export default ContactMe;
