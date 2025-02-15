import React from "react";
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f7f7f7;
  padding: 5em 0;

  @media (max-width: 768px) {
    padding: 1em 0;
  }
`;

const Inner = styled.div`
  background-color: white;
  width: 70%;
  margin: 0 auto;
  padding: 1em 0;

  @media (min-width: 769px) and (max-width: 1100px) {
    width: 80%;
  }

  @media (max-width: 768px) {
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
`;

const BottomBorder = styled.div`
  width: 10%;
  margin: 2px;
  border-bottom: 3.5px solid #ff3131;

  @media (max-width: 768px) {
    width: 20%;
  }
`;

const Subtitle = styled.p`
  font-family: "Saira";
  color: rgb(155, 155, 155);
  display: flex;
  justify-content: center;
  font-size: 1.25rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5em;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2em;
  }
`;

const StepColumn = styled.div`
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 60%;
    margin-bottom: 1em;
  }
`;

const StepIcon = styled.img`
  max-width: 60px;
  max-height: 60px;

  @media (max-width: 768px) {
    max-width: 50px;
    max-height: 50px;
  }
`;

const StepTitle = styled.h3`
  margin-bottom: 0;
  margin-top: 0.5em;
  font-family: "Ibmplex";
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const StepDescription = styled.p`
  width: 75%;
  font-family: "Play";
  font-size: 1.25rem;
  color: rgb(155, 155, 155);
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 90%;
  }
`;

const StepUnion = styled.span``;

function HowItWorks({ slice }) {
  return (
    <Wrapper>
      <Inner>
        <HintText>{RichText.asText(slice.primary.hint.richText)}</HintText>
        <TitleSection>
          <Title>{RichText.asText(slice.primary.section_title.richText)}</Title>
          <BottomBorder />
        </TitleSection>
        <Subtitle>
          {RichText.asText(slice.primary.section_subtitle.richText)}
        </Subtitle>
        <StepsContainer>
          {slice.items.map((item, index) => {
            return (
              <StepColumn key={`step-column-${index}`}>
                <StepIcon src={item.step_icon.url} alt={""} />
                <StepTitle>
                  {RichText.asText(item.step_title.richText)}
                </StepTitle>
                <StepDescription>
                  {RichText.asText(item.step_description.richText)}
                </StepDescription>
              </StepColumn>
            );
          })}
        </StepsContainer>
      </Inner>
    </Wrapper>
  );
}

export default HowItWorks;

export const query = graphql`
  fragment HomepageDataBodyHowitworks on PrismicHomepageDataBodyHowitworks {
    primary {
      hint {
        richText
      }
      section_title {
        richText
      }
      section_subtitle {
        richText
      }
    }
    items {
      step_icon {
        url
      }
      step_title {
        richText
      }
      step_description {
        richText
      }
    }
  }
`;
