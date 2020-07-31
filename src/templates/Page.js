import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

const Kicker = styled.span`
  font-size: 1rem;
`
const Heading = styled.h1`
  font-size: 3rem;
`
const Subheading = styled.span`
  font-size: 1rem;
`

export const PageTemplate = ({
    kicker,
    heading,
    subheading,
    content,
  }) => (
    <>
      {!!kicker && <Kicker>{kicker}</Kicker>}
      <Heading>{heading}</Heading>
      {!!subheading && <Subheading>{subheading}</Subheading>}
      <HTMLContent content={content} />
    </>
  )


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
