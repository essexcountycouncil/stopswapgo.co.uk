import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Link from 'gatsby-link'
import Layout from "../layout/page"
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
      allContentfulSchool {
        edges {
          node {
            title 
            townOrCity
            slug
            fields {
              postSlug 
            }            
          }
        }
      }
      contentfulSchool {
        townOrCity
      }     
    }
  `)
  return (
    <Layout>
      <h1>Schools in {data.contentfulSchool.townOrCity}</h1>
      <ul>
      {data.allContentfulSchool.edges.map(({ node }) => (
        <div>
        <li><Link to={`${node.slug}`}>{node.title}</Link></li>
        </div>
      ))}

      </ul>
    </Layout>
  )
}

export default Routes