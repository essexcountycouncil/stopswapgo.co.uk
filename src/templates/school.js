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
    const page = this.props.data.contentfulSchool
    return (
      <div>
        <Layout>
          <h1>{page.title}</h1>
          {documentToReactComponents(page.content.json)}
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
        }
    }
`