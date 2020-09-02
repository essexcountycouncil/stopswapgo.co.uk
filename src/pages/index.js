import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/layout"

export default function About({ data }) {
  return (
    <Layout>
      <h1>About {data.allContentfulBlogPost.title}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
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