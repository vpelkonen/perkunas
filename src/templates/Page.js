import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

const Wrapper = styled.main`
  padding: 0 0 1.5rem 0;
`

export const HeadingContainer = styled.div`
  padding-top: 4.5rem;
  min-height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Kicker = styled.span`
  font-family: Cinzel;
  display: block;
  text-align: center;
  font-size: 1.16rem;
`

export const Heading = styled.h1`
  text-align: center;
  margin: .3em 0 .45em 0;
`

const Subheading = styled.span`
  font-family: Cinzel;
  display: block;
  text-align: center;
  font-size: 1.16rem;
`

export const PageTemplate = ({ kicker, heading, subheading, content }) => (
  <Wrapper id="main-content">
    <HeadingContainer>
      {!!kicker && <Kicker>{kicker}</Kicker>}
      <Heading>{heading}</Heading>
      {!!subheading && <Subheading>{subheading}</Subheading>}
    </HeadingContainer>
    <HTMLContent content={content} />
  </Wrapper>
);


PageTemplate.propTypes = {
  kicker: PropTypes.string,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  content: PropTypes.string.isRequired,
}

const Page = ({ data: { markdownRemark: data } }) => (
  <Layout>
    <PageTemplate
      kicker={data.frontmatter.kicker}
      heading={data.frontmatter.heading}
      subheading={data.frontmatter.subheading}
      content={data.html}
    />
  </Layout>
)

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query Page($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        kicker
        heading
        subheading
      }
    }
  }
`
