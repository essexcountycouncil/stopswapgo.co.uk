import React from 'react'
import * as PropTypes from "prop-types"
import Link from 'gatsby-link'
import Layout from "../layout/page"
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
          <h1>{school.title}</h1>
          <img src={`${school.image.fluid.src}`} title={`${school.image.title}`} alt={`${school.image.description}`} />
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
        fluid {
          src
        }
      }
    }
  }
`