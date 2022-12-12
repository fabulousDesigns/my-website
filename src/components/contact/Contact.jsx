import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
    emailjs.sendForm(
      "service_j167udu",
      "template_d0uyvga",
      form.current,
      "rMm3guHh3CIxEP_cR"
    );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>designsfabulous8@gmail.com</h5>
            <a
              href="mailto:designsfabulous8@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          {/* <article className="contact__option">
            <MdOutlineEmail />
            <h4>Messanger</h4>
            <h5>mountfabulous6@gmail.com</h5>
            <a href="mailto:mountfabulous6@gmail.com">Send a Message</a>
          </article> */}
          {/* // whats app */}
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+254110026199"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Me
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Your Full name"
            name="name"
            required
          />
          <input type="text" placeholder="Your email" name="email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
