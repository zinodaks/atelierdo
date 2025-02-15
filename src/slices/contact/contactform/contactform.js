import React from "react";
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import { useForm, ValidationError } from "@formspree/react";
import styled from "styled-components";
import {
  IoCall,
  IoMail,
  IoLocationSharp,
  IoCheckmarkCircleSharp,
} from "react-icons/io5";

const Wrapper = styled.div`
  padding: 4em 0 5em;
`;

const Inner = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
  padding-top: 4em;
  justify-content: space-between;

  @media (max-width: 1100px) {
    /* Styles for tablets (portrait) */
    width: 90%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TitleWrapper = styled.div`
  @media (min-width: 769px) {
    flex: 0.75;
  }
`;

const HintText = styled.h3`
  font-family: "FontAwesome";
  font-size: 1.25rem;
  font-weight: lighter;
  color: #ff3131;
  display: flex;
  margin-bottom: 0;
`;

const TitleSection = styled.div`
  padding-top: 0;
  margin-top: 0;
  width: 100%;
  margin-bottom: 3em;
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    margin-bottom: 1em;
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
  width: 30%;
  margin: 10px 2px 2px;
  border-bottom: 3.5px solid #ff3131;

  @media (max-width: 768px) {
    width: 20%;
  }
`;

const Subtitle = styled.p`
  font-family: "Saira";
  color: rgb(155, 155, 155);
  font-size: 1.25rem;
  width: 75%;
  line-height: 1;

  @media (max-width: 425px) {
    font-size: 1rem;
    width: 100%;
    text-align: center;
  }
`;

const FormWrapper = styled.div`
  background-color: rgba(255, 242, 242, 0.7);
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  @media (min-width: 769px) {
    flex: 1;
  }
`;

const Form = styled.form`
  width: 80%;
  margin: 0 auto;
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  font-family: "Ibmplex";

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 14px;
  margin: 12px 0;
  border: 2px solid #ddd;
  border-radius: 10px;
  font-size: 16px;
  font-family: "Ibmplex";
  background: #fff;
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-color: rgb(248, 160, 160);
    background: #f8faff;
    box-shadow: 0 4px 10px rgba(0, 115, 230, 0.15);
  }

  @media (max-width: 768px) {
    text-indent: 12px;
    padding: 12px 4px;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 14px;
  margin: 12px 0;
  border: 2px solid #ddd;
  border-radius: 10px;
  font-size: 16px;
  font-family: "Ibmplex";
  background: #fff;
  transition: all 0.3s ease-in-out;
  height: 120px;
  resize: none;

  &:focus {
    outline: none;
    border-color: rgb(248, 160, 160);
    background: #f8faff;
    box-shadow: 0 4px 10px rgba(0, 115, 230, 0.15);
  }

  @media (max-width: 768px) {
    text-indent: 12px;
    padding: 12px 0px;
  }
`;

const Button = styled.button`
  padding: 0.5rem 3rem;
  background-color: #ff3131;
  color: white;
  border: none;
  border-radius: 24px;
  margin: 12px 0;
  cursor: pointer;

  &:hover {
    background-color: rgb(236, 42, 42);
  }

  &:disabled {
    background-color: grey;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 2.5rem;
  }
`;

const ButtonSpan = styled.span`
  font-family: "Saira";
  font-size: 1.25rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const IconsContainer = styled.div`
  margin-top: 10px;

  @media (max-width: 768px) {
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const IconRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5em;
`;

const IconTextColumn = styled.div`
  margin-left: 2em;
  @media (min-width: 768px) and (max-width: 1100px) {
    margin-left: 1em;
  }
`;

const ColumnText = styled.p`
  margin: 0;
  font-family: "Saira";
  line-height: 1;
`;

const TopText = styled(ColumnText)`
  color: rgb(155, 155, 155);
  margin-bottom: 12px;
  font-size: 18px;

  @media (max-width: 910px) {
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

const BottomText = styled(ColumnText)`
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 910px) {
    font-size: 16px;
  }
`;

const Circle = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: #ff3131;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: white;
  font-size: 28px;

  &:hover {
    background: #005bb5;
    transform: scale(1.1);
  }

  @media (max-width: 1100px) {
    width: 50px;
    height: 50px;
    font-size: 18px;
  }
`;

const SuccessWrapper = styled.div`
  display: flex;
  align-items: center;
  color: rgb(10, 205, 137);
  font-size: 32px;
`;

const SuccessMessage = styled.p`
  margin-left: 8px;
  font-size: 1.15rem;
  font-family: "Saira";
`;

function ContactForm({ slice }) {
  const [state, handleSubmit] = useForm("myzkdwgy");

  return (
    <Wrapper>
      <Inner>
        <TitleWrapper>
          <TitleSection>
            <HintText>
              {RichText.asText(slice.primary.hint_text.richText)}
            </HintText>
            <Title>
              {RichText.asText(slice.primary.contact_title.richText)}
            </Title>
            <BottomBorder />
            <Subtitle>
              {RichText.asText(slice.primary.contact_subtitle.richText)}
            </Subtitle>
            <IconsContainer>
              <IconRow>
                <Circle>
                  <IoCall style={{ fontSize: "inherit", color: "inherit" }} />
                </Circle>
                <IconTextColumn>
                  <TopText>
                    {RichText.asText(slice.items[0].contact_top_text.richText)}
                  </TopText>
                  <BottomText>
                    {RichText.asText(
                      slice.items[0].contact_bottom_text.richText
                    )}
                  </BottomText>
                </IconTextColumn>
              </IconRow>
              <IconRow>
                <Circle>
                  <IoMail style={{ fontSize: "inherit", color: "inherit" }} />
                </Circle>
                <IconTextColumn>
                  <TopText>
                    {RichText.asText(slice.items[1].contact_top_text.richText)}
                  </TopText>
                  <BottomText>
                    {RichText.asText(
                      slice.items[1].contact_bottom_text.richText
                    )}
                  </BottomText>
                </IconTextColumn>
              </IconRow>
              <IconRow>
                <Circle>
                  <IoLocationSharp
                    style={{ fontSize: "inherit", color: "inherit" }}
                  />
                </Circle>
                <IconTextColumn>
                  <TopText>
                    {RichText.asText(slice.items[2].contact_top_text.richText)}
                  </TopText>
                  <BottomText>
                    {RichText.asText(
                      slice.items[2].contact_bottom_text.richText
                    )}
                  </BottomText>
                </IconTextColumn>
              </IconRow>
            </IconsContainer>
          </TitleSection>
        </TitleWrapper>
        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            <FormTitle>
              {RichText.asText(slice.primary.form_title.richText)}
            </FormTitle>

            <Input
              id="name"
              type="text"
              name="name"
              placeholder={RichText.asText(
                slice.primary.name_placeholder.richText
              )}
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <Input
              id="email"
              type="email"
              name="email"
              placeholder={RichText.asText(
                slice.primary.email_placeholder.richText
              )}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <Textarea
              id="message"
              name="message"
              placeholder={RichText.asText(
                slice.primary.message_placeholder.richText
              )}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            {state.succeeded ? (
              <SuccessWrapper>
                <IoCheckmarkCircleSharp />
                <SuccessMessage>
                  {RichText.asText(slice.primary.success_message.richText)}
                </SuccessMessage>
              </SuccessWrapper>
            ) : (
              <Button type="submit" disabled={state.submitting}>
                <ButtonSpan>
                  {RichText.asText(slice.primary.button_text.richText)}
                </ButtonSpan>
              </Button>
            )}
          </Form>
        </FormWrapper>
      </Inner>
    </Wrapper>
  );
}

export default ContactForm;

export const query = graphql`
  fragment ContactpageDataBodyContactForm on PrismicContactpageDataBodyContactForm {
    primary {
      hint_text {
        richText
      }
      contact_title {
        richText
      }
      contact_subtitle {
        richText
      }
      form_title {
        richText
      }
      name_placeholder {
        richText
      }
      email_placeholder {
        richText
      }
      message_placeholder {
        richText
      }
      button_text {
        richText
      }
      success_message {
        richText
      }
    }
    items {
      contact_top_text {
        richText
      }
      contact_bottom_text {
        richText
      }
    }
  }
`;
