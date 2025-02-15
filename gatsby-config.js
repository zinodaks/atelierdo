/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `do`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/logo-removedbg.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: `atelierdo`,
        accessToken: `Z6gVBxIAACUAPyUo`,
        linkResolver: require("./src/utils/linkResolver").linkResolver,
        lang: "*",
        schemas: {
          navbar: require("./custom_types/navbar.json"),
          footer: require("./custom_types/footer.json"),
          homepage: require("./custom_types/homepage.json"),
          productspage: require("./custom_types/productspage.json"),
          productsdetails: require("./custom_types/productsdetails.json"),
          contactpage: require("./custom_types/contactpage.json"),
        },
      },
    },
  ],
};
