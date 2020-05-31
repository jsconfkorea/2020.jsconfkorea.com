/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useState } from 'react'
import { useI18n } from '../hooks/useI18n'
import Header from '../components/Header'
import Popup from '../components/Popup'
import CodeViewer from '../components/CodeViewer'
import Link from '../components/Link'
import Head from 'next/head'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {}

const Index = ({ }: Props) => {
  const { t, activeLanguage } = useI18n()

  const [popupActive, setActive] = useState(false)
  const popupActivate = () => {
    setActive((popupActive) => !popupActive)
  }

  return (
    <>
      <Head>
        <script src="/threejs/three.min.js"></script>
      </Head>
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
          <div id="scroll"><img src="/images/arrow-scroll.svg"></img><div>scroll</div></div>
        </section>
        <section id="main-buttons">
          <div>
            <div id="btn-lookback">
              <div className="btn-default block">
                <span>{t('look_back_2019')}</span>
                <div className="inner">
                  <Link href="/" className="btn-default block">
                    {t('website')}
                  </Link>
                  <Link href="/" className="btn-default block">
                    {t('video')}
                  </Link>
                </div>
              </div>
            </div>
            <div id="btn-cfp">
              <Link href="/call-for-proposals" className="btn-default block">
                {t('cfp')}
              </Link>
            </div>
          </div>
          <div>
            <div id="btn-sponsor">
              <Link href="/" className="btn-default block">
                {t('sponsor')}
              </Link>
            </div>
            <div id="btn-newsletter">
              <button className="btn-default block" onClick={popupActivate}>
                {t('news_letter')}
              </button>
            </div>
          </div>
        </section>
      </div>
      <Popup active={popupActive}></Popup>
      <script defer src="/threejs/modules.js"></script>
      <script defer src="/threejs/index.js"></script>
      <script defer src="/threejs/typo.js"></script>
    </>
  )
}

const style = css`
  height: 100%;

  #intro {
    position: relative;
    height: 100%;

    canvas {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    h1 {
      position: absolute;
      bottom: 30px;
      right: 30px;

      color: #fff;
      font-size: 100px;
      letter-spacing: -0.05em;
      line-height: 1em;
      text-align: right;

      margin: 0;

      p {
        margin: 0;
      }
    }

    #scroll{
      position: absolute;
      bottom: 30px;
      left: 30px;
      color:white;


      div{
        font-weight:bold;
      }

      img{
        display:relative;
        animation:loop .7s infinite alternate forwards;
      }

      @keyframes loop{
        form{transform:translateY(0)}
        to{transform:translateY(-10px)}
      }
    }
  }

  #main-buttons {
    & > div {
      display: flex;

      & > div {
        position: relative;
        height: 100px;
        flex: 1;

        button, a, span{
          display:inline-block;
          width:100%;
          text-align: center;
          color: #fff;
          font-size: 50px;
          line-height: 100px;
          font-weight: 900;
        }

        button, a{
          transform:translateY(0);
          transition: all .3s;
          &:hover{
            transform:translateY(-10px);
            box-shadow:0 10px 0 rgba(0,0,0,0.3);
          }
        }

        & > * {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: all 0.3s;
          cursor: pointer;

          &>.inner{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: all 0.3s;
            transform:translateY(100%);

          }

          &:hover>.inner{
            transform:translateY(0);
          }
        }
      }



      #btn-lookback {
        flex: 2;
        background: #2d68ff;
        a{
          background: #2d68ff;
          width:50%;
        }
      }
      #btn-cfp {
        background: #00e168;
        a{
          background: #00e168;
        }
      }
      #btn-sponsor {
        flex: 2;
        background: #efc325;
        a{
          background: #efc325;
        }
      }
      #btn-newsletter {
        flex: 3;
        background: #ff7235;
        button{
          background: #ff7235;
        }
      }
    }
  }

  @media screen and (max-width:768px){
    #intro {
      h1 {
        bottom: 20px;
        right: 20px;
        font-size: 25px;
      }
      #scroll{
        img{
          width:20px;
          height:auto;
        }
        div{
          font-size:10px;
        }
      }
    }

    #main-buttons {
      & > div {
        & > div {
          height: 50px;
          a,button,span {
            height: 50px;
            font-size: 20px;
            line-height: 50px;
          }
        }
      }
    }
  }
`

export default Index
