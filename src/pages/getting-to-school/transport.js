import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Link from 'gatsby-link'
import Layout from "../../layout/sub-page-with-newsletter"
import SignupTraining from "../../components/signup-training/signup-training"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Transport = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulTransport {
        title
        content {
          json
        }
        video {
          file {
            url
          }
        }
        furtherContent {
          json
        }      
      }
    }
  `)
  return (
    <Layout>
      <h1>{data.contentfulTransport.title}</h1>
      {documentToReactComponents(data.contentfulTransport.content.json)}
      <video className="video" controls>
        <source src={data.contentfulTransport.video.file.url} type="video/mp4" />
      </video>
      {documentToReactComponents(data.contentfulTransport.furtherContent.json)}
      <SignupTraining></SignupTraining>
    </Layout>
  )
}

export default Transport