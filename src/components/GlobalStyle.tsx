import { Global, css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'

const GlobalStyle = () => <Global styles={style} />

export default GlobalStyle

const style = css`
  ${emotionNormalize}

  @font-face {
    font-family: 'Airbnb Cereal App Book';
    font-style: normal;
    font-weight: normal;
    src: local('Airbnb Cereal App Book'), url('/fonts/AirbnbCerealBook.woff') format('woff');
  }

  /* @font-face {
    font-family: 'Airbnb Cereal App Light';
    font-style: normal;
    font-weight: normal;
    src: local('Airbnb Cereal App Light'), url('/fonts/AirbnbCerealLight.woff') format('woff');
  } */

  @font-face {
    font-family: 'Airbnb Cereal App Medium';
    font-style: normal;
    font-weight: normal;
    src: local('Airbnb Cereal App Medium'), url('/fonts/AirbnbCerealMedium.woff') format('woff');
  }

  @font-face {
    font-family: 'Airbnb Cereal App Bold';
    font-style: normal;
    font-weight: normal;
    src: local('Airbnb Cereal App Bold'), url('/fonts/AirbnbCerealBold.woff') format('woff');
  }

  /* @font-face {
    font-family: 'Airbnb Cereal App Extra Bold';
    font-style: normal;
    font-weight: normal;
    src: local('Airbnb Cereal App Extra Bold'), url('/fonts/AirbnbCerealExtraBold.woff') format('woff');
  }

  @font-face {
    font-family: 'Airbnb Cereal App Black';
    font-style: normal;
    font-weight: normal;
    src: local('Airbnb Cereal App Black'), url('/fonts/AirbnbCerealBlack.woff') format('woff');
  } */

  @font-face {
    font-family: 'Airbnb Cereal App Book';
    font-style: normal;
    font-weight: normal;
    unicode-range: U+AC00-D7AF;
    src: url('/fonts/Spoqa Han Sans Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Airbnb Cereal App Medium';
    font-style: normal;
    font-weight: normal;
    unicode-range: U+AC00-D7AF;
    src: url('/fonts/Spoqa Han Sans Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Airbnb Cereal App Bold';
    font-style: normal;
    font-weight: normal;
    unicode-range: U+AC00-D7AF;
    src: url('/fonts/Spoqa Han Sans Bold.woff') format('woff');
  }

  /* @font-face {
    font-family: 'Airbnb Cereal App Book';
    font-style: normal;
    font-weight: normal;
    unicode-range: U+AC00-D7AF;
    src: local('Noto Sans KR'), url('/fonts/NotoSansKR-Regular.otf') format('opentype');
  }

  @font-face {
    font-family: 'Airbnb Cereal App Medium';
    font-style: normal;
    font-weight: normal;
    unicode-range: U+AC00-D7AF;
    src: local('Noto Sans KR'), url('/fonts/NotoSansKR-Medium.otf') format('opentype');
  }

  @font-face {
    font-family: 'Airbnb Cereal App Bold';
    font-style: normal;
    font-weight: normal;
    unicode-range: U+AC00-D7AF;
    src: local('Noto Sans KR'), url('/fonts/NotoSansKR-Bold.otf') format('opentype');
  } */

  * {
    box-sizing: border-box;

    -webkit-tap-highlight-color: transparent;
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #__next {
    width: 100%;
    height: 100%;
    -ms-overflow-style: none;
    word-break: keep-all;
  }

  body::-webkit-scrollbar,
  #__next::-webkit-scrollbar {
    display: none;
  }

  html {
    font-family: 'Airbnb Cereal App Bold', sans-serif;
    font-size: 25px;
    touch-action: manipulation;
    letter-spacing: -0.03rem;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    position: fixed;
    background-color: #ddd;
    /* background-color:#000; */
    /* font-weight: 400; */
    overscroll-behavior-y: none;
    /* overflow-y: auto; */
    direction: ltr;
  }
  #__next {
    position: relative;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .btn-default {
    -webkit-appearance: none;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .block {
    height: 4rem;
  }

  *:focus {
    outline: none;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
    padding: 0;
  }

  .Toaster {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 100;
    button {
      background: none;
      border: none;
      color: white;
    }
  }

  @media screen and (max-width: 1200px) {
    html {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    html {
      font-size: 15px;
    }
  }
`
