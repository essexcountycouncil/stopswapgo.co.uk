import React from 'react'
import * as PropTypes from "prop-types"
import Link from 'gatsby-link'
import Layout from "../layout/page"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const propTypes = {
    data: PropTypes.object.isRequired,
}

class Page extends React.Component {
  render() {
    const page = this.props.data.contentfulPage
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

export default Page

export const pageQuery = graphql`
    query pageQuery( $id : String! ) {
        contentfulPage( id: { eq: $id } ) {
            id
            title
            content {
                json
            }
        }
    }
`