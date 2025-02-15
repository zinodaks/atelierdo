import React from "react";
import SliceZone from "../components/SliceZone";
import { graphql } from "gatsby";

function HomePage({ data }) {
  return (
    <>
      <SliceZone slices={data.prismicHomepage.data.body} />
    </>
  );
}

export default HomePage;

export const query = graphql`
  query homePageQuery($id: String, $lang: String) {
    prismicHomepage(id: { eq: $id }, lang: { eq: $lang }) {
      data {
        body {
          ... on PrismicSlice {
            id
            slice_label
            slice_type
          }
          ...HomepageDataBodyHero
          ...HomepageDataBodyAbout
          ...HomepageDataBodyHowitworks
          ...HomepageDataBodyTopProducts
          ...HomepageDataBodyContactus
          ...HomepageDataBodyTestimonials
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
