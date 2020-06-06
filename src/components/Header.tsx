/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Link from './Link'
import { useState } from 'react'
import ChangeLanguageLink from './ChangeLangaugeLink'
import { useI18n } from '../hooks/useI18n'
import FacebookIcon from './svgs/FacebookIcon'
import TwitterIcon from './svgs/TwitterIcon'
import InstagramIcon from './svgs/InstagramIcon'

type Props = {}

const Header = ({ }: Props) => {
  const { t } = useI18n()
  const [on, setOn] = useState(false)
  const func = () => {
    setOn((on) => !on)
  }

  return (
    <header css={style} className={on ? 'active' : ''}>
      <button id="btn-menu" className="btn-default" aria-label="menu" onClick={func}>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div id="btn-right">
        <div id="btn-lang">
          <ChangeLanguageLink lang="en">EN</ChangeLanguageLink>|<ChangeLanguageLink lang="ko">KR</ChangeLanguageLink>
        </div>
      </div>
      <nav>
        <ul className="menu-main">
          <li>
            <Link href="/">{t('home')}</Link>
          </li>
          <li>
            <Link href="/about">{t('about')}</Link>
          </li>
          <li>
            <Link href="/schedule" disabled>
              {t('schedule')}
            </Link>
          </li>
          <li>
            <Link href="/speakers" disabled>
              {t('speakers')}
            </Link>
          </li>
          <li>
            <Link href="/sponsors" disabled>
              {t('sponsors')}
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
        <a href="https://www.facebook.com/jsconfkorea" target="_blank" rel="noopener">
          <FacebookIcon />
        </a>
        <a href="https://twitter.com/jsconfkorea" target="_blank" rel="noopener">
          <TwitterIcon />
        </a>
        <a href="https://www.instagram.com/jsconf.korea/" target="_blank" rel="noopener">
          <InstagramIcon />
        </a>
      </div>
    </header>
  )
}

const style = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  border-bottom: solid 1px #333;
  background: #ddd;
  overflow: hidden;
  z-index: 99;
  height: 1rem;
  font-weight: 900;

  &.active {
    height: 100%;

    #btn-menu {
      & > div {
        & > span:nth-of-type(1) {
          transform: translateY(0px) rotate(45deg) translateZ(0);
        }
        & > span:nth-of-type(2) {
          opacity: 0;
        }
        & > span:nth-of-type(3) {
          transform: translateY(0px) rotate(-45deg) translateZ(0);
        }
      }
      &:hover,
      &:focus {
        span:nth-of-type(1) {
          transform: translateY(0px) rotate(40deg) translateZ(0);
        }
        span:nth-of-type(3) {
          transform: translateY(0px) rotate(-40deg) translateZ(0);
        }
      }
    }

    #btn-social {
      opacity: 1;
      visibility: visible;
    }
  }

  #btn-right {
    position: absolute;
    right: 0.28rem;
    top: 0.35rem;
    white-space: nowrap;

    & > * {
      vertical-align: top;
    }
  }
  #btn-lang {
    display: inline-block;
    font-size: 0.3rem;
    color: #333;
    transition: opacity 0.3s;
    & > a {
      margin: 0 0.1rem;
      color: #333;

      &:hover,
      &:focus {
        opacity: 0.5;
      }
    }
  }
  #btn-social {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    right: 0.3rem;
    bottom: 0.3rem;
    height: 0.4rem;
    font-size: 0;

    & > a {
      display: inline-block;
      height: 100%;
      margin-left: 0.2rem;
      transition: opacity 0.3s;
      svg {
        height: 100%;
      }
      &:hover,
      &:focus {
        opacity: 0.5;
      }
    }
  }

  #btn-menu {
    width: 1rem;
    height: 1rem;
    display: inline-block;
    padding: 0;
    position: absolute;
    & > div {
      width: 0.5rem;
      height: 0.22rem;
      margin: auto;
      span {
        display: block;
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #333;
        top: 0.1rem;
        transition: transform 0.3s;

        &:nth-of-type(1) {
          transform: translateY(-0.1rem) translateZ(0);
        }
        &:nth-of-type(2) {
          transition: opacity 0.3s;
        }
        &:nth-of-type(3) {
          transform: translateY(0.1rem) translateZ(0);
        }
      }
    }
    &:hover,
    &:focus {
      span:nth-of-type(1) {
        transform: translateY(-0.15rem) translateZ(0);
      }
      span:nth-of-type(3) {
        transform: translateY(0.15rem) translateZ(0);
      }
    }
  }

  nav {
    visibility: hidden;
    padding-top: 90px;
    position: absolute;
    left: 20%;
    top: 45%;
    transform: translateY(-50%) translateZ(0);
    visibility: hidden;
    opacity: 0;

    transition: opacity 0s, visibility 0s 0.5s;

    ul {
      padding: 0;
      list-style: none;
      margin: 0;

      &.menu-main {
        font-size: 0.5rem;
        line-height: 1.5em;

        .disabled {
          opacity: 0.5;
          cursor: not-allowed;
          /* pointer-events: none; */
        }
      }

      &.menu-docs {
        font-size: 0.25rem;
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
          transform: translateY(-0.1rem) translateZ(0);
        }


      }

      li:nth-of-type(4n + 1) a:not(.disabled):hover,
      li:nth-of-type(4n + 1) a:not(.disabled):focus {
        background: #ff7235;
        border: solid 1px #ff7235;
        box-shadow: 0 0.1rem 0 #e64500;
      }
      li:nth-of-type(4n + 2) a:not(.disabled):hover,
      li:nth-of-type(4n + 2) a:not(.disabled):focus {
        background: #2d68ff;
        border: solid 1px #2d68ff;
        box-shadow: 0 0.1rem 0 #0041e6;
      }
      li:nth-of-type(4n + 3) a:not(.disabled):hover,
      li:nth-of-type(4n + 3) a:not(.disabled):focus {
        background: #efc325;
        border: solid 1px #efc325;
        box-shadow: 0 0.1rem 0 #d5ab10;
      }
      li:nth-of-type(4n) a:not(.disabled):hover,
      li:nth-of-type(4n) a:not(.disabled):focus {
        background: #00e168;
        border: solid 1px #00e168;
        box-shadow: 0 0.1rem 0 #00b353;
      }
    }
  }

  &.active nav {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.5s, visibility 0s;
  }

  @media screen and (max-width: 768px) {
  }
`

export default Header
