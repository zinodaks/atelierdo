import React from "react";
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import ProgressBar from "@ramonak/react-progress-bar";

const Wrapper = styled.div`
  margin: 0em 0em 4em;
`;

const Inner = styled.div`
  width: 80%;
  margin: 0 auto;

  @media (min-width: 577px) and (max-width: 1024px) {
    /* Styles for tablets (portrait) */
    width: 90%;
  }
`;

const Title = styled.h2`
  font-family: "Ibmplex";
`;

const TableWrapper = styled.div``;

const NutrientsTable = styled.table`
  width: 50%;
  padding: 2em 1em;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1100px) {
    width: 80%;
  }
`;

const TitlesRow = styled.tr``;

const TitlesData = styled.td`
  font-weight: bold;
  font-family: "Ibmplex";
`;

const ContentRow = styled.tr`
  font-family: "Play";
  color: rgb(155, 155, 155);
`;

const NutrientData = styled.td``;

const ContentData = styled.td``;

const ProgressData = styled.td`
  width: 50%;

  @media (max-width: 768px) {
    width: 25%;
  }
`;

function Nutrients({ slice }) {
  return (
    <Wrapper>
      <Inner>
        <Title>{RichText.asText(slice.primary.nutrients_title.richText)}</Title>
        <TableWrapper>
          <NutrientsTable>
            <TitlesRow>
              <TitlesData>
                {RichText.asText(slice.primary.title_data.richText)}
              </TitlesData>
              <TitlesData>
                {RichText.asText(slice.primary.title_data_2.richText)}
              </TitlesData>
              <TitlesData>
                {RichText.asText(slice.primary.title_data_3.richText)}
              </TitlesData>
            </TitlesRow>
            {slice.items.map((item, index) => {
              return (
                <ContentRow key={`content-row-${index}`}>
                  <NutrientData>
                    {RichText.asText(item.nutrient_name.richText)}
                  </NutrientData>
                  <ContentData>
                    {RichText.asText(item.content_quantity.richText)}
                  </ContentData>
                  <ProgressData>
                    <ProgressBar
                      completed={Number(
                        RichText.asText(item.progress_amount.richText)
                      )}
                      height={"10px"}
                      borderRadius={0}
                      bgColor="#ff3131"
                      customLabel={"\n"}
                    />
                  </ProgressData>
                </ContentRow>
              );
            })}
          </NutrientsTable>
        </TableWrapper>
      </Inner>
    </Wrapper>
  );
}

export default Nutrients;

export const query = graphql`
  fragment ProductsdetailsDataBodyNutrients on PrismicProductsdetailsDataBodyNutrients {
    primary {
      nutrients_title {
        richText
      }
      title_data {
        richText
      }
      title_data_2 {
        richText
      }
      title_data_3 {
        richText
      }
    }
    items {
      nutrient_name {
        richText
      }
      content_quantity {
        richText
      }
      progress_amount {
        richText
      }
    }
  }
`;
