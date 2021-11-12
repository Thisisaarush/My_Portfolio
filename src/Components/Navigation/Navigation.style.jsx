import styled from "styled-components";

// styled components
export const NavigationContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem ${(props) => props.theme.PaddingXXL};
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: rgba(255 255 255 / 70%);
  backdrop-filter: blur(20px);
  user-select: none;

  .main-logo {
    width: 60px;
  }
  .mobile-resume-link {
    display: none;
    font-family: ${props => props.theme.SecondaryFont};
  }

  @media screen and (max-width: 600px) {
    padding: ${(props) => props.theme.PaddingSmall};

    .mobile-resume-link {
      display: block;
    }
  }
`;
export const MenuContainer = styled.ul`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  

  li {
    list-style: none;
    font-family: ${(props) => props.theme.SecondaryFont};
    font-size: ${(props) => props.theme.FontSizeSmall};
    color: ${(props) => props.theme.TextColorFaded};
    cursor: pointer;

    &.active-color,
    &.home {
      color: ${props => props.theme.PrimaryColorDark};
      font-weight: ${props => props.theme.FontWeightMedium};
      position: relative;

      &.active-color::after,
      &.home::after {
        content: '';
        width: 20px;
        height: 2px;
        background-color: ${props => props.theme.PrimaryColor};
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform:  translateX(-50%);
        border-radius: 34px;
        animation: bubble 0.5s ease-in-out 1;

        @keyframes bubble {
          0% {
            width: 20px;
          }
          50% {
            width: 10px;
          }
          100% {
            width: 20px;
          }
        }
      }
    }

    &:not(:last-child) {
      margin-right: ${(props) => props.theme.MarginLarge};
    }
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const HireMe = styled.span`
  font-family: ${(props) => props.theme.SecondaryFont};
  background-color: ${(props) => props.theme.PrimaryColor};
  padding: ${(props) => props.theme.PaddingSmall} ${(props) => props.theme.PaddingRegular};
  border-radius: ${(props) => props.theme.BorderRadiusSmall};
  color: white;
  font-size: ${(props) => props.theme.FontSizeSmall};
  cursor: pointer;
  font-weight: ${(props) => props.theme.FontWeightMedium};
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(101%);
    box-shadow: 2px 4px 12px ${(props) => props.theme.PrimaryColor};
    background-color: ${(props) => props.theme.PrimaryColorDark};
  }
`;
