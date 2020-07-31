import React from "react"
import PropTypes from "prop-types"

import { PageTemplate } from './Page'

const PagePreviewTemplate = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()
  if (data) {
    return (
      <PageTemplate
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        description={data.description}
        intro={data.intro || { blurbs: [] }}
        mainpitch={data.mainpitch || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

PagePreviewTemplate.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
}

export default PagePreviewTemplate
