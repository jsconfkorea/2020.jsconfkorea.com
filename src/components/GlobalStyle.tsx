import { Global, css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'

const GlobalStyle = () => <Global styles={style} />

export default GlobalStyle

const style = css`
  ${emotionNormalize}

  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&family=Source+Code+Pro&display=swap');
  html,
  body,
  #__next {
    height: 100%;
    width: 100%;
    -ms-overflow-style: none;
  }
  body::-webkit-scrollbar,
  #__next::-webkit-scrollbar {
    display: none;
  }

  body {
    background-color: #a6a6a6;
    /* background-color:#000; */
    font-family: 'Noto Sans KR', sans-serif;
  }
  #__next {
    padding-top: 100px;
    box-sizing: border-box;
  }

  .btn-default {
    -webkit-appearance: none;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .block {
    height: 100px;
  }

  *:focus {
    outline: none;
  }
  .disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  a {
    text-decoration: none;
  }
`
