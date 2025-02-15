import React, { useEffect, useState } from "react";
// import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
// import { GatsbyImage } from "gatsby-plugin-image";
import LogoImage from "../../../assets/logo-removedbg.png";

const NavWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["isOpen", "hasShadow", "isSolid", "isPermanent"].includes(prop),
})`
  width: 100%;
  z-index: 1001;
  user-select: none;
  padding: 0.5em 0em;
  transition: all 0.2s ease-in-out;
  height: ${(props) => (props.isOpen ? "100%" : "fit-content")};
  position: ${(props) =>
    props.hasShadow || props.isOpen ? "fixed" : "absolute"};
  background-color: ${(props) =>
    props.isPermanent || props.isSolid || props.isOpen
      ? "white"
      : "transparent"};
  box-shadow: ${(props) =>
    props.hasShadow || props.isPermanent
      ? "0 2px 4px 0 rgb(0 0 0 / 20%), 0 1px 10px 0 rgb(0 0 0 / 19%)"
      : "none"};
  @media only screen and (min-width: 800px) {
    height: initial;
  }
`;

const Nav = styled.nav`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLogoWrapper = styled.div`
  flex-basis: 50px;
  display: flex;
  @media only screen and (min-width: 999px) {
    flex-basis: 60px;
  }
`;

const NavLogo = styled.img`
  width: 100%;
  height: 100%;
`;

const NavButton = styled.button`
  width: 24px;
  padding: 12px;
  border: none;
  outline: none;
  position: relative;
  background-color: transparent;
  @media only screen and (min-width: 800px) {
    display: none;
  }
`;

const NavMenuIcon = styled.span.withConfig({
  shouldForwardProp: (prop) =>
    !["isOpen", "isSolid", "isPermanent"].includes(prop),
})`
  width: 100%;
  position: absolute;
  left: 0px;
  transition: 0.1s all ease-in-out;
  height: ${(props) => (props.isOpen ? "0px" : "2px")};
  background-color: ${(props) =>
    props.isSolid || props.isPermanent
      ? "black"
      : props.isOpen
      ? "transparent"
      : "white"};

  &:before,
  &:after {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    background-color: ${(props) =>
      props.isOpen || props.isSolid || props.isPermanent ? "black" : "white"};
  }

  &:before {
    bottom: ${(props) => (props.isOpen ? "0px" : "8px")};
    right: 0px;
    transform: ${(props) => (props.isOpen ? "rotate(-45deg)" : "")};
    transition: 0.1s all ease-in-out;
  }
  &:after {
    top: ${(props) => (props.isOpen ? "-2px" : "8px")};
    left: 0px;
    transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "")};
    transition: 0.1s all ease-in-out;
  }
  @media only screen and (min-width: 800px) {
    display: none;
  }
`;

const NavLinks = styled.ul.withConfig({
  shouldForwardProp: (prop) => !["isOpen", "isSolid"].includes(prop),
})`
  padding: 0;
  color: black;
  font-size: 28px;
  margin: 10% 0 0 0;
  list-style-type: none;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex: 0 0 70%;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 800px) {
    display: flex;
    margin: 0;
    flex-direction: row;
    font-size: 26px;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: ${(props) => (props.isOpen ? "fadeIn 1s" : "none")};
`;

const NavItem = styled.li.withConfig({
  shouldForwardProp: (prop) => !["isSolid", "isPermanent"].includes(prop),
})`
  font-family: "Play";
  padding-bottom: 10px;
  * {
    text-decoration: none;
  }
  @media only screen and (min-width: 800px) {
    display: inline;
    padding-right: 12px;
    transition: all 0.2s ease-in-out;
    color: ${(props) =>
      props.isSolid || props.isPermanent ? "#ff3131" : "white"};
  }
`;

function handleScroll(setIsSolid, setHasShadow) {
  if (window.scrollY >= 20) setHasShadow(true);
  else setHasShadow(false);
  if (window.scrollY >= 150) setIsSolid(true);
  else if (window.scrollY < 150) setIsSolid(false);
}

function Navbar({ isPermanent, navbarItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolid, setIsSolid] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  console.log(isPermanent);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      handleScroll(setIsSolid, setHasShadow)
    );
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <NavWrapper
      isPermanent={isPermanent}
      isSolid={isSolid}
      hasShadow={hasShadow}
      isOpen={isOpen}
    >
      <Nav>
        <NavInner>
          <NavLogoWrapper>
            <NavLogo src={LogoImage} alt={"Do Logo"} />
          </NavLogoWrapper>

          <NavButton
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open/Close Menu"
          >
            <NavMenuIcon
              isOpen={isOpen}
              isSolid={isSolid}
              isPermanent={isPermanent}
            />
          </NavButton>
        </NavInner>
        <NavLinks isOpen={isOpen} isSolid={isSolid}>
          {navbarItems.map((navbarItem, index) => {
            return (
              <NavItem
                isSolid={isSolid}
                isPermanent={isPermanent}
                key={`nav-item-${index}`}
              >
                <Link
                  style={{ color: "inherit" }}
                  to={navbarItem.navbar_link_url.url}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  {RichText.asText(navbarItem.navbar_link_label.richText)}
                </Link>
              </NavItem>
            );
          })}
        </NavLinks>
      </Nav>
    </NavWrapper>
  );
}

export default Navbar;
