import React from "react";
import { graphql, Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import { GatsbyImage } from "gatsby-plugin-image";

const Wrapper = styled.div`
  padding: 5em 0;

  @media (max-width: 768px) {
    padding: 3em 0;
  }

  @media (max-width: 480px) {
    padding: 2em 0;
  }
`;

const Inner = styled.div`
  width: 80%;
  margin: 0 auto;

  @media (min-width: 577px) and (max-width: 1024px) {
    /* Styles for tablets (portrait) */
    width: 90%;
  }
`;

const HintText = styled.h3`
  font-family: "FontAwesome";
  font-size: 1.25rem;
  font-weight: lighter;
  color: #ff3131;
  display: flex;
  justify-content: center;
  margin-bottom: 0;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const TitleSection = styled.div`
  padding-top: 0;
  margin-top: 0;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 3.25rem;
  color: #333;
  padding-top: 0;
  margin-top: 0;
  margin-bottom: 0;
  font-family: "Ibmplex";

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const BottomBorder = styled.div`
  width: 10%;
  margin: 6px 0px;
  border-bottom: 3.5px solid #ff3131;

  @media (max-width: 480px) {
    width: 20%;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
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
    /* justify-content: center; */
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 2em 0 0 0;
  }
`;

const CardContainer = styled.div`
  flex-basis: 27.5%;
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
  background: rgb(225, 225, 225);
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
  padding: 0.5em 0.5em;
  box-sizing: border-box;
  overflow: hidden;
`;

const CardImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
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
    padding: 1em 0;
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

const ArrowIcon = styled(FiArrowRight)`
  color: #ff3131;
  font-size: 1.5rem;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const ProductsLinkContainer = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

const ProductsLinkInner = styled.span`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  &:hover ${ArrowIcon} {
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
  }
`;

const ProductsLinkText = styled.p`
  font-family: "FontAwesome";
  font-size: 1.1rem;
  font-weight: lighter;
  color: #ff3131;
  display: flex;
  align-items: center;
  margin: 0;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

function TopProducts({ slice }) {
  return (
    <Wrapper>
      <Inner>
        <HintText>{RichText.asText(slice.primary.hint.richText)}</HintText>
        <TitleSection>
          <Title>{RichText.asText(slice.primary.section_title.richText)}</Title>
          <BottomBorder />
        </TitleSection>
        <CardsWrapper>
          {slice.items.map((item, index) => {
            return (
              <CardContainer key={`top-product-${index}`}>
                <Link
                  to={item.product_details_link.url}
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
        <ProductsLinkContainer>
          <Link
            to={slice.primary.products_link.url}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ProductsLinkInner>
              <ProductsLinkText>
                {RichText.asText(slice.primary.browse_title.richText)}
              </ProductsLinkText>
              <ArrowIcon />
            </ProductsLinkInner>
          </Link>
        </ProductsLinkContainer>
      </Inner>
    </Wrapper>
  );
}

export default TopProducts;

export const query = graphql`
  fragment HomepageDataBodyTopProducts on PrismicHomepageDataBodyTopProducts {
    primary {
      hint {
        richText
      }
      section_title {
        richText
      }
      browse_title {
        richText
      }
      products_link {
        url
      }
    }
    items {
      product_title {
        richText
      }
      productimage {
        gatsbyImageData
      }
      product_description {
        richText
      }
      product_details_link {
        url
      }
    }
  }
`;
