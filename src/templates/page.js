import React from 'react'
import { BLOCKS } from "@contentful/rich-text-types"
import { graphql } from "gatsby"
import * as PropTypes from "prop-types"
import Link from 'gatsby-link'
import Layout from "../layout/page"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const propTypes = {
    data: PropTypes.object.isRequired,
}

const CalloutFull = ({ children }) => <div className="callout">{children}</div>
const CalloutSide = ({ children }) => <div className="callout callout-side">{children}</div>



class Page extends React.Component {
  render() {
    const page = this.props.data.contentfulPage
    const callout = this.props.data.contentfulCallout
    const options = {
      renderNode: {
         [BLOCKS.EMBEDDED_ENTRY]: (node, children) => <CalloutSide><p className="section-heading">{callout.title}</p>{documentToReactComponents(callout.content.json, options)}</CalloutSide>,
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
    contentfulCallout {
      title
      content {
        json
      }
    }    
  }
`