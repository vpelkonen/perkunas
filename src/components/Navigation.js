import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import COLORS from '../constants/colors'

const Navigation = styled.nav`
  position: fixed;
  height: 60px;
  background: ${COLORS.raven}
`

const NavList = styled.ul`

`

const NavItem = styled.li`

`

const PageLink = ({ slug, title }) => (<NavItem><Link to={slug}>{title}</Link></NavItem>)

export default () => {
  return (
    <Navigation role="navigation" aria-label="main-navigation">
      <NavList>
        {/* {PAGES.map(page => (
          <PageLink {...page} />
        ))} */}
      </NavList>
    </Navigation>
  );
}
