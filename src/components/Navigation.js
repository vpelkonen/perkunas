import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import PAGES from '../constants/pages'
import COLORS from '../constants/colors'

const Navigation = styled.nav`
  position: fixed;
  height: 60px;
  background: ${COLORS.raven}
`

const Hamburger = styled.button`

`

const HamburgerMeat = styled.span`

`

const NavList = styled.ul`

`

const NavItem = styled.li`

`

const PageLink = ({ slug, title }) => (<NavItem><Link to={slug}>{title}</Link></NavItem>)

export default () => {
  return (
    <Navigation role="navigation" aria-label="main-navigation">
      <Hamburger
        // className={this.state.navBarActiveClass}
        // onClick={this.toggleHamburger}
      >
        <HamburgerMeat />
        <HamburgerMeat />
        <HamburgerMeat />
        hamburger
      </Hamburger>
      <NavList>
        {PAGES.map(page => (
          <PageLink {...page} />
        ))}
      </NavList>
    </Navigation>
  );
}
