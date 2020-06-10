import { Global, css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'

const GlobalStyle = () => <Global styles={style} />

export default GlobalStyle

const style = css`
  ${emotionNormalize}

  * {
    box-sizing: border-box;
    transform: translateZ(0);

    -webkit-tap-highlight-color: transparent;
  }

  html,
  body,
  #__next {
    height: 100%;
    width: 100%;
    -ms-overflow-style: none;
    transform: none;
  }

  body::-webkit-scrollbar,
  #__next::-webkit-scrollbar {
    display: none;
  }

  html {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 25px;
  }
  body {
    background-color: #ddd;
    /* background-color:#000; */
    font-weight: 400;
  }
  #__next {
    padding-top: 4rem;
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
