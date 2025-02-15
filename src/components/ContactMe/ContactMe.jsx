import "./ContactMe.css";

const ContactMe = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="title">Get in Touch</h2>
      <form className="contact__form">
        <div className="contact__form-group">
          <label htmlFor="name" className="contact__form-label">Name</label>
          <input
            type="text"
            id="name"
            className="contact__form-input"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="contact__form-group">
          <label htmlFor="email" className="contact__form-label">Email</label>
          <input
            type="email"
            id="email"
            className="contact__form-input"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="contact__form-group">
          <label htmlFor="message" className="contact__form-label">Message</label>
          <textarea
            id="message"
            className="contact__form-textarea"
            placeholder="Write your message"
            required
          ></textarea>
        </div>

        <button type="submit" className="contact__form-button">Submit</button>
      </form>
    </section>
  );
};

export default ContactMe;
