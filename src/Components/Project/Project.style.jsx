import styled from "styled-components";

// styled components
export const ProjectBossContainer = styled.div`
  width: 100vw;
`;
export const ProjectContainer = styled.div`
  width: 75vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .project-model {
    width: 600px;
    position: absolute;
    top: -100px;
    left: 13%;
    user-select: none;
  }

  @media screen and (max-width: 600px) {
    width: 95%;
    margin-top: 2rem;

    .project-model {
      width: 500px;
      left: -50%;
      top: -250px;
    }
  }
`;
export const ProjectCardContainer = styled.div`
  width: 100%;
  margin-top: 20rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 600px) {
    margin-top: 3rem;
  }
`;
export const ProjectCard = styled.div`
  width: 450px;
  height: 600px;
  border: 2px solid ${(props) => props.theme.PrimaryColor};
  border-radius: ${(props) => props.theme.BorderRadiusLarge};
  margin: ${(props) => props.theme.MarginRegular};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0rem ${(props) => props.theme.PaddingLarge};
  transition: all 0.3s ease-out;

  &:hover {
    box-shadow: 2px 4px 12px rgba(0 0 0 / 20%);
    transform: scale(101%);
  }

  .project-image {
    width: 180px;
    user-select: none;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0rem 1rem;
  }
`;
export const ProjectData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .project-title {
    margin-bottom: ${(props) => props.theme.MarginMedium};
    font-family: ${(props) => props.theme.SecondaryFont};
  }
  .project-desc {
    font-size: ${(props) => props.theme.FontSizeSmall};
    margin-bottom: ${(props) => props.theme.MarginXL};
    letter-spacing: 0.5px;
    line-height: 1.5rem;
  }
  .source-code {
    background-color: ${(props) => props.theme.PrimaryColor};
    padding: ${(props) => props.theme.PaddingRegular}
      ${(props) => props.theme.PaddingMedium};
    border-radius: ${(props) => props.theme.BorderRadiusMedium};
    color: white;
    transition: all 0.2s ease-out;

    &:hover {
      background-color: ${(props) => props.theme.PrimaryColorDark};
    }
  }
  .live-site {
    border: 2px solid ${(props) => props.theme.PrimaryColor};
    padding: 0.85rem ${(props) => props.theme.PaddingMedium};
    border-radius: ${(props) => props.theme.BorderRadiusMedium};
    margin-left: ${(props) => props.theme.MarginMedium};
    transition: all 0.3s ease-out;

    &:hover {
      background-color: ${(props) => props.theme.PrimaryColorDark};
      border: 2px solid ${(props) => props.theme.PrimaryColorDark};
      color: white;
    }
  }

  @media screen and (max-width: 600px) {
    .project-title {
      font-size: 20px;
    }
    .source-code {
    }
  }
`;
