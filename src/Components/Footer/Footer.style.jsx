import styled from "styled-components";

// styled components
export const FooterContainer = styled.div`
  width: 100vw;
  height: 250px;
  background-color: ${(props) => props.theme.PrimaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  .hand-image {
    width: 800px;
    transform: rotate(90deg);
    position: absolute;
    top: -90px;
    left: -250px;
    user-select: none;
  }

  .social-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 8rem;
    position: relative;
    user-select: none;

    .icons {
      .social-icon {
        width: 50px;
        background-color: white;
        padding: 0.5rem;
        border-radius: 50%;
        margin: 1rem;
        transition: all 0.3s ease-out;

        &:hover {
          transform: translateY(-5px);
          box-shadow: 2px 4px 12px rgba(0 0 0 / 20%);
        }
      }
    }
    .copyright {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap;
      letter-spacing: 2px;

      .heart {
        color: red;
      }
    }
  }
  .main-logo {
    width: 120px;
    margin-right: -10rem;
    margin-left: 4rem;
    user-select: none;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 150px;

    .hand-image {
      display: none;
    }
    .social-container {
      width: 95%;

      .icons {
        display: flex;
        .social-icon {
          width: 40px;
          margin: 0.5rem;
        }
      }
      .copyright {
        bottom: auto;
        bottom: 60px;
        letter-spacing: 1px;
      }
    }
    .main-logo {
      display: none;
    }
  }
`;
