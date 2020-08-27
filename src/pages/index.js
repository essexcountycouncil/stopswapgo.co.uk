import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost {
        edges {
          node {
            title
          }
        }
      }
    }
  `)
  return (
    <>
      {data.allContentfulBlogPost.edges.map({ node }) => (
      )}
    </>
  )
}

export default ComponentName
