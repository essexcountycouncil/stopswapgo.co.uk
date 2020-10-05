import React from 'react'
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { graphql } from "gatsby"
import * as PropTypes from "prop-types"
import Link from 'gatsby-link'
import LayoutWithNewsletter from "../layout/60-day"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SignupSixtyDay from "../components/signup-sixty-day/signup-sixty-day"

const propTypes = {
    data: PropTypes.object.isRequired,
}

class Page extends React.Component {
  render() {
    const page = this.props.data.contentfulSixtyDayChallenge
    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ENTRY]: (node) => {
          return <div className="callout callout-middle">
            <p className="section-heading">{node.data.target.fields.title['en-US']}</p>
            <p>{node.data.target.fields.content['en-US']}</p>
          </div>
        },

        [INLINES.EMBEDDED_ENTRY]: (node) => {
          return <div className="callout callout-side">
            <p className="section-heading">{node.data.target.fields.title['en-US']}</p>
            <p>{node.data.target.fields.content['en-US']}</p>
          </div>
        },
      },  
    }    
    return (
      <div>
        <LayoutWithNewsletter>
					<h1>{page.title}</h1>
					{documentToReactComponents(page.content.json, options)}
					<SignupSixtyDay></SignupSixtyDay>
        </LayoutWithNewsletter>
      </div>
    )
  }
}

export default Page

export const pageQuery = graphql`
  {
	  contentfulSixtyDayChallenge {
	  	content {
	  		json
	  	}
	  }   
  }
`