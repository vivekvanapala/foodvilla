import React from "react";
import "../utils/index.css";

const Footer = () => {
  return (
    <div className="footer font-serif">
      Developed with 🧡 and a lot of ☕️ by vivek
      <i className="fa-solid fa-heart"></i>
      {/* <a>Anand</a> */}
      <a
        href="https://github.com/vivekvanapala"
        target="_blank"
        title="vivek's Github profile"
      >
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub"
          className="github-logo"
        />
      </a>
    </div>
  );
};

export default Footer;
