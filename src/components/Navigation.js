import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import COLORS from '../constants/colors'

const Navigation = styled.nav`
  position: fixed;
  width: 100%;
`

const NavList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
  list-style: none;
`;

const NavItem = styled.li`
  margin: 0 1rem 0 0;
`

const PageLink = ({ slug, title }) => (<NavItem><Link to={slug}>{title}</Link></NavItem>)

export default () => {
  return (
    <Navigation role="navigation" aria-label="main-navigation">
      <NavList>
        <PageLink slug="/" title="Yhdistys" />
        <PageLink slug="/boffaus" title="Boffaus" />
        <PageLink slug="/larppaus" title="Larppaus" />
      </NavList>
    </Navigation>
  );
}
