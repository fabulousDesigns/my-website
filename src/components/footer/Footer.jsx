import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
       Bernard Maina
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="htpps://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="htpps://instagram.com" target="_blank" rel="noreferrer">
          <FiInstagram />
        </a>
        <a href="htpps://github.com" target="_blank" rel="noreferrer">
          {" "}
          <BsGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Bernard Maina All right reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
