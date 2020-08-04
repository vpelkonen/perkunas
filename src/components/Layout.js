import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'

import Footer from '../components/Footer'
import Navigation from './Navigation'
import useSiteMetadata from './SiteMetadata'
import GlobalStyle from "../styles/global"

import '../styles/normalize.css'

const SkipToContentLink = styled.a`
  opacity: 0;
  position: absolute;
  &:focus {
    opacity: 100;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 800px;
  padding: 1.5rem;
  align-self: center;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  word-break: break-word;
`;

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
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-128.png`}
          sizes="128x128"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-64.png`}
          sizes="64x64"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32.png`}
          sizes="32x32"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#EFEFEF"
        />
        <meta name="theme-color" content="#EFEFEF" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <GlobalStyle />
      <SkipToContentLink href="#main-content">
        Skip to main content
      </SkipToContentLink>
      <Wrapper>
        <Navigation />
        <Content>{children}</Content>
        <Footer />
      </Wrapper>
    </>
  );
}

export default TemplateWrapper
