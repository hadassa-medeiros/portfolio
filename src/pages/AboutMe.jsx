import React from "react";
import lnkdnIcon from "/assets/lnkdn-icon-cropped.svg";
import githubIcon from "/assets/github-icon.svg";
import CustomIcon from "../components/CustomIcon";

function AboutMe() {
  return (
    <>
      <div className="bg-layer"> </div>

      <div className="grid-container">
        <div className="title">
          <h1>Hadassa Medeiros</h1>
        </div>
        <div className="icons">
          <CustomIcon
            href="linkedin.com/in/hadassamedeiros"
            iconImg={lnkdnIcon}
          />
          <CustomIcon href="github.com/hadassa-medeiros" iconImg={githubIcon} />
        </div>
        <ul className="info">
          <li>Full-stack developer (front-end focus)</li>
          <li>Barcelona, Spain</li>
        </ul>
        <div className="description">
          <p>
            I like things to flow and be uncomplicated. Full stack developer,
            front-end focus, UX awareness, academic background in Architecture
            and Urbanism. I specialize in the MERN stack (MongoDB, Express,
            React, Node.js).
          </p>
        </div>
        <div className="projects">
          <p className="note">[ projects section in progress ]</p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
