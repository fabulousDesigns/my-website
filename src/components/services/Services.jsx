import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>SERVICES</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wireframing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Prototyping</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Information architecture</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Critical thinking.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Search engine optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Customer satisfaction</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile responsiveness</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Consistent branding</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User experience optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Technical efficiency</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Conversion</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>content writing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>messaging</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>media personalities</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>videographers</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
