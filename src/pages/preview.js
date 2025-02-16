import * as React from "react";
import { withPrismicPreviewResolver } from "gatsby-plugin-prismic-previews";
import { linkResolver } from "../utils/linkResolver";

const PreviewPage = () => {

  if (typeof window === "undefined") {
    return null; // Prevents SSR from failing
  }
  
  return (
    <div>
      <h1>Loading preview…</h1>
    </div>
  );
};

export default withPrismicPreviewResolver(PreviewPage, [
  {
    repositoryName: "atelierdo",
    linkResolver,
  },
]);
