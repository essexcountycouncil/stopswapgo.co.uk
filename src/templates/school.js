import React from 'react'
import { graphql } from "gatsby"
import * as PropTypes from "prop-types"
import Link from 'gatsby-link'
import Layout from "../layout/sub-page-with-newsletter"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const propTypes = {
    data: PropTypes.object.isRequired,
}

class School extends React.Component {
  render() {
    const school = this.props.data.contentfulSchool
    return (
      <div>
        <Layout>
          <nav className="breadcrumbs" aria-label="breadcrumbs">
            <ol>
              <li><a href={`../${school.townOrCity.slug}`}>Schools in {school.townOrCity.title}</a></li>
              <li>{school.title}</li>
            </ol>
          </nav>      
          <h1>{school.title}</h1>
          <img src={`${school.image.file.url}`} title={`${school.image.title}`} alt={`${school.image.description}`} />
          {documentToReactComponents(school.content.json)}
        </Layout>
      </div>
    )
  }
}

export default School

export const schoolQuery = graphql`
  query schoolQuery( $id : String! ) {
    contentfulSchool( id: { eq: $id } ) {
      id
      title
      content {
        json
      }
      image {
        title
        description
        file {
          url
        }
      }
      townOrCity {
        title
        slug
      }
    }
  }
`