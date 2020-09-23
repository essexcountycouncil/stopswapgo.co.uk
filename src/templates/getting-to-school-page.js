import React from 'react'
import { graphql } from "gatsby"
import * as PropTypes from "prop-types"
import Link from 'gatsby-link'
import Layout from "../layout/sub-page"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const propTypes = {
    data: PropTypes.object.isRequired,
}

class GettingToSchool extends React.Component {
  render() {
    const gettingToSchool = this.props.data.contentfulGettingToSchool
    return (
      <div>
        <Layout>
          <h1>{gettingToSchool.title}</h1>
          {documentToReactComponents(gettingToSchool.content.json)}
        </Layout>
      </div>
    )
  }
}

export default GettingToSchool

export const gettingToSchoolQuery = graphql`
  query gettingToSchoolQuery( $id : String! ) {
    contentfulGettingToSchool( id: { eq: $id } ) {
      id
      title
      content {
        json
      }
    }
  }
`