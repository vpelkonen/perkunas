import React from 'react'
import PropTypes from 'prop-types'

export const HTMLContent = ({ content }) => (
  <div dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content }) => content

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
