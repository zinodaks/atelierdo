import React from "react";
import { navigate } from "gatsby";
import Layout from "./src/components/layout/layout.js";

import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews";

import linkResolver from "./src/utils/linkResolver";

import HomePage from "./src/templates/HomePage";
import ProductsPage from "./src/templates/ProductsPage";
import ProductDetailsPage from "./src/templates/ProductDetailsPage";
import ContactPage from "./src/templates/ContactPage";

if (typeof window !== "undefined") {
  // This ensures the code runs only on the client side
  require("leaflet/dist/leaflet.css");
}

export const onInitialClientRender = () => {
  //redirect current link to preferred language
  function getPreferredLanguageFromCookie() {
    const cookieName = "preferredLang";

    var match = document.cookie.match(
      RegExp("(?:^|;\\s*)" + cookieName + "=([^;]*)")
    );

    const preferredLang = match
      ? match[1] === "en-us" || match[1] === "fr-fr"
        ? match[1]
        : null
      : null;

    return preferredLang;
  }

  if (typeof window !== "undefined") {
    let preferredLang = getPreferredLanguageFromCookie();
    if (preferredLang) {
      preferredLang = preferredLang.split("-")[0];
      const { pathname } = window.location;
      const splitPathname = pathname.split("/fr");

      if (preferredLang === "fr") {
        if (splitPathname.length > 1) return;
        else navigate(`/fr${pathname}`);
      } else if (preferredLang === "en") {
        if (splitPathname.length > 1)
          navigate(splitPathname[1] ? splitPathname[1] : "/");
        else return;
      }
    }
  }
};

export const wrapPageElement = ({ element, props }) => {
  if (element.key === "/dev-404-page/" || element.key === "/sitemap")
    return element;
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
