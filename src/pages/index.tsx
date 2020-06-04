/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useState } from 'react'
import { useI18n } from '../hooks/useI18n'
import { useScroll } from '../hooks/useScroll'
import Header from '../components/Header'
import Popup from '../components/Popup'
import Graphic from '../components/Graphic'
import CodeViewer from '../components/CodeViewer'
import IntroTitle from '../components/IntroTitle'
import Link from '../components/Link'
import Head from 'next/head'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {}

const Index = ({ }: Props) => {
  const { t, activeLanguage } = useI18n()
  const { y } = useScroll()

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
        <section id="intro" className={y > 60 ? "scrollup" : ""}>
          {/* <Graphic></Graphic> */}
          {/* <iframe src="https://codepen.io/turtlefingers/live/MWaNLqJ"></iframe> */}
          {/* <CodeViewer></CodeViewer> */}
          <IntroTitle></IntroTitle>
          <div id="scroll"><img src="/images/arrow-scroll.svg"></img><div>scroll</div></div>
        </section>
        <section id="main-buttons">
          <div>
            <div id="btn-lookback">
              <div className="btn-default">
                <span>{t('look_back_2019')}</span>
                <div className="inner">
                  <Link href="/" className="btn-default">
                    {t('website')}
                  </Link>
                  <Link href="/" className="btn-default">
                    {t('video')}
                  </Link>
                </div>
              </div>
            </div>
            <div id="btn-cfp">
              <Link href="/call-for-proposals" className="btn-default">
                {t('cfp')}
              </Link>
            </div>
          </div>
          <div>
            <div id="btn-sponsor">
              <Link href="/" className="btn-default">
                {t('sponsor')}
              </Link>
            </div>
            <div id="btn-newsletter">
              <button className="btn-default" onClick={popupActivate}>
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

    iframe{
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    canvas {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    h1 {
      position: fixed;
      bottom: 0.3rem;
      right: 0.3rem;

      color: #333;
      font-size: 1rem;
      letter-spacing: -0.05em;
      line-height: 1em;
      text-align: right;

      margin: 0;

      p {
        margin: 0;
      }
    }

    #scroll{
      position: fixed;
      bottom: 0.3rem;
      left: 0.3rem;
      color:#333;
      transition:opacity .3s;

      div{
        font-size:0.15rem;
      }

      img{
        display:relative;
        width:0.3rem;
        animation:loop .7s infinite alternate forwards;
      }

      @keyframes loop{
        form{transform:translateY(0) translateZ(0);}
        to{transform:translateY(-10px) translateZ(0);}
      }
    }
    &.scrollup>#scroll{
      opacity:0;
    }

    h1{
      transition:opacity .3s;
    }
    &.scrollup>h1{
      opacity:0;
    }
  }

  #main-buttons {
    & > div {
      display: flex;

      & > div {
        position: relative;
        height: 1rem;
        flex: 1;
        font-size:0;

        button, a, span{
          display:inline-block;
          width:100%;
          text-align: center;
          color: #fff;
          font-size: 0.5rem;
          line-height: 1rem;
          font-weight:400;
        }

        button, a{
          transform:translateY(0) translateZ(0);
          transition: all .3s;
          &:hover{
            transform:translateY(-10px) translateZ(0);
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
            transform:translateY(100%) translateZ(0);

          }

          &:hover>.inner{
            transform:translateY(0) translateZ(0);
          }
        }
      }



      #btn-lookback {
        flex: 2;
        background: #2d68ff;
        height: 1rem;
        a{
          background: #2d68ff;
          width:50%;
          height: 1rem;
        }
      }
      #btn-cfp {
        background: #00e168;
        a{
          background: #00e168;
          height: 1rem;
        }
      }
      #btn-sponsor {
        flex: 2;
        background: #efc325;
        a{
          background: #efc325;
          height: 1rem;
        }
      }
      #btn-newsletter {
        flex: 3;
        background: #ff7235;
        button{
          background: #ff7235;
          height: 1rem;
        }
      }
    }
  }

  @media screen and (max-width:768px){
    #intro {
      h1 {
        bottom: 0.2rem;
        right: 0.2rem;
        font-size: 0.5rem;
      }
    }
    #main-buttons {
      & > div {
        & > div {

          button, a, span{
            font-size: 0.35rem;
            line-height: 1rem;
          }
        }
      }
    }
  }
`

export default Index
