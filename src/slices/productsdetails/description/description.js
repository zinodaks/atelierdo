import React from "react";
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const Wrapper = styled.div``;

const Inner = styled.div`
  width: 80%;
  margin: 0 auto;

  @media (min-width: 577px) and (max-width: 1024px) {
    width: 90%;
  }
`;

const Title = styled.h2`
  font-family: "Ibmplex";
`;

const Text = styled.p`
  width: 60%;
  font-family: "Saira";

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1100px) {
    width: 80%;
  }
`;

function Description({ slice }) {
  return (
    <Wrapper>
      <Inner>
        <Title>
          {RichText.asText(slice.primary.description_title.richText)}
        </Title>
        {slice.items.map((item, index) => {
          return (
            <Text key={`description-text-${index}`}>
              {RichText.asText(item.description_text.richText)}
            </Text>
          );
        })}
      </Inner>
    </Wrapper>
  );
}

export default Description;

export const query = graphql`
  fragment ProductsdetailsDataBodyDescription on PrismicProductsdetailsDataBodyDescription {
    primary {
      description_title {
        richText
      }
    }
    items {
      description_text {
        richText
      }
    }
  }
`;
