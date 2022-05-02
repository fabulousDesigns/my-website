import { BsGithub } from "react-icons/bs";

const Socials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://github.com/fabulousDesigns"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <BsGithub />{" "}
      </a>
    </div>
  );
};

export default Socials;
