import React from "react";
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import SliceZone from "../components/SliceZone";
import PageHeader from "../components/shared/pageheader";

function ProductDetailsPage({ data, location }) {
  return (
    <>
      <PageHeader
        title={RichText.asText(
          data.prismicProductsdetails.data.page_title.richText
        )}
        path={location.pathname}
      />
      <SliceZone slices={data.prismicProductsdetails.data.body} />
    </>
  );
}

export default ProductDetailsPage;

export const query = graphql`
  query productsDetailsQuery($id: String, $lang: String) {
    prismicProductsdetails(id: { eq: $id }, lang: { eq: $lang }) {
      data {
        page_title {
          richText
        }
        body {
          ... on PrismicSlice {
            id
            slice_label
            slice_type
          }
          ...ProductsdetailsDataBodyImageanddescription
          ...ProductsdetailsDataBodyDescription
          ...ProductsdetailsDataBodyNutrients
        }
      }
    }
    allPrismicNavbar(filter: { lang: { eq: $lang } }) {
      nodes {
        data {
          navbar_menu_items {
            navbar_link_label {
              richText
            }
            navbar_link_url {
              id
              type
              lang
              url
            }
          }
        }
      }
    }
    allPrismicFooter(filter: { lang: { eq: $lang } }) {
      nodes {
        lang
        alternate_languages {
          lang
        }
        data {
          footer_title {
            richText
          }
          footer_description {
            richText
          }
          contact_title {
            richText
          }
          phone_number {
            richText
          }
          email {
            richText
          }
          address {
            richText
          }
          menu_title {
            richText
          }
          home_link {
            url
            slug
          }
          products_link {
            url
            slug
          }
          contact_link {
            url
            slug
          }
          copyright_text {
            richText
          }
          developer_contacts {
            richText
          }
        }
      }
    }
  }
`;
