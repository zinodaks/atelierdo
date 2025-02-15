import React from "react";
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import TestimonialCard from "./testimonialcard";
import Cookie from "../../../assets/testimonials-cookie.png";

const Wrapper = styled.div`
  background-color: #f7f7f7;
  padding: 4em 0em;
  position: relative;
  @media (max-width: 768px) {
    padding: 1em 0;
  }
`;

const Inner = styled.div`
  display: flex;
  width: 85%;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 95%;
  }
`;

const TitleSection = styled.div`
  flex: 1;
  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 2em;
  }
`;

const HintText = styled.h3`
  font-family: "FontAwesome";
  font-size: 1.25rem;
  font-weight: lighter;
  color: #ff3131;
  margin-bottom: 8px;
`;

const TitleContainer = styled.div`
  padding-top: 0;
  margin-top: 0;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    align-items: center;
  }
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
  width: 16%;
  margin: 6px 0px;
  border-bottom: 3.5px solid #ff3131;
  @media (max-width: 768px) {
    width: 30%;
  }
`;

const Subtitle = styled.p`
  font-family: "Saira";
  color: rgb(155, 155, 155);
  display: flex;
  justify-content: center;
  font-size: 1.25rem;
  width: 60%;
  line-height: 1;

  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`;

const CardsSection = styled.div`
  flex: 1;
  @media (min-width: 769px) and (max-width: 992px) {
    /* Styles for tablets (landscape) */
    flex: 2;
    gap: 5em 4em;
  }

  /* Small Laptops */
  @media (min-width: 993px) and (max-width: 1200px) {
    /* Styles for small laptops */
    flex: 2;
    gap: 5em 4em;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: 2.5em auto;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5em 4em;
  /* Mobile Phones */
  @media (max-width: 576px) {
    /* Styles for small mobile devices */
    grid-template-columns: repeat(1, 1fr);
    row-gap: 5em;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    /* Styles for tablets (landscape) */
    padding-top: 2em;
  }

  /* Small Laptops */
  @media (min-width: 993px) and (max-width: 1200px) {
    /* Styles for small laptops */
    padding-top: 2em;
  }
`;

const CookieImage = styled.img`
  position: absolute;
  width: 42%;
  bottom: -35px;
  left: -25px;
  @media (max-width: 768px) {
    width: 50%;
    bottom: -65px;
    left: -10px;
  }
`;

function Testimonials({ slice }) {
  return (
    <Wrapper>
      <CookieImage src={Cookie} />
      <Inner>
        <TitleSection>
          <HintText>
            {RichText.asText(slice.primary.hint_text.richText)}
          </HintText>
          <TitleContainer>
            <Title>
              {RichText.asText(slice.primary.section_title.richText)}
            </Title>
            <BottomBorder />
          </TitleContainer>
          <Subtitle>
            {RichText.asText(slice.primary.section_subtitle.richText)}
          </Subtitle>
        </TitleSection>
        <CardsSection>
          <CardsGrid>
            {slice.items.map((item, index) => {
              return (
                <TestimonialCard
                  key={`testimonial-card-${index}`}
                  testimony={item.testimonial_text.richText}
                  author={item.author.richText}
                  role={item.role.richText}
                  rating={item.rating.richText}
                />
              );
            })}
          </CardsGrid>
        </CardsSection>
      </Inner>
    </Wrapper>
  );
}

export default Testimonials;

export const query = graphql`
  fragment HomepageDataBodyTestimonials on PrismicHomepageDataBodyTestimonials {
    primary {
      hint_text {
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
      testimonial_text {
        richText
      }
      author {
        richText
      }
      role {
        richText
      }
      rating {
        richText
      }
      testimonial_person_image {
        url
      }
    }
  }
`;
