import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { withPrefix } from "gatsby";

const Logo = styled.img`
  margin: 1rem 0;
  height: 44px;
  @media screen and (max-width: 499px) {
    display: none;
  }
`;

const LogoMobile = styled.img`
  margin: 1rem 0;
  height: 44px;
  @media screen and (min-width: 500px) {
    display: none;
  }
`;

export default () => (
  <Link to="/">
    <Logo
      src={`${withPrefix("/")}img/perkunas_full_w.png`}
      alt="Roolipeliyhdistys Perkunas ry"
    />
    <LogoMobile
      src={`${withPrefix("/")}img/perkunas_serpent_w.png`}
      alt="Roolipeliyhdistys Perkunas ry"
    />
  </Link>
)
