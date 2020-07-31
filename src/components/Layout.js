import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import Footer from '../components/Footer'
import Navigation from './Navigation'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const SkipToContentLink = styled.a`
  opacity: 0;
  position: absolute;
  &:focus {
    opacity: 100;
  }
`

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <SkipToContentLink href="#main-content">Skip to main content</SkipToContentLink>
      {/* <Navigation /> */}
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default TemplateWrapper
