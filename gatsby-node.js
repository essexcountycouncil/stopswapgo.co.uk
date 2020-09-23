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
  const gettingToSchoolTemplate = path.resolve(`./src/templates/getting-to-school-page.js`)
  const townOrCityTemplate = path.resolve(`./src/templates/town-or-city.js`)
  const schoolTemplate = path.resolve(`./src/templates/school.js`)

  return new Promise((resolve, reject) => {
      // We'll do most of our work here
      graphql(
        `
        {
          allContentfulPage {
            edges {
              node {
                id
                title
                slug
              }
            }
          }
          allContentfulGettingToSchool {
            edges {
              node {
                id
                title
                slug
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
          allContentfulSchool {
            edges {
              node {
                id
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
    `).then(result => {
      if (result.errors) {
        Promise.reject(result.errors);
      }

      _.each(result.data.allContentfulPage.edges, edge => {
        createPage({
          path: `/${edge.node.slug}/`,
          component: pageTemplate,
          context: {id: edge.node.id},
        });
      });

      _.each(result.data.allContentfulGettingToSchool.edges, edge => {
        createPage({
          path: `/getting-to-school/${edge.node.slug}/`,
          component: gettingToSchoolTemplate,
          context: {id: edge.node.id},
        });
      });      

      _.each(result.data.allContentfulTownOrCity.edges, edge => {
        createPage({
          path: `/getting-to-school/routes/${edge.node.slug}/`,
          component: townOrCityTemplate,
          context: {
            id: edge.node.id,
            slug: edge.node.slug
          },
        });
      });

      _.each(result.data.allContentfulSchool.edges, edge => {
        createPage({
          path: `/getting-to-school/routes/${edge.node.townOrCity.slug}/${edge.node.slug}/`,
          component: schoolTemplate,
          context: {
            id: edge.node.id
          },
        });
      });      

    });
    resolve()
  });
};

const axios = require('axios');
const crypto = require('crypto');
