import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../layout/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"



const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulPage {
        title
        body {
          json
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>{data.contentfulPage.title}</h1>
      {documentToReactComponents(data.contentfulPage.body.json)}
    </Layout>
      
  )
}

export default IndexPage
