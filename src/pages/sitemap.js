import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Link from 'gatsby-link'
import Layout from "../layout/page"

class Sitemap extends React.Component {
  render() {
    const sitemap = this.props.data.allSitePage
    return (
      <Layout>
        <h1>Sitemap</h1>
        <ul>
        {sitemap.edges.map(({ node }) => (
          <div>
          <li><Link to={`${node.path}`}>{node.path}</Link></li>
          </div>
        ))}
        </ul>      
      </Layout>
    )
  }
}

export default Sitemap

export const sitemapQuery = graphql`
  query sitemapQuery {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`