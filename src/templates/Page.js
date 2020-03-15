import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

export const PageTemplate = ({ title, content, contentComponent }) => (
  <>
    <h1>
      {title}
    </h1>
    <HTMLContent content={content} />
  </>
)


PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const Page = ({ data }) => (
  <Layout>
    <PageTemplate
      title={data.markdownRemark.frontmatter.title}
      content={data.markdownRemark.html}
    />
  </Layout>
)

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const aboutPageQuery = graphql`
  query Page($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
