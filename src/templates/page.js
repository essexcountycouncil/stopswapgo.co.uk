import React from 'react'
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { graphql } from "gatsby"
import * as PropTypes from "prop-types"
import Link from 'gatsby-link'
import Layout from "../layout/page"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


const propTypes = {
    data: PropTypes.object.isRequired,
}

class Page extends React.Component {
  render() {
    const page = this.props.data.contentfulPage
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
        <Layout>
          <h1>{page.title}</h1>
          {documentToReactComponents(page.content.json, options)}
        </Layout>
      </div>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query pageQuery( $id : String! ) {
    contentfulPage( id: { eq: $id } ) {
      id
      title
      content {
        json
      }  
    }
  }
`