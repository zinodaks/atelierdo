import React from "react";
import { graphql, Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Wrapper = styled.div``;

const Inner = styled.div`
  width: 80%;
  margin: 0 auto;

  @media (min-width: 577px) and (max-width: 1024px) {
    /* Styles for tablets (portrait) */
    width: 90%;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3em 0 0 0;
  gap: 1em;

  @media (min-width: 577px) and (max-width: 768px) {
    /* Styles for tablets (portrait) */
    flex-basis: 30%;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 2em 0 0 0;
  }
`;

const CardContainer = styled.div`
  flex-basis: 30%;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 14px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: box-shadow 0.2s ease-in-out;
  margin-bottom: 2.5em;

  &:hover {
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.12),
      0px 14px 20px rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }
  /* Mobile Phones */
  @media (max-width: 576px) {
    /* Styles for small mobile devices */
    flex-basis: 100%;
  }

  /* Tablets */
  @media (min-width: 577px) and (max-width: 1024px) {
    /* Styles for tablets (portrait) */
    flex-basis: 30%;
    justify-content: space-between;
  }
`;

const CardTop = styled.div`
  height: 12em;
  background-color: rgb(240, 240, 240);
  position: relative;
  @media (max-width: 768px) {
    height: 10em;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

const CardImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 10px 0px 0px 0px;
`;

const CardBottom = styled.div`
  width: 80%;
  margin: 0 auto;

  /* Tablets */
  @media (min-width: 577px) and (max-width: 768px) {
    /* Styles for tablets (portrait) */
    width: 90%;
  }

  @media (min-width: 999px) {
    padding: 0.5em 0 1em;
  }
`;

const CardTitle = styled.h3`
  margin-bottom: 0;
  font-family: "Ibmplex";
  font-size: 1.4rem;

  @media (max-width: 576px) {
    font-size: 1.2rem;
  }

  /* Tablets */
  @media (min-width: 577px) and (max-width: 768px) {
    /* Styles for tablets (portrait) */
    font-size: 1rem;
    width: 90%;
  }
`;

const CardDescription = styled.p`
  margin-top: 8px;
  font-family: "Play";
  font-size: 1.1rem;
  color: rgb(155, 155, 155);

  @media (max-width: 576px) {
    font-size: 1rem;
  }

  /* Tablets */
  @media (min-width: 577px) and (max-width: 768px) {
    /* Styles for tablets (portrait) */
    font-size: 0.75rem;
    width: 90%;
  }
`;

function ProductsGrid({ slice }) {
  return (
    <Wrapper>
      <Inner>
        <CardsWrapper>
          {slice.items.map((item, index) => {
            return (
              <CardContainer item={`card-container-${index}`}>
                <Link
                  to={item.product_details.url}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <CardTop>
                    <ImageWrapper>
                      <CardImage image={item.productimage.gatsbyImageData} />
                    </ImageWrapper>
                  </CardTop>
                  <CardBottom>
                    <CardTitle>
                      {RichText.asText(item.product_title.richText)}
                    </CardTitle>
                    <CardDescription>
                      {RichText.asText(item.product_description.richText)}
                    </CardDescription>
                  </CardBottom>
                </Link>
              </CardContainer>
            );
          })}
        </CardsWrapper>
      </Inner>
    </Wrapper>
  );
}

export default ProductsGrid;

export const query = graphql`
  fragment ProductspageDataBodyProductsgrid on PrismicProductspageDataBodyProductsgrid {
    items {
      product_title {
        richText
      }
      product_description {
        richText
      }
      productimage {
        gatsbyImageData
      }
      product_details {
        url
      }
    }
  }
`;
