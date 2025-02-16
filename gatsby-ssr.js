import React from "react";
import Layout from "./src/components/layout/layout.js";

import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews";

import linkResolver from "./src/utils/linkResolver";

import HomePage from "./src/templates/HomePage";
import ProductsPage from "./src/templates/ProductsPage";
import ProductDetailsPage from "./src/templates/ProductDetailsPage";
import ContactPage from "./src/templates/ContactPage";

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

const componentResolverFromMap = (sliceType) => {
  const map = {
    homepage: HomePage,
    productspage: ProductsPage,
    contactpage: ContactPage,
    productdetailspage: ProductDetailsPage,
  };

  return map[sliceType] || null; // Return null if no match found
};

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider
    repositoryConfigs={[
      {
        repositoryName: `atelierdo`,
        linkResolver,
        componentResolver: componentResolverFromMap,
      },
    ]}
  >
    {element}
  </PrismicPreviewProvider>
);
