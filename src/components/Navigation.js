import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

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
  padding: 0;
  background-color: ${COLORS.raven};
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0px 4px 1px 0px ${COLORS.raven};
`;

const Logo = styled.div`
  width: 73px;
  height: 76px;
  background-color: gray;
`

const NavList = styled.ul`
  padding: 0 1.5rem 0 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  list-style: none;
`;

const NavItem = styled.li`
  margin: 0 0 0 1.5rem;
  padding: 1.5rem 0;
`

const PageLink = ({ slug, title }) => (
<NavItem>
  <Link
    to={slug}
    style={{ color: COLORS.blood }}
    activeStyle={{ color: COLORS.lightning }}
  >
    {title}
  </Link>
</NavItem>
)

export default () => {
  return (
    <Wrapper>
      <Navigation role="navigation" aria-label="main-navigation">
        <Logo />
        <NavList>
          <PageLink slug="/" title="Yhdistys" />
          <PageLink slug="/boffaus" title="Boffaus" />
          <PageLink slug="/larppaus" title="Larppaus" />
        </NavList>
      </Navigation>
    </Wrapper>
  );
}
