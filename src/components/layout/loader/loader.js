import React from "react";
import styled, { keyframes } from "styled-components";
import Logo from "../../../assets/logo-removedbg.png";

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.5s ease;
`;

const LoaderLogo = styled.img`
  width: 100px;
  animation: ${spin} 2s linear infinite;
`;

function Loader() {
  return (
    <LoaderWrapper id="loader">
      <LoaderLogo src={Logo} alt="Loading..." />
    </LoaderWrapper>
  );
}

export default Loader;
