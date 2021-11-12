import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ::-moz-selection { 
    color: white;
    background: ${props => props.theme.PrimaryColorDark};
  }

  ::selection {
    color: white;
    background: ${props => props.theme.PrimaryColorDark};
  }

  body {
    font-family: '${(props) => props.theme.PrimaryFont}', '${(props) => props.theme.SecondaryFont}' , sans-serif;
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 1rem;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.PrimaryColor};
      border-radius: 34px;
      border: 4px solid rgba(0,0,0,0);
      background-clip: padding-box;
      
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${props => props.theme.PrimaryColorDark};
      border: 4px solid rgba(0,0,0,0);
      background-clip: padding-box;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
