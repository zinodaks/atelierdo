import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FiChevronRight } from "react-icons/fi";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Inner = styled.div``;

const BreadCrumbsList = styled.ul`
  list-style-type: none;
  padding: 0;
  color: white;
  display: table;
  font-size: 1.15rem;
  font-family: "Ibmplex";
`;

const BreadCrumbsListItem = styled.li`
  display: table-cell;
  vertical-align: middle;
`;

const Icon = styled(FiChevronRight)`
  display: table-cell;
  vertical-align: middle;
  padding: 6px;
`;

const BreadCrumbLink = styled(Link)`
  text-decoration: underline;
  color: inherit;
`;

function BreadCrumb({ to, label, isLast }) {
  return (
    <>
      <BreadCrumbsListItem>
        {isLast ? label : <BreadCrumbLink to={to}>{label}</BreadCrumbLink>}
      </BreadCrumbsListItem>
      {!isLast && <Icon />}
    </>
  );
}

function Breadcrumbs({ path }) {
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const formulate = (label) => {
      return `${label.charAt(0).toUpperCase()}${label.slice(1)}`;
    };
    let links = [{ to: "/", label: "Home" }];
    let pathSections = path.split("/");

    let slug = `/`;
    pathSections.forEach((section) => {
      if (section.toString() !== "") {
        if (section !== "fr") {
          let label = formulate(section.replaceAll("-", " "));
          slug = slug.concat(`${section}/`);
          links.push({ to: slug, label: label });
        } else {
          slug = slug.concat(`${section}/`);
        }
      }
    });
    setBreadcrumbs(links);
  }, [path]);

  return (
    <Wrapper>
      <Inner>
        <BreadCrumbsList>
          {breadcrumbs.map((breadcrumb, index) => (
            <BreadCrumb
              key={index}
              to={breadcrumb.to}
              label={breadcrumb.label}
              isLast={index === breadcrumbs.length - 1}
            />
          ))}
        </BreadCrumbsList>
      </Inner>
    </Wrapper>
  );
}

export default Breadcrumbs;
