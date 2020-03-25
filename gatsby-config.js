/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
   {
     resolve: `gatsby-plugin-layout`,
     options: {
       component: require.resolve(`./src/components/layout`),
     },
   },
   `gatsby-plugin-styled-components`,
   `gatsby-transformer-sharp`,
   `gatsby-plugin-sharp`,
   `gatsby-transformer-remark`,
   {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `src`,
    path: `${__dirname}/src/`,
  },
},
 ],
 siteMetadata: {
  title: `Leslie Behum`,
  siteUrl: `http://www.lesliethe.dev`,
  description: `Web Developer based in Brooklyn, NY`,
},
}
