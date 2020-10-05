import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Link from 'gatsby-link'
import Layout from "../../layout/sub-page"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Prepare = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulPrepare {
        title
        content {
          json
        }
        callout {
        	json
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>{data.contentfulPrepare.title}</h1>
      {documentToReactComponents(data.contentfulPrepare.content.json)}
      <div className="callout callout-middle">
	      {documentToReactComponents(data.contentfulPrepare.callout.json)}
      </div>
    </Layout>
  )
}

export default Prepare