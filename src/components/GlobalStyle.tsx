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

  html{
    font-size:100px;
  }
  body {
    background-color: #555;
    /* background-color:#000; */
    font-family: 'Noto Sans KR', sans-serif;
  }
  #__next {
    padding-top: 1rem;
    box-sizing: border-box;
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

    h1{
      margin-top:80px;
      margin-bottom:25px;
      font-size:25px;

      &:first-child{
        margin-top:50px;
        margin-bottom:50px;
        font-size:35px;
      }
    }
    h2{
      margin-top:60px;
      margin-bottom:20px;
      font-size:20px;
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
    blockquote {
      margin:0;
      padding:10px 20px;
      background-color:rgba(0,0,0,0.15);
      border:solid 2px rgba(0,0,0,0.1);
    }
  }

  @media screen and (max-width:1200px){
    html{
      font-size:80px;
    }
  }

  @media screen and (max-width:768px){
    html{
      font-size:60px;
    }
    .doc{
      margin: 0 15px 50px;
      h1{
        margin-top:50px;
        margin-bottom:20px;
        font-size:20px;
        line-height:1.5em;

        &:first-child{
          font-size:30px;
          margin-top:30px;
        }
      }
      h2{
        margin-top:40px;
        margin-bottom:15px;
        font-size:16px;
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
