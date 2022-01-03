import React from "react";
import styled from "styled-components";

// images
import EcommerceMockup from "../../Resources/Images/mockups/ecomm.png";
import FoodDeliveryMockup from "../../Resources/Images/mockups/food.png";
import HomeRenovationMockup from "../../Resources/Images/mockups/homeReno.png";
import NationalGeoMockup from "../../Resources/Images/mockups/ng.png";
import RestaurantMockup from "../../Resources/Images/mockups/restaurant.png";
import SmartHomeMockup from "../../Resources/Images/mockups/smartHome.png";

const DesignProjects = () => {
  return (
    <DesignProjectsContainer>
      <h1>Design Projects</h1>
      <ProjectsContainer>
        <Project>
          <img src={EcommerceMockup} alt="design project" />
        </Project>
        <Project>
          <img src={SmartHomeMockup} alt="design project" />
        </Project>
        <Project>
          <img src={HomeRenovationMockup} alt="design project" />
        </Project>
        <Project>
          <img src={FoodDeliveryMockup} alt="design project" />
        </Project>
        <Project>
          <img src={NationalGeoMockup} alt="design project" />
        </Project>
        <Project>
          <img src={RestaurantMockup} alt="design project" />
        </Project>
      </ProjectsContainer>
    </DesignProjectsContainer>
  );
};

export default DesignProjects;

// styled components
const DesignProjectsContainer = styled.div`
  width: 100%;
  margin-top: 10rem;
  h1 {
    margin-bottom: 4rem;
    text-align: center;
    color: ${(props) => props.theme.PrimaryColorDark};
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
    font-family: ${(props) => props.theme.DesignFont};
  }
`;
const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Project = styled.div`
  width: 600px;
  height: 450px;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
