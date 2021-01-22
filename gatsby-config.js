/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-sass',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'files',
        path: `${__dirname}/src/markdown`
      }
    },

    'gatsby-transformer-remark'
  ],
  siteMetadata: {
    title: "Home",
    linkedinUsername: "https://in.linkedin.com/in/argha-boksi-b1b874198",
    instagramUsername: "https://www.instagram.com/argha__97/?hl=en",
    githubUsername: "https://github.com/arghaboksi"
  }
}

