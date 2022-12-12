/* eslint-disable array-callback-return */
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";
const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Disney Character Game",
      github: "https://github.com/fabulousDesigns/disney-character-game",
    },
    {
      id: 2,
      image: IMG2,
      title: "Front End Projects",
      github: "https://github.com/fabulousDesigns/front-end-projects",
    },
    {
      id: 3,
      image: IMG3,
      title: "Generating shoes-content creation",
      github: "https://github.com/fabulousDesigns/generating-shoes",
    },
    {
      id: 4,
      image: IMG4,
      title: "Hashtags Manager",
      github: "https://github.com/fabulousDesigns/hashtags-managers",
    },
    {
      id: 5,
      image: IMG5,
      title: "Project-MemoryCard",
      github: "https://github.com/fabulousDesigns/project-memory-card",
    },
    {
      id: 6,
      image: IMG6,
      title: "College Prediction System",
      github:
        "https://github.com/fabulousDesigns/college-prediction-application",
    },
  ];

  return (
    <section id="portfolio">
      <h5>Recent Work</h5>
      <h2>PORTFOLIO</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  View Project Here
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
