exports.linkResolver = (doc) => {
  let langId = doc.lang.split("-")[0];
  switch (doc.type) {
    case "homepage": {
      return doc.lang === "en-us" ? `/` : `/${langId}/`;
    }
    case "productspage": {
      return doc.lang === "en-us" ? `/products/` : `/${langId}/products/`;
    }
    case "productsdetails": {
      return doc.lang === "en-us"
        ? `/products/${doc.uid}`
        : `/${langId}/products/${doc.uid}`;
    }
    case "contactpage": {
      return doc.lang === "en-us" ? `/contact/` : `/${langId}/contact/`;
    }

    default: {
      return `/en`;
    }
  }
};
