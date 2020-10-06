import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const SignUp = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulCallToAction {
        title
        titleItalic
        content {
          json
        }
        buttonLabel
        buttonUrl
      }
    }  
    `)
  return (
    <section className="signup-background" aria-label="Subscribe to email" id="challenge">
      <div className="signup">
        <div className="mantra">
          <h2 className="strapline"><span>{data.contentfulCallToAction.title}</span><i>{data.contentfulCallToAction.titleItalic}</i></h2>
          {documentToReactComponents(data.contentfulCallToAction.content.json)}
        </div>
        <div className="button-container-middle">
          <Link to={data.contentfulCallToAction.buttonUrl} className="button button-dark button-large extra-space">{data.contentfulCallToAction.buttonLabel}</Link>
        </div>
      </div>
    </section>
  )
}

export default SignUp