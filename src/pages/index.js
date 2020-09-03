import React from "react"
import { useStaticQuery, graphql } from "gatsby"



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
      <h1>{data.contentfulPage.title}</h1>
      
  )
}

export default ComponentName
