import React, { useEffect, useContext } from "react";
import { graphql } from "gatsby";
import SliceZone from "../components/SliceZone";
import { NavbarContext } from "../components/layout/NavbarContext";

function ContactPage({ data }) {
  const setIsPermanent = useContext(NavbarContext);

  useEffect(() => {
    setIsPermanent(true);
    return () => {
      setIsPermanent(false);
    };
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <SliceZone slices={data.prismicContactpage.data.body} />
    </>
  );
}

export default ContactPage;

export const query = graphql`
  query contactPageQuery($id: String, $lang: String) {
    prismicContactpage(id: { eq: $id }, lang: { eq: $lang }) {
      data {
        body {
          ... on PrismicSlice {
            id
            slice_label
            slice_type
          }
          ...ContactpageDataBodyContactForm
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
