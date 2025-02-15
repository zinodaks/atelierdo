import React from "react";
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

// /* Mobile Phones */
// @media (max-width: 576px) {
//   /* Styles for small mobile devices */
// }

// /* Tablets */
// @media (min-width: 577px) and (max-width: 768px) {
//   /* Styles for tablets (portrait) */
// }

// @media (min-width: 769px) and (max-width: 992px) {
//   /* Styles for tablets (landscape) */
// }

// /* Small Laptops */
// @media (min-width: 993px) and (max-width: 1200px) {
//   /* Styles for small laptops */
// }

// /* Normal Laptops */
// @media (min-width: 1201px) and (max-width: 1440px) {
//   /* Styles for normal laptops */
// }

// /* Large Laptops & Desktops */
// @media (min-width: 1441px) {
//   /* Styles for large screens */
// }

const Wrapper = styled.div``;

const Inner = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0 auto 3em;
  position: relative;
  background-color: #fff2f2;

  @media (min-width: 1024px) {
    width: 90%;
    margin: 0 auto 5em;
    display: flex;
    flex-direction: row;
  }
  @media (min-width: 1300px) {
    width: 80%;
  }
`;

const TextSide = styled.div`
  padding: 1.5em 2em;
  text-align: center;
  @media (min-width: 1024px) {
    flex: 1;
    width: 45%;
    padding: 2em 6em;
    text-align: start;
  }
`;

const HintText = styled.h3`
  font-family: "FontAwesome";
  font-size: 1rem;
  font-weight: lighter;
  color: #ff3131;
  margin-bottom: 8px;

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin: 0;
  font-family: "Ibmplex";
  line-height: 1.2;

  @media (min-width: 1024px) {
    font-size: 3.25rem;
    line-height: 1;
  }
`;

const Subtitle = styled.p`
  font-family: "Saira";
  color: rgb(155, 155, 155);
  font-size: 1rem;
  width: 100%;
  line-height: 1.4;
  @media (min-width: 1024px) {
    font-size: 1.25rem;
    width: 70%;
    line-height: 1;
  }
`;

const RedColored = styled.span`
  color: #ff3131;
`;

const ButtonSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: relative;
  padding-bottom: 1.5em;
  @media (min-width: 1024px) {
    padding: 1em 0;
  }
`;

const Button = styled.button`
  padding: 0.5rem 2rem;
  background-color: #ff3131;
  color: white;
  border: none;
  border-radius: 24px;
  cursor: pointer;

  &:hover {
    background-color: rgb(236, 42, 42);
  }

  @media (min-width: 1024px) {
    padding: 0.75rem 2.5rem;
  }
`;

const ButtonSpan = styled.span`
  font-family: "Saira";
  font-size: 1rem;

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;

const RoundedRectangle = styled.div`
  width: 60px;
  height: 15px;
  position: absolute;
  border-radius: 24px;
  transform: rotate(90deg);

  @media (min-width: 1024px) {
    width: 100px;
    height: 25px;
  }
`;

const TopRoundedRectangle = styled(RoundedRectangle)`
  right: -12.5px;
  top: 12.5px;
  background-color: #ff3131;

  @media (min-width: 1024px) {
    top: -10px;
    right: 450px;
  }
`;

const BottomRoundedRectangle = styled(RoundedRectangle)`
  left: -12.5px;
  bottom: 37.5px;
  background-color: #fdc55e;

  @media (min-width: 1024px) {
    bottom: -10px;
    right: 450px;
    left: auto;
  }
`;

const Square = styled.div`
  width: 75px;
  height: 75px;
  background: rgb(200, 200, 200);
  position: absolute;
  box-shadow: 0px 4px 14px 8px rgba(0, 0, 0, 0.08);

  @media (min-width: 1024px) {
    width: 150px;
    height: 150px;
  }
`;

const TopSquare = styled(Square)`
  display: none;
  top: -40px;

  @media (min-width: 1024px) {
    display: block;
    top: -75px;
  }
`;

const RightSquare = styled(Square)`
  right: -40px;

  @media (min-width: 1024px) {
    right: -75px;
  }
`;

const BottomSquare = styled(Square)`
  left: -40px;

  @media (min-width: 1024px) {
    left: auto;
    bottom: -75px;
  }
`;

function ContactUs({ slice }) {
  return (
    <Wrapper>
      <Inner>
        <TextSide>
          <HintText>{RichText.asText(slice.primary.hint.richText)}</HintText>
          <Title>
            {RichText.asText(slice.primary.section_title.richText)}
            {/* // TODO: ADD REDCOLORED */}
          </Title>
          <Subtitle>
            {RichText.asText(slice.primary.section_subtitle.richText)}
          </Subtitle>
        </TextSide>
        <ButtonSide>
          <TopSquare />
          <RightSquare />
          <BottomSquare />
          <TopRoundedRectangle />
          <BottomRoundedRectangle />
          <Button>
            <ButtonSpan>
              {RichText.asText(slice.primary.button_placeholder.richText)}
            </ButtonSpan>
          </Button>
        </ButtonSide>
      </Inner>
    </Wrapper>
  );
}

export default ContactUs;

export const query = graphql`
  fragment HomepageDataBodyContactus on PrismicHomepageDataBodyContactus {
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
      button_placeholder {
        richText
      }
    }
  }
`;
