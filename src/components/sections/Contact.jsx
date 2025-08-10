const Contact = () => {
  return (
    <section id="contact" className="dark-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-description">
          Have a question or want to work together? Feel free to reach out!
        </p>
        <form className="form-container">
          <input
            type="text"
            placeholder="Name"
            className="input-field"
          />
          <input
            type="email"
            placeholder="Email"
            className="input-field"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="input-field"
          ></textarea>
          <button className="btn-submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;