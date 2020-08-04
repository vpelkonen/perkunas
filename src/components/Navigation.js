import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Logo from '../components/Logo'
import COLORS from '../constants/colors'

const Wrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Navigation = styled.nav`
  display: flex;
  flex: 1;
  max-width: 800px;
  background-color: ${COLORS.raven};
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0px 4px 1px 0px ${COLORS.raven};
  padding: 0;
  @media screen and (max-width: 824px) {
    padding: 0 1.5rem;
  }
`;

const NavList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  list-style: none;
`;

const NavListItem = styled.li`
  display: flex;

`

const PageLink = ({ slug, title, isLast }) => (
  <NavListItem>
    <Link
      to={slug}
      style={{
        color: COLORS.blood,
        padding: "1.5rem",
        margin: isLast ? "0 -1.5rem 0 0" : 0,
      }}
      activeStyle={{ color: COLORS.lightning }}
      partiallyActive
    >
      {title}
    </Link>
  </NavListItem>
);

export default () => {
  return (
    <Wrapper>
      <Navigation role="navigation" aria-label="main-navigation">
        <Logo />
        <NavList>
          <PageLink slug="/" title="Yhdistys" />
          <PageLink slug="/boffaus" title="Boffaus" />
          <PageLink slug="/larppaus" title="Larppaus" isLast />
        </NavList>
      </Navigation>
    </Wrapper>
  );
}
