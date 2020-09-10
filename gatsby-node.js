const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// We'll need something for creating the slugs
const slugify = require(`slugify`)
const slugifyOptions = {
  replacement: '-',
  remove: /[$*_+~.()'"!\-:@]/g,
  lower: true
}

// We'll use Gatsby's createPage API for generating the pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
      // We'll do most of our work here
      graphql(
        `
        {
          allContentfulPage(limit: 1000) {
            edges {
              node {
                id
                title
              }
            }
          }
        }              
        `
        )
      .then(result => {
        if (result.errors) {
          reject(result.errors)
        }

          // We'll do the actual page creation here
          const pageTemplate = path.resolve(`./src/templates/page.js`)
          _.each(result.data.allContentfulPage.edges, edge => {
              // Here's the beef, seitan, or whatever rocks your boat:
              createPage({
                path: `/${slugify(edge.node.title, slugifyOptions)}/`,
                component: slash(pageTemplate),
                context: {
                  id: edge.node.id
                },
              })            
            })                

          resolve() // Resolve the promise
        })  
    })

}

const axios = require('axios');
const crypto = require('crypto');
