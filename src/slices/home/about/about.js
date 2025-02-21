import React from "react";
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: 5rem auto;

  @media (max-width: 768px) {
    margin: 3rem auto;
  }

  @media (max-width: 480px) {
    width: 95%;
    margin: 2rem auto;
  }
`;

const AboutSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const AboutTextWrapper = styled.div`
  flex-basis: 50%;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

const AboutTextInner = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1024px) and (max-width: 1100px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const TitleSection = styled.div`
  padding-top: 0;
  margin-top: 0;
  margin-bottom: 1em;
`;

const Title = styled.h2`
  font-size: 3.25rem;
  color: #333;
  align-self: center;
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
  width: 30%;
  margin: 2px auto 0;
  border-bottom: 3.5px solid #ff3131;

  @media (max-width: 480px) {
    width: 50%;
  }
`;

const Text = styled.p`
  font-size: 1.4rem;
  color: #555;
  margin-bottom: 10px;
  font-family: "Play";
  text-align: justify;

  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  flex-basis: 60%;

  @media (min-width: 1439px) {
    flex-basis: 40%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    /* Styles for tablets till small laptops (landscape) */
    width: 80%;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 35px;
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 85%;
  }

  @media (max-width: 1024px) {
    margin-top: 2em;
  }
`;

const ImageContainer = styled.div`
  background: rgb(220, 220, 220);
  height: 16em;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  position: relative;

  @media (max-width: 768px) {
    height: 14em;
  }

  &:hover {
    transform: scale(0.95);
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

const Image = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
`;

function About({ slice }) {
  return (
    <Container>
      <AboutSection>
        <ImageGrid>
          {slice.items.map((item, index) => {
            return (
              <ImageContainer key={`image-container-${index}`}>
                <ImageWrapper>
                  <Image image={item.aboutgridimage.gatsbyImageData} alt="" />
                </ImageWrapper>
              </ImageContainer>
            );
          })}
        </ImageGrid>
        <AboutTextWrapper>
          <AboutTextInner>
            <TitleSection>
              <Title>{RichText.asText(slice.primary.title.richText)}</Title>
              <BottomBorder />
            </TitleSection>
            <Text>
              {RichText.asText(slice.primary.aboutusdescription.richText)}
            </Text>
            <Text>
              {RichText.asText(slice.primary.aboutusdescription2.richText)}
            </Text>
          </AboutTextInner>
        </AboutTextWrapper>
      </AboutSection>
    </Container>
  );
}

export default About;

export const query = graphql`
  fragment HomepageDataBodyAbout on PrismicHomepageDataBodyAbout {
    primary {
      title {
        richText
      }
      aboutusdescription {
        richText
      }
      aboutusdescription2 {
        richText
      }
    }
    items {
      aboutgridimage {
        gatsbyImageData
      }
    }
  }
`;
