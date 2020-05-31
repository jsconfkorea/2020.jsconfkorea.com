/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Link from './Link'
import { useState } from 'react'
import ChangeLanguageLink from './ChangeLangaugeLink'
import { useI18n } from '../hooks/useI18n'

type Props = {}

const Header = ({ }: Props) => {
  const { t } = useI18n()
  const [on, setOn] = useState(false)
  const func = () => {
    setOn((on) => !on)
  }

  return (
    <header css={style} className={on ? 'block active' : 'block'}>
      <button id="btn-menu" className="btn-default" onClick={func}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div id="btn-lang">
        <ChangeLanguageLink lang="en">EN</ChangeLanguageLink>|<ChangeLanguageLink lang="ko">KR</ChangeLanguageLink>
      </div>
      <nav>
        <ul className="menu-main">
          <li>
            <Link href="/index">{t('home')}</Link>
          </li>
          <li>
            <Link href="/about">{t('about')}</Link>
          </li>
          <li className="disabled">
            <Link href="/schedule">{t('schedule')}</Link>
          </li>
          <li className="disabled">
            <Link href="/speakers">{t('speakers')}</Link>
          </li>
          <li className="disabled">
            <Link href="/sponsors">{t('sponsors')}</Link>
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
    </header>
  )
}

const style = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  border-bottom: solid 1px #fff;
  background: #555;
  overflow: hidden;
  z-index: 99;

  &.active {
    height: 100%;

    #btn-menu {
      & > span:nth-of-type(1) {
        transform: translateY(0px) rotate(45deg);
      }
      & > span:nth-of-type(2) {
        opacity: 0;
      }
      & > span:nth-of-type(3) {
        transform: translateY(0px) rotate(-45deg);
      }

      &:hover {
        & > span:nth-of-type(1) {
          transform: translateY(0px) rotate(40deg);
        }
        & > span:nth-of-type(3) {
          transform: translateY(0px) rotate(-40deg);
        }
      }
    }
  }

  #btn-lang {
    font-size: 0.3rem;
    color: #fff;
    position: absolute;
    right: 0.28rem;
    top: 0.35rem;

    & > a {
      margin: 0 0.1rem;
      color: #fff;
      font-weight: 900;
    }
  }

  #btn-menu {
    width: 0.5rem;
    height: 0.22rem;
    left: 0.36rem;
    top: 0.40rem;

    position: absolute;

    padding: 0;
    span {
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #fff;
      top: 0.1rem;
      transition: transform 0.3s;

      &:nth-of-type(1) {
        transform: translateY(-0.1rem);
      }
      &:nth-of-type(2) {
        transition: opacity 0.3s;
      }
      &:nth-of-type(3) {
        transform: translateY(0.1rem);
      }
    }

    &:hover {
      & > span:nth-of-type(1) {
        transform: translateY(-0.15rem);
      }
      & > span:nth-of-type(3) {
        transform: translateY(0.15rem);
      }
    }
  }

  nav {
    visibility: hidden;
    padding-top: 90px;
    position: absolute;
    left: 20%;
    top: 45%;
    transform: translateY(-50%);
    visibility: hidden;
    opacity: 0;

    transition: opacity 0s, visibility 0s 0.5s;

    ul {
      padding: 0;
      list-style: none;
      margin: 0;

      &.menu-main {
        font-size: 0.5rem;
        font-weight: 900;
        line-height: 1.5em;
      }

      &.menu-docs {
        font-size: 0.25rem;
        font-weight: 900;
        line-height: 1.5em;
        margin-top: 20px;
      }

      a {
        display:inline-block;
        text-decoration: none;
        transition: all 0.4s;
        padding:0 10px;
        background:#555;
        border:solid 1px transparent;

        &:link,
        &:visited {
          color: #fff;
        }

        &:hover {
          border:solid 1px rgba(0,0,0,0.3);
          box-shadow:0 10px 0 rgba(0,0,0,0.3);
          transform:translateY(-0.1rem);
        }
      }
    }
  }

  &.active nav {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.5s, visibility 0s;
  }

  @media screen and (max-width:768px){

  }
`

export default Header
