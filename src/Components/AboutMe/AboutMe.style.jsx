import styled from "styled-components";

// styled components
export const AboutBossContainer = styled.div`
  width: 100vw;
`;
export const AboutMeContainer = styled.div`
  width: 75vw;
  background-color: ${(props) => props.theme.SecondaryColor};
  border-radius: ${(props) => props.theme.BorderRadiusLarge};
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  margin-bottom: 7rem;
  margin-top: 4rem;
  box-shadow: 2px 4px 12px rgba(0 0 0 / 10%);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 2px 4px 12px rgba(0 0 0 / 20%);
  }

  .profile-image {
    width: 440px;
    height: 100%;
    user-select: none;
  }
  .thumbs-up {
    width: 300px;
    position: absolute;
    bottom: -10px;
    right: -90px;
    user-select: none;
  }

  @media screen and (max-width: 600px) {
    width: 95%;
    flex-direction: column-reverse;
    margin-top: 7rem;

    .profile-image {
      width: 300px;
    }
    .thumbs-up {
      display: none;
    }
  }
`;
export const AboutContent = styled.div`
  width: 50%;
  padding: ${(props) => props.theme.PaddingXL};
  font-size: ${(props) => props.theme.FontSizeSmall};

  .about-heading {
    color: ${(props) => props.theme.PrimaryColorDark};
    font-family: ${(props) => props.theme.SecondaryFont};
    margin-bottom: ${(props) => props.theme.MarginRegular};
    font-size: ${(props) => props.theme.FontSizeLarge};
  }
  .about-content {
    padding-right: ${(props) => props.theme.PaddingLarge};
    letter-spacing: 0.4px;
    line-height: 1.5rem;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    padding: 2rem ${(props) => props.theme.PaddingSmall};

    .about-content {
      padding-right: 0;
      letter-spacing: 0.2px;
    }
  }
`;
