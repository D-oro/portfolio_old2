/* eslint-disable react/react-in-jsx-scope */
import './Contact.css';

function Contact() {
  return (
    <main id="main">
      <section className="contact-section">
        <h1>Contact</h1>
        <p>Get in touch!</p>
        <div className="links-container">
          <a href="https://www.linkedin.com/in/doro-hinrichs/" className="square-link">LinkedIn</a>
          <a href="https://github.com/D-oro" className="square-link">Github</a>
          <a href="mailto:doro.codes@gmail.com" className="square-link">Email</a>
        </div>
      </section>
    </main>
  );
}
export default Contact;
