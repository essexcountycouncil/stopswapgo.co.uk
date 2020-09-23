import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Link from 'gatsby-link'
import Layout from "../../layout/page"
import * as urlSlug from 'url-slug'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Routes = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulRoutes {
        title
        content {
          json
        }
      }
      allContentfulTownOrCity {
        edges {
          node {
            title
            slug                
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>{data.contentfulRoutes.title}</h1>
      {documentToReactComponents(data.contentfulRoutes.content.json)}
      <ul>
      {data.allContentfulTownOrCity.edges.map(({ node }) => (
        <div>
        <li><Link to={`${node.slug}`}>{node.title}</Link></li>
        </div>
      ))}

      </ul>
    </Layout>
  )
}

export default Routes