import React from 'react'
import { graphql } from "gatsby"
import Link from 'gatsby-link'
import Layout from "../layout/page"
import * as urlSlug from 'url-slug'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const TownOrCity = () => {
  const data = query(graphql`
    query ($slug: String!) {
      allContentfulSchool(filter: {townOrCity: {slug: {eq: $slug}}}) {
        edges {
          node {
            title
            slug
            townOrCity {              
              title
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>Schools in </h1>
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

export default TownOrCity