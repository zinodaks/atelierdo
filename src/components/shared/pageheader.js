import React from "react";
import styled from "styled-components";
import Cookie from "../../assets/cookie.jpg";
import Breadcrumbs from "../../slices/productsdetails/breadcrumbs/breadcrumbs";

const Section = styled.section`
  padding: 5em 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${Cookie});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    padding: 5em 0;
  }
`;

const HeaderWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;
`;

const PageTitle = styled.h1`
  color: white;
  font-size: 3.25rem;
  font-family: "Ibmplex";

  @media (max-width: 768px) {
    font-size: 2.75rem;
  }
`;

function PageHeader({ title, path }) {
  console.log(path);
  return (
    <Section>
      <HeaderWrapper>
        <PageTitle>{title}</PageTitle>
        {path ? <Breadcrumbs path={path} /> : null}
      </HeaderWrapper>
    </Section>
  );
}

export default PageHeader;
