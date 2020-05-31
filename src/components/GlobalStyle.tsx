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
  ul{
    list-style:none;
    padding:0;
  }

  .doc{
    margin:0 auto 100px;
    max-width:800px;
    color:#fff;

    h1:first-child{
      margin-top:100px;
      margin-bottom:50px;
      font-size:35px;
    }
    h1{
      margin-top:80px;
      margin-bottom:25px;
      font-size:25px;
    }
    p{
      margin-top:15px;
      font-size:15px;
      line-height:1.5em;
    }
    ul{
      margin-top:30px;
      margin-bottom:30px;
    }
    li {
      margin-top: 10px;
      font-size: 15px;
      line-height: 1.5em;
      border-radius: 3px;
    }
    ul li{
      border: solid 1px #fff;
      padding: 10px 15px;
    }
    a{
      color:#fff;
      border-bottom:solid 1px #fff;
    }
  }

  @media screen and (max-width:768px){
    .block {
      height: 60px;
    }

    .doc{
      margin: 0 15px 50px;
       h1{
        margin-top:50px;
        margin-bottom:20px;
        font-size:20px;
        line-height:1.5em;
      }
      p{
        margin-top:15px;
        font-size:15px;
        line-height:1.5em;
      }
      ul{
        margin-top:20px;
        margin-bottom:20px;
      }
      li{
        margin-top:10px;
        font-size:15px;
        line-height: 1.5em;
      }

      ul li{
        padding:10px;
        border-radius: 8px;
      }
    }
  }
`
