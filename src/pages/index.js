import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <>
    {data.allContentfulBlogPost.edges.map(({ node }) => (
      {node.title}
    ))}
    </>
  )
}

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          title
        }
      }
    }
  }
`
