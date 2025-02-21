import { createGlobalStyle } from "styled-components";
import AvenirDemi from "../assets/fonts/AvenirDemi.otf";
import AvenirMedium from "../assets/fonts/AvenirMedium.otf";
import FontAwesome from "../assets/fonts/FontAwesome.ttf";
import Ibmplex from "../assets/fonts/Ibmplex.woff";
import Play from "../assets/fonts/Play.woff";
import Saira from "../assets/fonts/Saira.woff";
import bg from "../assets/bg.png";

const GlobalStyle = createGlobalStyle`
body, html {
  margin: 0;
  padding: 0;
  background-color: white !important;
  /* background-image: linear-gradient(rgba(247, 247, 247, 0.05), rgba(247, 247, 247, 0.05)),url(${bg}); */
}
html { 
  scroll-behavior: smooth;
  height: initial;
}

@font-face {
  font-family: 'Play';
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  unicode-range: U+000-5FF;
  src: url(${Play}) format('woff');
}


@font-face {
  font-family: 'Ibmplex';
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  unicode-range: U+000-5FF;
  src: url(${Ibmplex}) format('woff');
}

@font-face {
  font-family: 'Saira';
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  unicode-range: U+000-5FF;
  src: url(${Saira}) format('woff');
}

@font-face {
  font-family: 'AvenirDemi';
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  unicode-range: U+000-5FF;
  src: url(${AvenirDemi}) format('opentype');
}

@font-face {
  font-family: 'AvenirMedium';
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  unicode-range: U+000-5FF;
  src: url(${AvenirMedium}) format('opentype');
}

@font-face {
  font-family: 'FontAwesome';
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  unicode-range: U+000-5FF;
  src: url(${FontAwesome}) format('truetype');
}
`;

export default GlobalStyle;
