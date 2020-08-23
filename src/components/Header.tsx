/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Link from './Link'
import { useState, useEffect } from 'react'
import ChangeLanguageLink from './ChangeLangaugeLink'
import { useI18n } from '../hooks/useI18n'
import FacebookIcon from './svgs/FacebookIcon'
import TwitterIcon from './svgs/TwitterIcon'
import InstagramIcon from './svgs/InstagramIcon'
import YoutubeIcon from './svgs/YoutubeIcon'
import GithubIcon from './svgs/GithubIcon'
import { AnimatePresence, motion } from 'framer-motion'
import { useDisclosure } from '@chakra-ui/core'

type Props = {}

const Header = () => {
  const { t } = useI18n()
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    if (isOpen) document.querySelector('#__next')?.setAttribute('style', 'overflow-y:hidden;')
    else document.querySelector('#__next')?.setAttribute('style', 'overflow-y:auto;')
  }, [isOpen])

  return (
    <>
      <header css={style} className={isOpen ? 'active' : ''}>
        <button className={`hamburger hamburger--spin ${isOpen ? 'is-active' : ''}`} type="button" onClick={onToggle}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <div id="btn-right">
          <div id="btn-lang">
            <ChangeLanguageLink lang="en">EN</ChangeLanguageLink>
            <span>|</span>
            <ChangeLanguageLink lang="ko">KR</ChangeLanguageLink>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div css={navStyle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div>
              <nav>
                <ul className="menu-main">
                  <li>
                    <Link href="/">{t('home')}</Link>
                  </li>
                  <li>
                    <Link href="/about">{t('about')}</Link>
                  </li>
                  <li>
                    <a href="/ticket" target="_blank" rel="noopener">
                      {t('rsvp')}
                    </a>
                  </li>
                  <li>
                    <Link href="/speakers">{t('speakers')}</Link>
                  </li>
                  <li>
                    <Link href="/sponsors">{t('sponsors')}</Link>
                  </li>
                  <li>
                    <Link href="/schedule" disabled>
                      {t('schedule')}
                    </Link>
                  </li>
                </ul>
                <ul className="menu-docs">
                  <li>
                    <Link href="/code-of-conduct">{t('code_of_conduct')}</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">{t('privacy_policy')}</Link>
                  </li>
                </ul>
              </nav>
              <div id="btn-social">
                <a href="/redirect/facebook" target="_blank" rel="noopener">
                  <FacebookIcon />
                </a>
                <a href="/redirect/instagram" target="_blank" rel="noopener">
                  <InstagramIcon />
                </a>
                <a href="/redirect/twitter" target="_blank" rel="noopener">
                  <TwitterIcon />
                </a>
                <a href="/redirect/youtube" target="_blank" rel="noopener">
                  <YoutubeIcon />
                </a>
                <a href="/redirect/github" target="_blank" rel="noopener">
                  <GithubIcon />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const style = css`
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  right: 0;

  border-bottom: solid 1px rgba(3, 3, 3, 1);
  background: #ddd;
  overflow: hidden;
  z-index: 11;
  height: 4rem;
  font-weight: 900;
  transition: all 0.35s ease-in-out;

  &.active {
    border-bottom: solid 1px rgba(3, 3, 3, 0);

    #btn-social {
      opacity: 1;
      visibility: visible;
    }
  }

  #btn-right {
    position: absolute;
    right: 1.12rem;
    top: 1.4rem;
    white-space: nowrap;

    & > * {
      vertical-align: top;
    }
  }
  #btn-lang {
    display: inline-block;
    font-size: 1.2rem;
    color: #333;
    transition: opacity 0.3s;
    & > span {
      display: inline-block;
      transform: translateY(-1px);
    }
    & > a {
      margin: 0 0.4rem;
      color: #333;

      &:hover,
      &:focus {
        opacity: 0.5;
      }
    }
  }

  .hamburger {
    width: 4rem;
    height: 4rem;
    display: inline-block;
    padding: 0;
    .hamburger-box {
      margin: auto;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 35px;
      .hamburger-inner,
      .hamburger-inner::before,
      .hamburger-inner::after {
        width: 100%;
        height: 3px;
      }
      .hamburger-inner {
        margin-top: 0;
        &::before {
        }
        &::after {
        }
      }
    }
  }

  @media screen and (min-width: 769px) {
    .hamburger {
      .hamburger-box {
        width: 45px;
        .hamburger-inner,
        .hamburger-inner::before,
        .hamburger-inner::after {
          width: 100%;
          height: 4px;
        }
        .hamburger-inner {
          &::before {
            top: -14px;
          }
          &::after {
            bottom: -14px;
          }
        }
      }
      &.is-active {
        .hamburger-inner {
          &::before {
            top: 0;
          }
          &::after {
            bottom: 0;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1201px) {
    .hamburger {
      .hamburger-box {
        width: 60px;
        .hamburger-inner,
        .hamburger-inner::before,
        .hamburger-inner::after {
          width: 100%;
          height: 4px;
        }
        .hamburger-inner {
          &::before {
            top: -18px;
          }
          &::after {
            bottom: -18px;
          }
        }
      }
      &.is-active {
        .hamburger-inner {
          &::before {
            top: 0;
          }
          &::after {
            bottom: 0;
          }
        }
      }
    }
  }
`

const navStyle = css`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: #ddd;
  font-weight: 900;
  & > div {
    height: 100%;
    position: relative;
    nav {
      position: fixed;
      padding-top: 90px;
      top: 45%;
      left: 20%;
      transform: translateY(-50%);

      ul {
        padding: 0;
        list-style: none;
        margin: 0;

        &.menu-main {
          font-size: 2rem;
          line-height: 1.5em;

          .disabled {
            opacity: 0.5;
            cursor: not-allowed;
            /* pointer-events: none; */
          }
        }

        &.menu-docs {
          font-size: 1rem;
          line-height: 1.5em;
          margin-top: 20px;
        }

        a {
          display: inline-block;
          text-decoration: none;
          transition: all 0.4s;
          padding: 0 20px;
          background: transparent;
          border: solid 1px transparent;

          &:link,
          &:visited {
            color: #333;
          }

          &:not(.disabled):hover,
          &:not(.disabled):focus {
            color: #eee;
            transform: translateY(-0.4rem) translateZ(0);
          }
        }

        li:nth-of-type(4n + 1) a:not(.disabled):hover,
        li:nth-of-type(4n + 1) a:not(.disabled):focus {
          background: #ff7235;
          border: solid 1px #ff7235;
          box-shadow: 0 0.4rem 0 #e64500;
        }
        li:nth-of-type(4n + 2) a:not(.disabled):hover,
        li:nth-of-type(4n + 2) a:not(.disabled):focus {
          background: #2d68ff;
          border: solid 1px #2d68ff;
          box-shadow: 0 0.4rem 0 #0041e6;
        }
        li:nth-of-type(4n + 3) a:not(.disabled):hover,
        li:nth-of-type(4n + 3) a:not(.disabled):focus {
          background: #efc325;
          border: solid 1px #efc325;
          box-shadow: 0 0.4rem 0 #d5ab10;
        }
        li:nth-of-type(4n) a:not(.disabled):hover,
        li:nth-of-type(4n) a:not(.disabled):focus {
          background: #00e168;
          border: solid 1px #00e168;
          box-shadow: 0 0.4rem 0 #00b353;
        }
      }
    }
    #btn-social {
      z-index: 11;
      position: absolute;
      /* height: 100%; */
      /* width: 100%; */
      /* visibility: hidden; */
      right: 0.5rem;
      bottom: 1rem;

      & > a {
        /* width: 2.5rem; */
        height: 2rem;
        width: 2rem;
        margin-right: 1rem;
        display: inline-block;
        /* margin-left: 0.8rem; */
        transition: opacity 0.3s;
        svg {
          width: 100%;
          height: 100%;
        }
        &:hover,
        &:focus {
          opacity: 0.5;
        }
      }
    }
  }
`

export default Header
