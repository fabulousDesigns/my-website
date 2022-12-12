import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/img-1.png";
import Socials from "./Socials";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Bernard Maina</h1>
        <h5 className="text-light">Back End Developer</h5>
        <CTA />
        <Socials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
