import React from 'react'
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { graphql } from "gatsby"
import * as PropTypes from "prop-types"
import Link from 'gatsby-link'
import Layout from "../layout/sub-page"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


const propTypes = {
    data: PropTypes.object.isRequired,
}

class GettingToSchool extends React.Component {
  render() {
    const gettingToSchool = this.props.data.contentfulGettingToSchool
    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ENTRY]: (node) => {
          return <div className="callout callout-middle">
            <p className="section-heading">{node.data.target.fields.title['en-US']}</p>
            {node.data.target.fields.content['en-US']}
          </div>
        },

        [INLINES.EMBEDDED_ENTRY]: (node) => {
          return <div className="callout callout-side">
            <p className="section-heading">{node.data.target.fields.title['en-US']}</p>
            {node.data.target.fields.content['en-US']}
          </div>
        },
      },  
    }    
    return (
      <div>
        <Layout>
          <h1>{gettingToSchool.title}</h1>
          {documentToReactComponents(gettingToSchool.content.json, options)}
        </Layout>
      </div>
    )
  }
}

export default GettingToSchool

export const gettingToSchoolQuery = graphql`
  query gettingToSchoolQuery( $id : String! ) {
    contentfulGettingToSchool( id: { eq: $id } ) {
      id
      title
      content {
        json
      }     
    }    
  }
`