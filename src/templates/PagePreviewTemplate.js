import React from "react"
import PropTypes from "prop-types"

import { PageTemplate } from './Page'

const PagePreviewTemplate = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()
  if (data) {
    return (
      <PageTemplate
        image={getAsset(data.image)}
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
  }),
  getAsset: PropTypes.func
}

export default PagePreviewTemplate
