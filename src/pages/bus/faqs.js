import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../layout/bus/page"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const BusFAQPage = () => {
  const data = useStaticQuery(graphql`
  {
    contentfulBusFaQs {
      banner {
        file {
          url
        }
        title
        description
      }
      content {
        json
      }
    }
  }
  `);

  return (
    <div>
      <Layout bannerUrl={data.contentfulBusFaQs.banner.file.url}>
        {documentToReactComponents(data.contentfulBusFaQs.content.json)}
      </Layout>
    </div>
  )
}

export default BusFAQPage
