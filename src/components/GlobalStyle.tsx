import { Global, css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'

const GlobalStyle = () => <Global styles={style} />

export default GlobalStyle

const style = css`
  ${emotionNormalize}

  * {
    box-sizing: border-box;
    transform: translateZ(0);
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
    font-size: 100px;
  }
  body {
    background-color: #ddd;
    /* background-color:#000; */
    font-weight: 400;
  }
  #__next {
    padding-top: 1rem;
  }

  .btn-default {
    -webkit-appearance: none;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .block {
    height: 1rem;
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

  @media screen and (max-width: 1200px) {
    html {
      font-size: 80px;
    }
  }

  @media screen and (max-width: 768px) {
    html {
      font-size: 60px;
    }
  }
`
