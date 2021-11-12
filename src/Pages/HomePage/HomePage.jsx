import React from "react";
import { motion } from "framer-motion";

// animation
import { PageAnimation } from "../../Animation";

// components
import HeroSection from "../../Components/HeroSection/HeroSection";
import AboutMe from "../../Components/AboutMe/AboutMe";
import WorkFlow from "../../Components/WorkFlow/WorkFlow";
import Project from "../../Components/Project/Project";
import Contact from "../../Components/Contact/Contact";

const HomePage = () => {
  return (
    <motion.div variants={PageAnimation} initial="hidden" animate="show" exit='exit'>
      <HeroSection />
      <AboutMe />
      <WorkFlow />
      <Project />
      <Contact />
    </motion.div>
  );
};

export default HomePage;
