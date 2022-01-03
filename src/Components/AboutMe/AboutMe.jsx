import React from "react";

// style
import {
  AboutBossContainer,
  AboutMeContainer,
  AboutContent,
} from "./AboutMe.style";

// images
import ProfileImage from "../../Resources/Images/profile.png";
import ThumbsUp from "../../Resources/Images/thumbsup.png";

// blank space
import BlankSpace from "../BlankSpace/BlankSpace";

const AboutMe = () => {
  return (
    <AboutBossContainer id="about">
      <BlankSpace />
      <AboutMeContainer>
        <img className="profile-image" src={ProfileImage} alt="profile" />
        <AboutContent>
          <h2 className="about-heading">About Me</h2>
          <p className="about-content">
            I’m a Professional Web & Mobile Developer with UX Design Skills. I
            am Passionate about leveraging my diverse background to decipher
            challenging problems and create delightful experience. <br />
            <br /> I build websites using HTML5, CSS3, Javascript, React, Nodejs. I have top skills in using design softwares like Figma,
            Adobe XD, Photoshop, Illustrator. <br />
            <br /> I always work towards achieving best results on each project
            i lay my hands on.
          </p>
        </AboutContent>
        <img className="thumbs-up" src={ThumbsUp} alt="thumbsup" />
      </AboutMeContainer>
    </AboutBossContainer>
  );
};

export default AboutMe;
