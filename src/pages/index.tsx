/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useRef } from 'react'
import { useI18n } from '../hooks/useI18n'
import { useOnClickOutside } from '../hooks/useOnClickOutside'
import Header from '../components/Header'
import Graphic from '../components/Graphic'
import IntroTitle from '../components/IntroTitle'
import Link from '../components/Link'
import Popup from '../components/Popup'
import { useDisclosure } from '@chakra-ui/core'
import { NextSeo } from 'next-seo'
import { title, description, thumb, siteName } from './_app'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {}

const Index = () => {
  const { t, activeLanguage: lang } = useI18n()
  const ref = useRef<HTMLFormElement>(null)
  const { isOpen, onClose, onOpen } = useDisclosure()

  useOnClickOutside(ref, onClose)

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          images: [{ url: thumb, alt: siteName }],
          locale: lang,
        }}
      />
      <div css={style}>
        <Header></Header>
        <section id="intro">
          <Graphic></Graphic>
          <IntroTitle></IntroTitle>
        </section>
        <section id="main-buttons">
          <div>
            <div id="btn-lookback">
              <div className="btn-default">
                <span>{t('look_back_2019')}</span>
                <div className="inner">
                  <a href="/redirect/2019-website" className="btn-default block" target="_blank" rel="noopener">
                    {t('website')}
                  </a>
                  <a href="/redirect/2019-videos" className="btn-default block" target="_blank" rel="noopener">
                    {t('video')}
                  </a>
                </div>
              </div>
            </div>
            <div id="btn-newsletter">
              <button className="btn-default" onClick={onOpen}>
                {t('newsletter')}
              </button>
            </div>
          </div>
          <div>
            <div id="btn-sponsor">
              <Link href="/sponsors" className="btn-default">
                {t('sponsors')}
              </Link>
            </div>
            <div id="btn-cfp">
              <Link href="/speakers" className="btn-default">
                {t('speakers')}
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Popup ref={ref} isShowing={isOpen} close={onClose} />
    </>
  )
}

const style = css`
  padding-top: 4rem;
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

    #scroll {
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
          transition: all 0.3s;
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
        flex: 3.3;
        background: #ff7235;
        button {
          background: #ff7235;
          height: 4rem;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
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
