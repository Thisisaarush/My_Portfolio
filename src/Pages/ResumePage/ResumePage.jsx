import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// animation
import { PageAnimation } from "../../Animation";

// resume
import AarushTanwarResume from "../../Resources/Resume/Aarush_Tanwar_RESUME.pdf";
import ResumeImage from "../../Resources/Resume/Aarush_Tanwar_RESUME.png";

const ResumePage = () => {
  return (
    <ResumePageContainer
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit='exit'
    >
      <a
        className="resume-button"
        href={AarushTanwarResume}
        download="Aarush_Tanwar_Resume"
      >
        Download PDF
      </a>
      <img className="resume-image" src={ResumeImage} alt="resume" />
    </ResumePageContainer>
  );
};

// styled components
const ResumePageContainer = styled(motion.div)`
  width: 75vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.theme.MarginXL};
  user-select: none;

  .resume-button {
    margin-bottom: ${(props) => props.theme.MarginXL};
    background-color: ${(props) => props.theme.PrimaryColorDark};
    padding: ${(props) => props.theme.PaddingRegular} ${(props) => props.theme.PaddingLarge};
    border-radius: ${(props) => props.theme.BorderRadiusMedium};
    color: white;
    font-family: ${(props) => props.theme.SecondaryFont};
    box-shadow: 2px 4px 12px ${(props) => props.theme.PrimaryColor};
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(101%);
      box-shadow: 2px 4px 30px ${(props) => props.theme.PrimaryColor};
    }
    &:focus {
      transform: scale(100%);
    }
  }
  .resume-image {
    width: 100%;
    border: 2px solid ${(props) => props.theme.PrimaryColor};
    padding: 0rem ${(props) => props.theme.PaddingXL};
    border-radius: ${(props) => props.theme.BorderRadiusXL};
    margin-bottom: ${(props) => props.theme.MarginXXL};
    transition: all 0.3s ease-in-out;

    &:hover {
      box-shadow: 2px 4px 12px ${(props) => props.theme.PrimaryColor};
    }
  }

  @media screen and (max-width: 600px) {
    width: 95%;
    margin-top: 2rem;

    .resume-image {
      padding: 0;
      border-radius: ${(props) => props.theme.BorderRadiusMedium};
      margin-bottom: 4rem;
  }
`;

export default ResumePage;
