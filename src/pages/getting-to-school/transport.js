import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Link from 'gatsby-link'
import Layout from "../../layout/sub-page"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Transport = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulTransport {
        title
        content {
          json
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>{data.contentfulTransport.title}</h1>
      {documentToReactComponents(data.contentfulTransport.content.json)}
    </Layout>
  )
}

export default Transport