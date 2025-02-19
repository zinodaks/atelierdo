import React from "react";
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { GiCheckMark } from "react-icons/gi";

const Wrapper = styled.div`
  padding: 5em 0em 2em;
`;

const Inner = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (min-width: 577px) and (max-width: 1024px) {
    /* Styles for tablets (portrait) */
    width: 90%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  @media (min-width: 769px) {
    margin-right: 2em;
    max-height: 425px;
  }
`;

const Image = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

const Container = styled.div`
  flex: 0.9;
`;

const ProductTitle = styled.h1`
  font-family: "Ibmplex";
`;

const ProductDescription = styled.p`
  font-family: "Saira";
`;

const IngredientsWrapper = styled.div``;

const Title = styled.h2`
  font-family: "Ibmplex";
`;

const IngredientsList = styled.ul`
  list-style: none;
  padding-left: 0;

  @media (min-width: 769px) {
    columns: 3;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1rem;

  svg {
    font-size: 1.25rem;
    color: #e92b2b;
  }
`;

const ListText = styled.p`
  margin-left: 1em;
  font-family: "Saira";
`;

function ImageAndIngredients({ slice }) {
  return (
    <Wrapper>
      <Inner>
        <ImageContainer>
          <Image image={slice.primary.product_image.gatsbyImageData} />
        </ImageContainer>
        <Container>
          <ProductTitle>
            {RichText.asText(slice.primary.product_title.richText)}
          </ProductTitle>
          <ProductDescription>
            {RichText.asText(slice.primary.product_description.richText)}
          </ProductDescription>
          <IngredientsWrapper>
            <Title>
              {RichText.asText(slice.primary.ingredients_title.richText)}
            </Title>
            <IngredientsList>
              {slice.items.map((item, index) => {
                return (
                  <ListItem key={`list-item-${index}`}>
                    <GiCheckMark />
                    <ListText>
                      {RichText.asText(item.list_text.richText)}
                    </ListText>
                  </ListItem>
                );
              })}
            </IngredientsList>
          </IngredientsWrapper>
        </Container>
      </Inner>
    </Wrapper>
  );
}

export default ImageAndIngredients;

export const query = graphql`
  fragment ProductsdetailsDataBodyImageanddescription on PrismicProductsdetailsDataBodyImageanddescription {
    primary {
      product_title {
        richText
      }
      product_description {
        richText
      }
      ingredients_title {
        richText
      }
      product_image {
        gatsbyImageData
      }
    }
    items {
      list_text {
        richText
      }
    }
  }
`;
