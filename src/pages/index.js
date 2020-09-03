import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../layout/layout"



const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulPage {
        title
        contentful_id
        childContentfulPageBodyRichTextNode {
          json
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>{data.contentfulPage.title}</h1>
    </Layout>
      
  )
}

export default ComponentName
