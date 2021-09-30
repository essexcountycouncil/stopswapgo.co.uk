import React from 'react'
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { graphql } from "gatsby"
import * as PropTypes from "prop-types"
import Link from 'gatsby-link'
import Layout from "../../layout/sub-page-with-newsletter"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const propTypes = {
    data: PropTypes.object.isRequired,
}

class Routes extends React.Component {
  render() {
    const routes = this.props.data.contentfulRoutes
    const townOrcity = this.props.data.allContentfulTownOrCity
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
          <h1>{routes.title}</h1>
          {documentToReactComponents(routes.content.json, options)}
          <ul>
          {townOrcity.edges.map(({ node }) => (
            <div>
            <li><Link to={`${node.slug}`}>{node.title}</Link></li>
            </div>
          ))}

          </ul>
        </Layout>
      </div>
    )
  }
}

export default Routes

export const routesQuery = graphql`
  query routesQuery {
    contentfulRoutes(slug: { eq: "routes" }) {
      title
      content {
        json
      }
    }
    allContentfulTownOrCity(sort: {fields: [title], order: ASC}) {
      edges {
        node {
          title
          slug                
        }
      }
    }
  }
`