import React from "react";
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import SliceZone from "../components/SliceZone";
import PageHeader from "../components/shared/pageheader";

function ProductsPage({ data }) {
  return (
    <>
      <PageHeader
        title={RichText.asText(
          data.prismicProductspage.data.products_title.richText
        )}
      />
      <SliceZone slices={data.prismicProductspage.data.body} />
    </>
  );
}

export default ProductsPage;

export const query = graphql`
  query productsPageQuery($id: String, $lang: String) {
    prismicProductspage(id: { eq: $id }, lang: { eq: $lang }) {
      data {
        products_title {
          richText
        }
        body {
          ... on PrismicSlice {
            id
            slice_label
            slice_type
          }
          ...ProductspageDataBodyProductsgrid
          ...ProductspageDataBodyFindUs
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
