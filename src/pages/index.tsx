/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useRef } from 'react'
import { useI18n } from '../hooks/useI18n'
import { useScroll } from '../hooks/useScroll'
import { useModal } from '../hooks/useModal'
import { useOnClickOutside } from '../hooks/useOnClickOutside'
import Header from '../components/Header'
import Graphic from '../components/Graphic'
import IntroTitle from '../components/IntroTitle'
import Link from '../components/Link'
import Popup from '../components/Popup'
import Head from 'next/head'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {}

const Index = ({ }: Props) => {
  const { t } = useI18n()
  const { y } = useScroll()
  const ref = useRef<HTMLFormElement>(null)
  const { isShowing, toggle, close } = useModal()

  useOnClickOutside(ref, close)

  return (
    <>
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
                    rel="noopener"
                  >
                    {t('video')}
                  </a>
                </div>
              </div>
            </div>
            <div id="btn-newsletter">
              <button className="btn-default" onClick={toggle}>
                {t('newsletter')}
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
      <Popup ref={ref} isShowing={isShowing} close={close} />
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
    height: calc(100% - 8rem);

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
      top: 1.2rem;
      left: 1.2rem;

      color: #333;
      font-size: 3rem;
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
      bottom: 1.2rem;
      left: 1.2rem;
      color: #333;
      transition: opacity 0.3s;

      div {
        font-size: 0.6rem;
      }

      svg {
        display: relative;
        width: 1.2rem;
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
        height: 4rem;
        flex: 1;
        font-size: 0;

        button,
        a,
        span {
          display: inline-block;
          width: 100%;
          text-align: center;
          color: #fff;
          font-size: 2rem;
          line-height: 4rem;
          font-weight: 900;
        }

        button,
        a {
          transform: translateY(0) translateZ(0);
          transition: all 0.3s;
          &:hover,
          &:focus {
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

          &:hover > .inner,
          &:focus > .inner {
            transform: translateY(0) translateZ(0);
          }
        }
      }

      #btn-lookback {
        flex: 4;
        background: #2d68ff;
        height: 4rem;
        a {
          background: #2d68ff;
          width: 50%;
          height: 4rem;
        }
      }
      #btn-cfp {
        flex: 4;
        background: #00e168;
        a {
          background: #00e168;
          height: 4rem;
        }
      }
      #btn-sponsor {
        flex: 3;
        background: #efc325;
        a {
          background: #efc325;
          height: 4rem;
        }
      }
      #btn-newsletter {
        flex: 3;
        background: #ff7235;
        button {
          background: #ff7235;
          height: 4rem;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    #intro {
      h1 {
        bottom: 0.8rem;
        right: 0.8rem;
        font-size: 1.8rem;
      }
    }
    #main-buttons {
      & > div {
        & > div {
          button,
          a,
          span {
            font-size: 1.4rem;
            line-height: 4rem;
          }
        }
      }
    }
  }
`

export default Index
