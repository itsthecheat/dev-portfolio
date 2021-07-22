
module.exports = {
  plugins: [
   {
     resolve: `gatsby-plugin-layout`,
     options: {
       component: require.resolve(`./src/components/Layout`),
     },
   },
   {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "Leslie Behum",
      short_name: "LB",
      start_url: "/",
      background_color: "#000000",
      theme_color: "#000000",
      // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
      // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
      display: "standalone",
      icon: "./src/images/logo_slash.png", // This path is relative to the root of the site.
      // An optional attribute which provides support for CORS check.
      // If you do not provide a crossOrigin option, it will skip CORS for manifest.
      // Any invalid keyword or empty string defaults to `anonymous`
      crossOrigin: `use-credentials`,
  },
    },
  `gatsby-plugin-preload-fonts`,
   `gatsby-plugin-image`,
   `gatsby-transformer-sharp`,
   `gatsby-plugin-sharp`,
   `gatsby-transformer-remark`,
   `gatsby-transformer-yaml`,
   `gatsby-plugin-react-helmet`,
   {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `data`,
    path: `${__dirname}/src/content`,
  },
},
{
resolve: `gatsby-source-filesystem`,
options: {
 name: `img`,
 path: `${__dirname}/src/images`,
},
},
 ],
 siteMetadata: {
  title: `Leslie Behum | Web Developer in NYC`,
  siteUrl: `http://www.lesliethe.dev`,
  description: `Web Developer based in Brooklyn, NY`,
},
}
