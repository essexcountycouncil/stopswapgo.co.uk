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
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const townOrCityTemplate = path.resolve(`./src/templates/town-or-city.js`)

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
          allContentfulTownOrCity {
            edges {
              node {
                id
                title
                slug
              }
            }
          }                   
        }              
    `).then(result => {
      if (result.errors) {
        Promise.reject(result.errors);
      }

      _.each(result.data.allContentfulPage.edges, edge => {
        createPage({
          path: `/${slugify(edge.node.title, slugifyOptions)}/`,
          component: pageTemplate,
          context: {id: edge.node.id},
        });
      });

      _.each(result.data.allContentfulTownOrCity.edges, edge => {
        createPage({
          path: `/getting-to-school/routes/${slugify(edge.node.slug, slugifyOptions)}/`,
          component: townOrCityTemplate,
          context: {
            id: edge.node.id,
            slug: edge.node.slug
          },
        });
      });

    });
    resolve()
  });
};

const axios = require('axios');
const crypto = require('crypto');
