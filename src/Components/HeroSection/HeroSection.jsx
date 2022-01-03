import React from "react";
import { motion } from "framer-motion";

// animation
import {
  TitleAnimation,
  HeroAnimation,
  TechIconsAnimation,
  HiAnimation,
} from "../../Animation";

// style
import {
  HeroBossContainer,
  HeroSectionContainer,
  BackgroundCircles,
  Hero,
  TechnologyContainer,
  SocialContainer,
} from "./HeroSection.style";

// images
import Namaste from "../../Resources/Images/namaste.png";
import HiEmoji from "../../Resources/Icons/hi.png";
import ReactIcon from "../../Resources/Icons/react.png";
import JavaScriptIcon from "../../Resources/Icons/js.png";
import NodeIcon from "../../Resources/Icons/node.png";
import CssIcon from "../../Resources/Icons/css.png";
import FigmaIcon from "../../Resources/Icons/figma.png";
import GithubIcon from "../../Resources/Icons/github.png";
import LinkedinIcon from "../../Resources/Icons/linkedin.png";
import TwitterIcon from "../../Resources/Icons/twitter.png";
import InstagramIcon from "../../Resources/Icons/instagram.png";
import BehanceIcon from "../../Resources/Icons/behance.png";

// blank space component
import BlankSpace from "../BlankSpace/BlankSpace";

const HeroSection = () => {
  return (
    <HeroBossContainer id="home">
      <BlankSpace />
      <HeroSectionContainer>
        <BackgroundCircles>
          <div className="big-circle">
            <div className="medium-circle"></div>
            <div className="regular-circle"></div>
            <div className="small-circle"></div>
          </div>
        </BackgroundCircles>

        <Hero>
          <motion.img
            className="namaste"
            src={Namaste}
            alt="namaste"
            variants={HeroAnimation}
            initial="hidden"
            animate="show"
          />
          <motion.div
            className="intro"
            variants={TitleAnimation}
            initial="hidden"
            animate="show"
          >
            <motion.img
              className="hi-emoji"
              src={HiEmoji}
              alt="hi"
              variants={HiAnimation}
              initial="hidden"
              animate="show"
            />
            <div>
              <p className="greeting">Namaste, I am</p>
              <p className="my-name">Aarush</p>
            </div>
          </motion.div>
          <motion.div
            className="occupation"
            variants={TitleAnimation}
            initial="hidden"
            animate="show"
          >
            <p className="occupation-title">Web & Mobile Developer</p>
            <p className="occupation-title">UX Designer</p>
          </motion.div>
        </Hero>

        <TechnologyContainer
          variants={TechIconsAnimation}
          initial="hidden"
          animate="show"
        >
          <img
            className="tech-icon react-icon"
            src={ReactIcon}
            alt="technology"
          />

          <img
            className="tech-icon javascript-icon"
            src={JavaScriptIcon}
            alt="technology"
          />

          <img
            className="tech-icon node-icon"
            src={NodeIcon}
            alt="technology"
          />

          <img className="tech-icon css-icon" src={CssIcon} alt="technology" />

          <img
            className="tech-icon figma-icon"
            src={FigmaIcon}
            alt="technology"
          />
        </TechnologyContainer>

        <SocialContainer>
          <a href="https://github.com/Thisisaarush" target="blank">
            <img className="social-icon" src={GithubIcon} alt="social" />
          </a>
          <a href="https://www.linkedin.com/in/thisisaarush/" target="blank">
            <img className="social-icon" src={LinkedinIcon} alt="social" />
          </a>
          <a href="https://twitter.com/Thisisaarush" target="blank">
            <img className="social-icon" src={TwitterIcon} alt="social" />
          </a>
          <a href="https://www.instagram.com/thisisaarush/" target="blank">
            <img className="social-icon" src={InstagramIcon} alt="social" />
          </a>
          <a href="https://www.behance.net/thisisaarush" target="blank">
            <img className="social-icon" src={BehanceIcon} alt="social" />
          </a>
        </SocialContainer>
      </HeroSectionContainer>
    </HeroBossContainer>
  );
};

export default HeroSection;
