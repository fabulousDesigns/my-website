import "./about.css";
import ME from "../../assets/img-1.png";
import { SiBookmeter } from "react-icons/si";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <SiBookmeter />
              <h5>Experience</h5>
              <small>1+ Years of Working</small>
            </article>
            <article className="about__card">
              <SiBookmeter />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>
            <article className="about__card">
              <SiBookmeter />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            I'm a Developer with speciaty in Front End development, Back-End development,system
            functionality and Database Design. I am outgoing, dedicated,and
            open-minded. I get across to people and adjust to changes easily.
            Its my belief that someone should work on developing their
            professional skills and learning new things all the time.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
