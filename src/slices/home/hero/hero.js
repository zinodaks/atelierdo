import React from "react";
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import HeroImage from "../../../assets/hero-image.png";

const HeroWrapper = styled.div`
  height: 95vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 90vh;
  }
`;

const HeroInner = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 924px) {
    flex-direction: column;
    justify-content: center;
    position: relative;
  }
`;

const ImageSide = styled.div`
  width: 100%;
  height: 750px;
  position: relative;
  @media (min-width: 924px) {
    flex-basis: 55%;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;

  @media (max-width: 924px) {
    filter: brightness(0.5);
    box-sizing: border-box;
  }

  @media (min-width: 924px) {
    height: 100%;
  }
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center;

  @media (min-width: 768px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    height: 90vh;
  }
`;

const TextSide = styled.div`
  flex-basis: 40%;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 2;

  @media (max-width: 924px) {
    flex-basis: 100%;
    height: auto;
    padding: 2rem 0;
    color: white;
    position: absolute;
  }
  @media (min-width: 768px) {
    align-items: center;
  }
`;

const TextSideInner = styled.div`
  width: 80%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  font-family: "Ibmplex";
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 2.55rem;
  }
`;

const Subtitle = styled.p`
  font-family: "Play";
  font-size: 1.4rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin: 1.5rem 0;
  }
`;

const Button = styled.button`
  padding: 0.75rem 3rem;
  background-color: #ff3131;
  color: white;
  border: none;
  border-radius: 24px;
  cursor: pointer;

  &:hover {
    background-color: rgb(236, 42, 42);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 2.5rem;
  }
`;

const ButtonSpan = styled.span`
  font-family: "Saira";
  font-size: 1.25rem;

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }
`;

function Hero({ slice }) {
  return (
    <HeroWrapper>
      <HeroInner>
        <ImageSide>
          <ImageWrapper>
            <Image src={HeroImage} />
          </ImageWrapper>
        </ImageSide>
        <TextSide>
          <TextSideInner>
            <Title>{RichText.asText(slice.primary.hero_title.richText)}</Title>
            <Subtitle>
              {RichText.asText(slice.primary.hero_description.richText)}
            </Subtitle>
            <Button>
              <ButtonSpan>
                {RichText.asText(
                  slice.primary.hero_button_placeholder.richText
                )}
              </ButtonSpan>
            </Button>
          </TextSideInner>
        </TextSide>
      </HeroInner>
    </HeroWrapper>
  );
}

export default Hero;

export const query = graphql`
  fragment HomepageDataBodyHero on PrismicHomepageDataBodyHero {
    primary {
      hero_title {
        richText
      }
      hero_description {
        richText
      }
      hero_button_placeholder {
        richText
      }
    }
  }
`;
