import { createGlobalStyle } from "styled-components";

import COLORS from '../constants/colors'

export default createGlobalStyle`
  html {
    font-size: 16px;
    min-height: 100%;
    display: flex;
    flex: 1;
  }

  body {
    font-family: Fauna One, serif;
    font-weight: 400;
    line-height: 1.8;
    display: flex;
    flex: 1;
    background-color: ${COLORS.raven};
    color: ${COLORS.bandage};
    letter-spacing: 0.01rem;
  }

  a {
    text-decoration: none;
    color: ${COLORS.blood};
  }

  a:visited {
    color: ${COLORS.flesh};
  }

  #___gatsby, #gatsby-focus-wrapper {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    font-family: Cinzel;
    letter-spacing: 0.23rem;
    line-height: 1.2em;
    margin-top: 1.8em;
    margin-bottom: .8em;
    color: ${COLORS.lightning};
  }

  h1 { font-size: 4.2rem; }
  h2 { font-size: 2.2rem; }
  h3 { font-size: 1.6rem; }
  h4 { font-size: 1.3rem; }
  h5 { font-size: 1.15rem; }

  @media screen and (max-width: 900px) {
    h1 { font-size: 2.6rem; }
    h2 { font-size: 1.8rem; }
    h3 { font-size: 1.4rem; }
    h4 { font-size: 1.2rem; }
    h5 { font-size: 1.1rem; }
  }
`;
