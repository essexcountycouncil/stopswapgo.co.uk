import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../layout/about-layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"



const AboutUs = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulPage {
        title
        body {
          json
        }
      }
      contentfulBlockquote {
        author
        quote {
          quote
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>{data.contentfulPage.title}</h1>
      {documentToReactComponents(data.contentfulPage.body.json)}
      <blockquote className="blockquote" cite="">
        <p>{data.contentfulBlockquote.quote.quote}</p>
        <cite className="cite">– {data.contentfulBlockquote.author}</cite>
      </blockquote>
    </Layout>
      
  )
}

export default AboutUs
