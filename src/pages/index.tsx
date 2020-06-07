/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useRef } from 'react'
import { useI18n } from '../hooks/useI18n'
import { useScroll } from '../hooks/useScroll'
import { useModal } from '../hooks/useModal'
import { useOnClickOutside } from '../hooks/useOnClickOutside'
import Header from '../components/Header'
import Popup from '../components/Popup'
import Graphic from '../components/Graphic'
import CodeViewer from '../components/CodeViewer'
import IntroTitle from '../components/IntroTitle'
import Link from '../components/Link'
import Head from 'next/head'
import ScrollArrow from '../components/svgs/ScrollArrow'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {}

const Index = ({}: Props) => {
  const ref = useRef<HTMLFormElement>(null)
  const { t, activeLanguage } = useI18n()
  const { y } = useScroll()
  const { isShowing, toggle, close } = useModal()

  useOnClickOutside(ref, close)

  return (
    <>
      <Head>{/* <script src="/threejs/three.min.js"></script> */}</Head>
      <Header></Header>
      <div css={style}>
        <section id="intro" className={y > 60 ? 'scrollup' : ''}>
          <Graphic></Graphic>
          <IntroTitle></IntroTitle>
        </section>
        <section id="main-buttons">
          <div>
            <div id="btn-lookback">
              <div className="btn-default">
                <span>{t('look_back_2019')}</span>
                <div className="inner">
                  <a href="https://2019.jsconfkorea.com/" className="btn-default block" target="_blank" rel="noopener">
                    {t('website')}
                  </a>
                  <a
                    href="https://www.youtube.com/playlist?list=PL8vHvcFj-bKrg-fp-4bnawVf5y30mi5xd"
                    className="btn-default block"
                    target="_blank"
                  >
                    {t('video')}
                  </a>
                </div>
              </div>
            </div>
            <div id="btn-newsletter">
              <button className="btn-default" onClick={popupActivate}>
                {t('news_letter')}
              </button>
            </div>
          </div>
          <div>
            <div id="btn-sponsor">
              <Link href="/" className="btn-default">
                {t('sponsor')}
              </Link>
            </div>
            <div id="btn-cfp">
              <Link href="/call-for-proposals" className="btn-default">
                {t('cfp')}
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Popup ref={ref} isShowing={isShowing} hide={toggle} />
      {/* <script defer src="/threejs/modules.js"></script>
      <script defer src="/threejs/index.js"></script>
      <script defer src="/threejs/typo.js"></script> */}
    </>
  )
}

const style = css`
  height: 100%;

  #intro {
    position: relative;
    height: calc(100% - 2rem);

    iframe {
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
      top: 0.3rem;
      left: 0.3rem;

      color: #333;
      font-size: 0.75rem;
      letter-spacing: -0.05em;
      line-height: 1em;
      /* text-align: right; */

      margin: 0;

      p {
        margin: 0;
      }
    }

    #scroll {
      position: fixed;
      bottom: 0.3rem;
      left: 0.3rem;
      color: #333;
      transition: opacity 0.3s;

      div {
        font-size: 0.15rem;
      }

      svg {
        display: relative;
        width: 0.3rem;
        animation: loop 0.7s infinite alternate forwards;
      }

      @keyframes loop {
        form {
          transform: translateY(0) translateZ(0);
        }
        to {
          transform: translateY(-10px) translateZ(0);
        }
      }
    }
    &.scrollup > #scroll {
      opacity: 0;
    }
  }

  #main-buttons {
    & > div {
      display: flex;

      & > div {
        position: relative;
        height: 1rem;
        flex: 1;
        font-size: 0;

        button,
        a,
        span {
          display: inline-block;
          width: 100%;
          text-align: center;
          color: #fff;
          font-size: 0.5rem;
          line-height: 1rem;
          font-weight: 900;
        }

        button,
        a {
          transform: translateY(0) translateZ(0);
          transition: all 0.3s;
          &:hover, &:focus {
            transform: translateY(-10px) translateZ(0);
            box-shadow: 0 10px 0 rgba(0, 0, 0, 0.3);
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

          & > .inner {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: all 0.3s;
            transform: translateY(100%) translateZ(0);
          }

          &:hover > .inner, &:focus > .inner {
            transform: translateY(0) translateZ(0);
          }
        }
      }

      #btn-lookback {
        flex: 4;
        background: #2d68ff;
        height: 1rem;
        a {
          background: #2d68ff;
          width: 50%;
          height: 1rem;
        }
      }
      #btn-cfp {
        flex: 4;
        background: #00e168;
        a {
          background: #00e168;
          height: 1rem;
        }
      }
      #btn-sponsor {
        flex: 3;
        background: #efc325;
        a {
          background: #efc325;
          height: 1rem;
        }
      }
      #btn-newsletter {
        flex: 3;
        background: #ff7235;
        button {
          background: #ff7235;
          height: 1rem;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    #intro {
      h1 {
        bottom: 0.2rem;
        right: 0.2rem;
        font-size: 0.45rem;
      }
    }
    #main-buttons {
      & > div {
        & > div {
          button,
          a,
          span {
            font-size: 0.35rem;
            line-height: 1rem;
          }
        }
      }
    }
  }
`

export default Index
