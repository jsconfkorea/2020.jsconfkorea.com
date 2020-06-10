import { Global, css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'

const GlobalStyle = () => <Global styles={style} />

export default GlobalStyle

const style = css`
  ${emotionNormalize}

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
  }

  body::-webkit-scrollbar,
  #__next::-webkit-scrollbar {
    display: none;
  }

  html {
    font-family: 'Noto Sans KR', 'Roboto Mono', sans-serif;
    font-size: 25px;
    touch-action: manipulation;
  }
  body {
    position: fixed;
    background-color: #ddd;
    /* background-color:#000; */
    font-weight: 400;
    overscroll-behavior-y: none;
    /* overflow-y: auto; */
    direction: ltr;
    -moz-osx-font-smoothing: grayscale;
  }
  #__next {
    position: relative;
    overflow-y: auto;
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
