import styled from "styled-components";

// styled components
export const ContactBossContainer = styled.div`
  width: 100vw;
`;
export const FormSuccessContainer = styled.div`
  width: 75vw;
  margin: 0 auto;
  padding: ${(props) => props.theme.PaddingXL} 0rem;
  line-height: 2.5rem;

  .form-success {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #3ddc84;
    color: white;
    font-size: ${(props) => props.theme.FontSizeLarge};
    font-family: ${(props) => props.theme.SecondaryFont};
    font-weight: ${(props) => props.theme.FontWeightMedium};
    padding: ${(props) => props.theme.PaddingLarge};
    border-radius: ${(props) => props.theme.BorderRadiusLarge};
    box-shadow: 2px 4px 12px rgba(0 0 0 / 20%);
  }

  @media screen and (max-width: 600px) {
    width: 95%;

    .form-success {
      font-size: 20px;
    }
  }
`;
export const ContactContainer = styled.div`
  width: 75vw;
  background-color: ${(props) => props.theme.SecondaryColor};
  margin: 0 auto;
  border-radius: ${(props) => props.theme.BorderRadiusLarge};
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: ${(props) => props.theme.MarginXXL};
  margin-top: ${(props) => props.theme.MarginXL};
  box-shadow: 2px 4px 12px rgba(0 0 0 / 10%);
  transition: all 0.3s ease-out;

  &:hover {
  box-shadow: 2px 4px 12px rgba(0 0 0 / 20%);
  }

  .contact-image {
    width: 400px;
    margin-top: 10px;
    user-select: none;
    z-index: 2;
  }

  @media screen and (max-width: 600px) {
    width: 95%;
    margin-top: 0rem;
    margin-bottom: 4rem;

    .contact-image {
      display: none;
    }
  }
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.PrimaryFont};
  z-index: 20;

  .contact-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .contact-title {
    color: ${(props) => props.theme.PrimaryColorDark};
    font-family: ${(props) => props.theme.SecondaryFont};
    margin-bottom: ${(props) => props.theme.MarginLarge};
  }
  .name,
  .email,
  .message,
  .send {
    border: none;

    &:not(:last-child) {
      margin-bottom: ${(props) => props.theme.MarginSmall};
      padding: 1rem;
      border-radius: 5px;
    }
  }
  .name {
    width: 350px;
    height: 40px;
  }
  .email {
    width: 350px;
    height: 40px;
  }
  .message {
    width: 350px;
    height: 120px;
    font-family: inherit;
    resize: none;
  }
  .send {
    padding: ${(props) => props.theme.PaddingSmall} ${(props) => props.theme.PaddingLarge};
    border-radius: ${(props) => props.theme.BorderRadiusSmall};
    background-color: ${(props) => props.theme.PrimaryColor};
    margin-top: ${(props) => props.theme.MarginRegular};
    color: white;
    font-size: ${(props) => props.theme.FontSizeRegular};
    font-family: ${(props) => props.theme.SecondaryFont};
    cursor: pointer;
    transition: all 0.3s ease-out;

    &:hover {
      background-color: ${(props) => props.theme.PrimaryColorDark};
    }
  }

  @media screen and (max-width: 600px) {
    padding: 1rem;
    width: 95%;
    
    .contact-form {
      width: 100%;
    }
    .name,.email,.message {
    width: 100%;
    }
  }
`;
export const BackgroundCircles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 300px;
  transform: translateY(-50%);

  .big-circle {
    width: 250px;
    height: 250px;
    background: linear-gradient(
      300deg,
      #edf6f9 20%,
      rgba(196, 196, 196, 0) 85%
    );
    border-radius: ${(props) => props.theme.BorderRadiusRound};
    position: relative;
  }
  .medium-circle {
    width: 110px;
    height: 110px;
    background: linear-gradient(
      300deg,
      #edf6f9 20%,
      rgba(196, 196, 196, 0) 85%
    );
    border-radius: ${(props) => props.theme.BorderRadiusRound};
    position: absolute;
    top: 100px;
    left: -200px;
  }
  .regular-circle {
    width: 100px;
    height: 100px;
    background: linear-gradient(
      300deg,
      #edf6f9 20%,
      rgba(196, 196, 196, 0) 85%
    );
    border-radius: ${(props) => props.theme.BorderRadiusRound};
    position: absolute;
    bottom: 10px;
    left: -20px;
  }
  .small-circle {
    width: 50px;
    height: 50px;
    background: linear-gradient(
      300deg,
      #edf6f9 20%,
      rgba(196, 196, 196, 0) 85%
    );
    border-radius: ${(props) => props.theme.BorderRadiusRound};
    position: absolute;
    bottom: -50px;
    right: 0px;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
