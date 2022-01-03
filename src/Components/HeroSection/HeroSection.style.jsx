import styled from "styled-components";
import { motion } from "framer-motion";

// styled components
export const HeroBossContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: -5.5rem;
  user-select: none;
`;
export const HeroSectionContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
export const BackgroundCircles = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .big-circle,
  .medium-circle,
  .regular-circle,
  .small-circle {
    background: linear-gradient(
      300deg,
      #edf6f9 20%,
      rgba(196, 196, 196, 0) 85%
    );
  }
  .big-circle {
    width: 400px;
    height: 400px;
    border-radius: ${(props) => props.theme.BorderRadiusRound};
    position: relative;
  }
  .medium-circle {
    width: 150px;
    height: 150px;
    border-radius: ${(props) => props.theme.BorderRadiusRound};
    position: absolute;
    top: 30px;
    left: -200px;
  }
  .regular-circle {
    width: 100px;
    height: 100px;
    border-radius: ${(props) => props.theme.BorderRadiusRound};
    position: absolute;
    bottom: 10px;
    left: -20px;
  }
  .small-circle {
    width: 50px;
    height: 50px;
    border-radius: ${(props) => props.theme.BorderRadiusRound};
    position: absolute;
    bottom: -30px;
    right: 0px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;

    .big-circle {
      width: 300px;
      height: 300px;
    }
    .medium-circle,.regular-circle,.small-circle {
      display: none;
    }
  }
`;
export const Hero = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  .namaste {
    width: 600px;
  }

  .intro {
    position: absolute;
    top: 80px;
    left: -100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: ${(props) => props.theme.PaddingRegular} ${(props) => props.theme.PaddingLarge};
    border-radius: ${(props) => props.theme.BorderRadiusMedium};
    box-shadow: 2px 4px 12px rgba(0 0 0 / 10%);

    .hi-emoji {
      width: 40px;
      height: 40px;
      margin-right: ${(props) => props.theme.MarginRegular};
    }
    .greeting {
      color: #333;
      font-size: ${(props) => props.theme.FontSizeSmall};
    }
    .my-name {
      font-weight: ${(props) => props.theme.FontWeightBold};
      font-size: ${(props) => props.theme.FontSizeLarge};
      background-color: #4158d0;
      background-image: linear-gradient(
        43deg,
        #4158d0 0%,
        #c850c0 46%,
        #ffcc70 100%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    }
  }
  .occupation {
    position: absolute;
    top: 200px;
    left: -70px;
    background-color: white;
    padding: ${(props) => props.theme.PaddingSmall} ${(props) => props.theme.PaddingMedium};
    border-radius: ${(props) => props.theme.BorderRadiusMedium};
    font-weight: ${(props) => props.theme.FontWeightMedium};
    box-shadow: 2px 4px 12px rgba(0 0 0 / 10%);
  }

  @media screen and (max-width: 600px) {
    top: 25%;
    
    .namaste {
      width: 374px;
    }
    .intro {
      padding: ${(props) => props.theme.PaddingSmall} ${(props) => props.theme.PaddingLarge};
      top: -50%;
      left: 10%;
    }
    .occupation {
      top: -25%;
      left: 30%;
    }
  }

  @media screen and (min-width: 1600px) {

    .namaste {
      width: 800px;
    }
  }
`;
export const TechnologyContainer = styled(motion.div)`
  width: 300px;
  height: 500px;
  position: absolute;
  top: 50px;
  right: 15%;

  .tech-icon {
    width: 100px;
    height: 100px;
    transition: all 0.3s ease-out;
    position: relative;

    &:hover {
      transform: scale(1.05);
    }
  }
  .react-icon {
    position: absolute;
    top: 0;
    left: 0;
  }
  .javascript-icon {
    position: absolute;
    top: 80px;
    right: 40px;
  }
  .node-icon {
    position: absolute;
    top: 200px;
    left: 40px;
  }
  .css-icon {
    position: absolute;
    top: 280px;
    right: 10px;
  }
  .figma-icon {
    position: absolute;
    bottom: 0;
    left: 80px;
  }

  @media screen and (max-width: 600px) {
    width: 95%;
    height: 120px;
    right: 2%;
    top: auto;
    bottom: 10%;

    .tech-icon {
      width: 60px;
      height: 60px;
    }
    .javascript-icon {
      top: auto;
      bottom: -20px;
      left: 60px;
    }
    .node-icon {
      top: 0;
      left: 135px;
    }
    .css-icon {
      top: auto;
      bottom: -20px;
      right: auto;
      left: 200px;
    }
    .figma-icon {
      bottom: auto;
      top: 0;
      left: auto;
      right: 0;
    }
  }
`;
export const SocialContainer = styled.div`
  position: absolute;
  bottom: 100px;
  left: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .social-icon {
    width: 45px;
    padding: 0.4rem;
    border: 1px solid #d8d8d8;
    border-radius: ${(props) => props.theme.BorderRadiusRound};
    transition: all 0.3s ease-out;

    &:hover {
      transform: translateX(-4px);
      box-shadow: 2px 4px 12px rgba(0 0 0 / 10%);
    }

    &:not(:last-child) {
      margin-bottom: ${(props) => props.theme.MarginSmall};
    }
  }

  @media screen and (max-width: 600px) {
   display: none; 
  }
`;
