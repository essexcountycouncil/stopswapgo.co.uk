import React from 'react'
import { graphql } from "gatsby"
import Layout from "../layout/bus/page"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

class BusOperatorTemplate extends React.Component {
  render() {
    const page = this.props.data.contentfulBusOperatorSpecificPage;

    return (
      <div>
        <Layout bannerUrl={page.banner.file.url}>
          {documentToReactComponents(page.mainbody.json)}

          <section className="bus-ticket-information" style={{marginBottom: '50px'}}>
            {documentToReactComponents(page.spotlightText.json)}
            {page.instructions.file.url && (
              <img src={page.instructions.file.url} alt={page.instructions.description} />
            )}
            {documentToReactComponents(page.information.json)}
          </section>

          {documentToReactComponents(page.ticketAccess1?.json)}
        </Layout>
      </div>
    )
  }
}

export default BusOperatorTemplate

export const busOperatorQuery = graphql`
  query busOperatorPageQuery( $id : String! ) {
    contentfulBusOperatorSpecificPage( id: { eq: $id } ) {
      id
      title
      banner {
        file {
          url
        }
        title
        description
      }
      mainbody {
        json
      }
      spotlightText {
        json
      }
      instructions {
        file {
          url
        }
        title
        description
      }
      information {
        json
      }
      ticketAccess1 {
        json
      }
    }
  }
`