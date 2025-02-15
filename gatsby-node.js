const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const queryData = await graphql(`
    {
      allPrismicHomepage {
        nodes {
          id
          lang
          url
        }
      }
      allPrismicContactpage {
        nodes {
          id
          lang
          url
        }
      }
      allPrismicProductspage {
        nodes {
          id
          lang
          url
        }
      }
      allPrismicProductsdetails {
        nodes {
          id
          lang
          url
        }
      }
    }
  `);

  //CREATE HOME PAGE
  queryData.data.allPrismicHomepage.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, "src/templates/HomePage.js"),
      context: {
        id: page.id,
        lang: page.lang,
      },
    });
  });

  //CREATE PRODUCTS PAGE
  queryData.data.allPrismicProductspage.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, "src/templates/ProductsPage.js"),
      context: {
        id: page.id,
        lang: page.lang,
      },
    });
  });

  //CREATE CONTACT PAGE
  queryData.data.allPrismicContactpage.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, "src/templates/ContactPage.js"),
      context: {
        id: page.id,
        lang: page.lang,
      },
    });
  });

  //CREATE PRODUCT DETAILS PAGES
  queryData.data.allPrismicProductsdetails.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, "src/templates/ProductDetailsPage.js"),
      context: {
        id: page.id,
        lang: page.lang,
        url: page.url,
      },
    });
  });
};
