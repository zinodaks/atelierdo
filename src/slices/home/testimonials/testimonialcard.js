import React from "react";
import styled from "styled-components";
import { RichText } from "prismic-reactjs";

const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 16px;
  text-align: left;
  position: relative;
  max-width: 300px;
  font-family: "Play";
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const ProfileCircle = styled.div`
  width: 50px;
  height: 50px;
  background: lightgray;
  border-radius: 50%;
  position: absolute;
  top: -30px;
  left: 20px;
`;

const TestimonialText = styled.p`
  font-size: 14px;
  color: rgb(155, 155, 155);
  margin-top: 20px;
  line-height: 1.5;
  text-wrap: pretty;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 16px 0;
`;

const Author = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #222;
`;

const BottomLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

const Role = styled.span`
  font-size: 14px;
  color: rgb(155, 155, 155);
`;

const Rating = styled.span`
  color: rgb(155, 155, 155);
  font-size: 14px;
`;

const Stars = styled.span`
  font-size: 14px;
  color: #ffba00;
  margin-left: 8px;
`;

function TestimonialCard({ testimony, author, role, rating }) {
  return (
    <Card>
      <ProfileCircle />
      <TestimonialText>{RichText.asText(testimony)}</TestimonialText>
      <Divider />
      <Author>{RichText.asText(author)}</Author>
      <BottomLine>
        <Role>{RichText.asText(role)}</Role>
        <Rating>
          <span>{RichText.asText(rating)}</span>
          <Stars>&#9733;&#9733;&#9733;&#9733;&#9733;</Stars>
        </Rating>
      </BottomLine>
    </Card>
  );
}

export default TestimonialCard;
