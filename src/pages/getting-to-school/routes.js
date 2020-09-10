import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Link from 'gatsby-link'
import Layout from "../../layout/page"
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
      allContentfulSchool {
        edges {
          node {
            title 
            townOrCity
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
      {data.allContentfulSchool.edges.map(({ node }) => (
        <>
        <li><Link to={`${node.townOrCity}/${node.slug}`}>{node.townOrCity}</Link></li>
        </>
      ))}

      </ul>
    </Layout>
  )
}

export default Routes