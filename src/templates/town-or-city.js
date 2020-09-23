import React from 'react'
import * as PropTypes from "prop-types"
import Link from 'gatsby-link'
import Layout from "../layout/page"


const propTypes = {
    data: PropTypes.object.isRequired,
}

class TownOrCity extends React.Component {
  render() {
    const school = this.props.data.allContentfulSchool.edges
    const city = this.props.data.contentfulTownOrCity
    return (
      <div>
        <Layout>
          <h1>Schools in {city.title}</h1>
          <ul>
          {school.map(({ node }) => (
            <div>
            <li><Link to={`${node.slug}`}>{node.title}</Link></li>
            </div>
          ))}
          </ul>          
        </Layout>
      </div>
    )
  }
}

export default TownOrCity

export const townOrCityQuery = graphql`
    query townOrCityQuery($slug: String!, $id: String!) {
      contentfulTownOrCity(id: {eq: $id}) {
        id
        title
        slug
      }
      allContentfulSchool(filter: {townOrCity: {slug: {eq: $slug}}}) {
        edges {
          node {
            title
            slug
            townOrCity {              
              title
              slug
            }
          }
        }
      }
    }    
`