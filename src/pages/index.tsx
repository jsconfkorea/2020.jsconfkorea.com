/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useI18n } from '../hooks/useI18n'
import Header from '../components/Header'
import CodeViewer from '../components/CodeViewer'
import Link from '../components/Link'
import Head from 'next/head'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {}

const Index = ({ }: Props) => {
  const { t, activeLanguage } = useI18n()

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
              <Link href="/" className="btn-default block">
                {t('look_back_2019')}
              </Link>
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
              <Link href="/" className="btn-default block">
                {t('news_letter')}
              </Link>
            </div>
          </div>
        </section>
      </div>
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
    }
  }

  #main-buttons {
    & > div {
      display: flex;

      & > div {
        position: relative;
        height: 100px;
        flex: 1;

        a {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
          text-align: center;
          color: #fff;
          font-size: 50px;
          line-height: 100px;
          font-weight: 900;
          transition: all 0.3s;

          cursor: pointer;

          &:hover {
            height: 130px;
            line-height: 130px;
          }
        }
      }

      #btn-lookback {
        flex: 2;
        & > a {
          background: #2d68ff;
        }
      }
      #btn-cfp {
        & > a {
          background: #00e168;
        }
      }
      #btn-sponsor {
        flex: 2;
        & > a {
          background: #efc325;
        }
      }
      #btn-newsletter {
        flex: 3;
        & > a {
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
          a {
            height: 50px;
            font-size: 20px;
            line-height: 50px;
            &:hover {
              height: 70px;
              line-height: 70px;
            }
          }
        }
      }
    }
  }
`

export default Index
