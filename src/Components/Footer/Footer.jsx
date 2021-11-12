import React from "react";

// style
import { FooterContainer } from "./Footer.style";

// images
import MainLogo from "../../Resources/Icons/logo.png";
import HandImage from "../../Resources/Images/point.png";
import GithubIcon from "../../Resources/Icons/github.png";
import LinkedinIcon from "../../Resources/Icons/linkedin.png";
import TwitterIcon from "../../Resources/Icons/twitter.png";
import MailIcon from "../../Resources/Icons/mail.png";

const Footer = () => {
  return (
    <FooterContainer>
      <img className="hand-image" src={HandImage} alt="hand" />
      <div className="social-container">
        <div className="icons">
          <a href="https://github.com/Thisisaarush" target='blank'>
            <img
              className="social-icon github-icon"
              src={GithubIcon}
              alt="social"
            />
          </a>
          <a href="https://www.linkedin.com/in/thisisaarush/" target='blank'>
            <img
              className="social-icon linkedin-icon"
              src={LinkedinIcon}
              alt="social"
            />
          </a>
          <a href="https://twitter.com/Thisisaarush" target='blank'>
            <img
              className="social-icon twitter-icon"
              src={TwitterIcon}
              alt="social"
            />
          </a>
          <a href="mailto:tanwaraarush007@gmail.com">
            <img
              className="social-icon mail-icon"
              src={MailIcon}
              alt="social"
            />
          </a>
        </div>
        <p className="copyright">
          &copy; Copyright 2021 | Made with <span className="heart">❤</span>
        </p>
      </div>
      <img className="main-logo" src={MainLogo} alt="brand" />
    </FooterContainer>
  );
};

export default Footer;
