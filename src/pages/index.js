import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../layout/page"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"



const IndexPage = () => {
  return (
    <Layout>
      <h1>Index page</h1>
    </Layout>
      
  )
}

export default IndexPage
