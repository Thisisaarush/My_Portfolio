import styled from "styled-components";

// styled components
export const WorkFlowContainer = styled.div`
  width: 75vw;
  margin: 0 auto;
  border: 2px solid ${(props) => props.theme.PrimaryColor};
  border-radius: ${(props) => props.theme.BorderRadiusLarge};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: ${props => props.theme.PaddingXL} ${props => props.theme.PaddingLarge};
  margin-bottom: 4rem;
  transition: all 0.3s ease-out;

  &:hover {
    box-shadow: 2px 4px 12px rgba(0 0 0 / 20%);
  }

  .work-flow-heading {
    color: ${(props) => props.theme.PrimaryColorDark};
    font-family: ${(props) => props.theme.SecondaryFont};
    margin-bottom: 4rem;
  }

  @media screen and (max-width: 600px) {
    width: 95%;
    padding: ${props => props.theme.PaddingLarge} 0.5rem;

    .work-flow-heading {
      margin-bottom: 3rem;
    }
  }
`;
export const WorkFlowContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;
export const Flow = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.SecondaryColor};
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 2px 4px 12px rgba(0 0 0 / 10%);

  .flow-heading {
  }
  .flow-image {
    width: 60px;
    user-select: none;
  }

  @media screen and (max-width: 600px) {
    margin: 0.5rem;
  }
`;