/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Markdown from 'react-markdown'
import { useI18n } from '../hooks/useI18n'
import Link from '../components/Link'
import { useState } from 'react'
import Header from '../components/Header'
import CodeViewer from '../components/CodeViewer'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {}

const Index = ({ }: Props) => {
  const { t, locale, activeLanguage } = useI18n()
  console.log(activeLanguage)

  return (
    <>
      <Header></Header>
      <div css={style}>
        <section id="intro">
          <canvas id="three"></canvas>
          <h1>
            <p>JSCONF</p>
            <p>KOREA 2020</p>
            <p>HOME EDITION</p>
          </h1>
          <CodeViewer></CodeViewer>
        </section>
        <section id="main-buttons">
          <div><div id="btn-lookback" className="col"><button className="btn-default block">LOOK BACK 2019</button></div><div id="btn-cfp" className="col"><button className="btn-default block">CFP</button></div></div>
          <div><div id="btn-sponsor" className="col"><button className="btn-default block">SPONSOR</button></div><div id="btn-newsletter" className="col"><button className="btn-default block">NEWS LETTER</button></div></div>
        </section>
      </div>
      <script src="/threejs/three.min.js"></script>
      <script src="/threejs/modules.js"></script>
      <script src="/threejs/index.js"></script>
      <script src="/threejs/typo.js"></script>
    </>

  )
}

const style = css`
  height:100%;

  #intro{
    position:relative;
    height:100%;

    canvas{
      position:fixed;
      bottom:0;
      left:0;
      width:100%;
      height:100%;
    }

    h1{
      position:absolute;
      bottom:30px;
      right:30px;

      color:#fff;
      font-size:100px;
      letter-spacing:-0.05em;
      line-height:1em;
      text-align:right;
      
      margin:0;

      p{
        margin:0;
      }
    }
  }

  #main-buttons{

    &>div{
      display:flex;

      &>div{
        position:relative;
        height:100px;
        flex:1;

        button{
          position:absolute;
          bottom:0;
          left:0;
          width:100%;
          height:100px;
          text-align:center;
          color:#fff;
          font-size:50px;
          line-height:100px;
          font-weight:900;
          transition:all .3s;

          cursor:pointer;

          &:hover{
            height:130px;
            line-height:130px;
          }
        }
      }

      #btn-lookback{ 
        flex:2; 
        &>button{background:#2D68FF;}
      }
      #btn-cfp{ 
         
        &>button{background:#00E168;}
      }
      #btn-sponsor{ 
        flex:2; 
        &>button{background:#EFC325;}
      }
      #btn-newsletter{ 
        flex:3; 
        &>button{background:#FF7235;}
      }
    }    
  }

`


export default Index
