import React, { useRef, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

// style
import { NavigationContainer, MenuContainer, HireMe } from "./Navigation.style";

// images
import Logo from "../../Resources/Icons/logo.png";

const Navigation = () => {
  const NavigationRef = useRef();
  const HomeRef = useRef();
  const AboutRef = useRef();
  const ProjectsRef = useRef();
  const ContactRef = useRef();
  const ResumeRef = useRef();

  useEffect(() => {
    window.onscroll = function () {
      window.pageYOffset > "0"
        ? (NavigationRef.current.style.boxShadow =
            "2px 4px 12px rgba(0 0 0 / 8%)")
        : (NavigationRef.current.style.boxShadow = "none");
    };
  }, []);

  // menu items handlers
  const HomeHandler = () => {
    HomeRef.current.classList = "active-color";
    AboutRef.current.classList = "none";
    ProjectsRef.current.classList = "none";
    ContactRef.current.classList = "none";
    ResumeRef.current.classList = "none";
  };
  const AboutHandler = () => {
    HomeRef.current.classList = "none";
    AboutRef.current.classList = "active-color";
    ProjectsRef.current.classList = "none";
    ContactRef.current.classList = "none";
    ResumeRef.current.classList = "none";
  };
  const ProjectsHandler = () => {
    HomeRef.current.classList = "none";
    AboutRef.current.classList = "none";
    ProjectsRef.current.classList = "active-color";
    ContactRef.current.classList = "none";
    ResumeRef.current.classList = "none";
  };
  const ContactHandler = () => {
    HomeRef.current.classList = "none";
    AboutRef.current.classList = "none";
    ProjectsRef.current.classList = "none";
    ContactRef.current.classList = "active-color";
    ResumeRef.current.classList = "none";
  };

  const ResumeHandler = () => {
    HomeRef.current.classList = "none";
    AboutRef.current.classList = "none";
    ProjectsRef.current.classList = "none";
    ContactRef.current.classList = "none";
    ResumeRef.current.classList = "active-color";
  };

  return (
    <NavigationContainer ref={NavigationRef}>
      <HashLink smooth to='/My_Portfolio/#home'>
        <img className="main-logo" src={Logo} alt="aarush" />
      </HashLink>
      <HashLink smooth to="/My_Portfolio/resume" className='mobile-resume-link'>
        <span>Resume</span>
      </HashLink>
      <MenuContainer>
        <HashLink smooth to="/My_Portfolio/#home">
          <li className="home" ref={HomeRef} onClick={HomeHandler}>
            Home
          </li>
        </HashLink>
        <HashLink smooth to="/My_Portfolio/#about">
          <li ref={AboutRef} onClick={AboutHandler}>
            About
          </li>
        </HashLink>
        <HashLink smooth to="/My_Portfolio/#projects">
          <li ref={ProjectsRef} onClick={ProjectsHandler}>
            Projects
          </li>
        </HashLink>
        <HashLink smooth to="/My_Portfolio/#contact">
          <li ref={ContactRef} onClick={ContactHandler}>
            Contact
          </li>
        </HashLink>
        <HashLink smooth to="/My_Portfolio/resume">
          <li ref={ResumeRef} onClick={ResumeHandler}>
            Resume
          </li>
        </HashLink>
      </MenuContainer>
      <HashLink smooth to="/My_Portfolio/#contact">
        <HireMe>Hire Me</HireMe>
      </HashLink>
    </NavigationContainer>
  );
};

export default Navigation;
