import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import { AiFillTikTok, AiFillFacebook } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const FooterWrapper = styled.footer`
  color: white;
`;

const Inner = styled.div`
  width: 80%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const TopSection = styled.div`
  padding: 3em 0em;
  background-color: #e92b2b;

  @media (max-width: 768px) {
    padding: 2em 0em;
  }
`;

const TopInner = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BrandSection = styled.div`
  flex: 2;

  @media (max-width: 768px) {
    margin-bottom: 1.5em;
  }
`;

const BrandTitle = styled.h3`
  font-family: "Ibmplex";
`;

const BrandDescription = styled.p`
  width: 50%;
  font-family: "Play";
  font-size: 14px;
  line-height: 1.5;
  padding-top: 8px;
  color: rgb(218 205 205);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ContactAndMenuSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;

const Section = styled.div``;

const SectionTitle = styled.h3`
  font-family: "Ibmplex";
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  font-size: 14px;
  line-height: 2;
  width: 70%;
  color: rgb(218 205 205);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MenuLink = styled.a``;

const BottomSection = styled.div`
  font-size: 14px;
  padding: 1.5em 0em;
  background-color: #000;

  @media (max-width: 768px) {
    font-size: 6.5px;
    padding: 2.5em 0em;
    text-align: center;
  }
`;

const BottomInner = styled(Inner)`
  display: flex;
  font-weight: bold;
  font-family: "Play";
  justify-content: space-between;

  @media (max-width: 768px) {
    align-items: center;
    gap: 0.5em;
  }
`;

const Text = styled.span`
  color: white;
`;

const ContactDeveloper = styled.span``;

const AboutSocialMediaWrapper = styled.div`
  margin-top: 1em;
  * {
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    display: flex;
    gap: 10px;
  }
`;

const LanguageSelector = styled.select`
  margin-top: 1em;
  width: 7.5%;
  font-size: 16px;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

const LanguageOption = styled.option`
  font-size: 16px;
`;

function Footer({ footerNodes, pathname }) {
  const footerItems = footerNodes[0];
  const [selected, setSelected] = useState(footerNodes[0].lang);

  useEffect(() => {
    setSelected(footerNodes[0].lang);
  }, [footerNodes]);

  const navigateToChosenLang = (chosenLang) => {
    let expDate = new Date();
    expDate.setFullYear(expDate.getFullYear() + 1);
    document.cookie = `preferredLang=${chosenLang};expires=${expDate.toUTCString()}`;
    const splitPathname = pathname.split("/fr");
    chosenLang = chosenLang.split("-")[0];
    if (chosenLang === "fr") {
      if (splitPathname.length > 1) return;
      else navigate(`/fr${pathname}`);
    } else if (chosenLang === "en") {
      if (splitPathname.length > 1) {
        navigate(splitPathname[1] ? splitPathname[1] : "/");
      } else return;
    }
  };

  return (
    <FooterWrapper>
      <TopSection>
        <Inner>
          <TopInner>
            <BrandSection>
              <BrandTitle>
                {RichText.asText(footerItems.data.footer_title.richText)}
              </BrandTitle>

              <BrandDescription>
                {RichText.asText(footerItems.data.footer_description.richText)}
              </BrandDescription>

              <AboutSocialMediaWrapper>
                <AiFillFacebook size={24} />
                <FaSquareXTwitter size={24} />
                <AiFillTikTok size={24} />
                <FaSquareInstagram size={24} />
              </AboutSocialMediaWrapper>

              <LanguageSelector
                onChange={(e) => {
                  navigateToChosenLang(e.target.value);
                }}
                value={selected}
              >
                <LanguageOption value={footerNodes[0].lang}>
                  {selected.split("-")[0].toUpperCase()}
                </LanguageOption>

                {footerNodes[0].alternate_languages.map((altLang, index) => {
                  return (
                    <LanguageOption key={index} value={altLang.lang}>
                      {altLang.lang.split("-")[0].toUpperCase()}
                    </LanguageOption>
                  );
                })}
              </LanguageSelector>
            </BrandSection>

            <ContactAndMenuSection>
              <Section>
                <SectionTitle>
                  {RichText.asText(footerItems.data.contact_title.richText)}
                </SectionTitle>
                <List>
                  <ListItem>
                    Phone:{" "}
                    {RichText.asText(footerItems.data.phone_number.richText)}
                  </ListItem>
                  <ListItem>
                    Email: {RichText.asText(footerItems.data.email.richText)}
                  </ListItem>
                  <ListItem>
                    Address:{" "}
                    {RichText.asText(footerItems.data.address.richText)}
                  </ListItem>
                </List>
              </Section>
              <Section>
                <SectionTitle>
                  {RichText.asText(footerItems.data.menu_title.richText)}
                </SectionTitle>
                <List>
                  <ListItem>Home</ListItem>
                  <ListItem>Products</ListItem>
                  <ListItem>Contact</ListItem>
                </List>
              </Section>
            </ContactAndMenuSection>
          </TopInner>
        </Inner>
      </TopSection>

      <BottomSection>
        <BottomInner>
          <Text>
            &copy; {new Date().getFullYear()}{" "}
            {RichText.asText(footerItems.data.copyright_text.richText)}
          </Text>

          <ContactDeveloper>
            Contact Developer:{" "}
            {RichText.asText(footerItems.data.developer_contacts.richText)}
          </ContactDeveloper>
        </BottomInner>
      </BottomSection>
    </FooterWrapper>
  );
}

export default Footer;
