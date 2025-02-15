import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";

const Wrapper = styled.div`
  margin: 2em 0em 6em;
`;

const Inner = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
  padding-top: 4em;
  justify-content: space-between;
  border-top: 0.5px solid rgba(157, 157, 157, 0.25);

  @media (max-width: 768px) {
    /* Styles for tablets (portrait) */
    width: 90%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MapWrapper = styled.div`
  height: 400px;

  @media (min-width: 769px) {
    flex: 2.75;
    height: 500px;
  }
`;

const TitleWrapper = styled.div`
  @media (min-width: 769px) {
    flex: l;
  }
`;

const TitleSection = styled.div`
  padding-top: 0;
  margin-top: 0;
  width: 100%;
  margin-bottom: 3em;
  display: flex;
  flex-direction: column;

  @media (max-width: 769px) {
    align-items: center;
  }

  @media (min-width: 769px) {
    width: 45%;
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
  width: 80%;
  margin: 10px 2px 2px;
  border-bottom: 3.5px solid #ff3131;

  @media (max-width: 768px) {
    width: 20%;
  }
`;

function FindUs({ slice }) {
  const [isClient, setIsClient] = useState(false);
  const position = [-4.300619, 15.310679]; // City Market Coordinates

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <p>Loading Map...</p>;
  }

  return (
    <Wrapper>
      <Inner>
        <TitleWrapper>
          <TitleSection>
            <Title>
              {RichText.asText(slice.primary.section_title.richText)}
            </Title>
            <BottomBorder />
          </TitleSection>
        </TitleWrapper>
        <MapWrapper>
          <MapContainer
            center={position}
            zoom={100}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <CircleMarker
              center={position}
              radius={50}
              pathOptions={{
                color: "#e92b2b",
                fillColor: "#e92b2b",
                fillOpacity: 0.2,
              }}
            >
              <Popup>
                {RichText.asText(slice.primary.pop_up_text.richText)}
              </Popup>
            </CircleMarker>
          </MapContainer>
        </MapWrapper>
      </Inner>
    </Wrapper>
  );
}

export default FindUs;

export const query = graphql`
  fragment ProductspageDataBodyFindUs on PrismicProductspageDataBodyFindUs {
    primary {
      section_title {
        richText
      }
      pop_up_text {
        richText
      }
    }
  }
`;
