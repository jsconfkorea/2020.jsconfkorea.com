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
            <Link href="/">{t('home')}</Link>
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
  background: #a6a6a6;
  /* background-color:#000; */
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
    font-size: 30px;
    color: #fff;

    position: absolute;
    right: 28px;
    top: 35px;

    & > a {
      margin: 0 0.5rem;
      color: #fff;
      font-weight: 900;
    }
  }

  #btn-menu {
    width: 50px;
    height: 22px;
    left: 36px;
    top: 40px;

    position: absolute;

    padding: 0;
    span {
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #fff;
      top: 10px;
      transition: transform 0.3s;

      &:nth-of-type(1) {
        transform: translateY(-10px);
      }
      &:nth-of-type(2) {
        transition: opacity 0.3s;
      }
      &:nth-of-type(3) {
        transform: translateY(10px);
      }
    }

    &:hover {
      & > span:nth-of-type(1) {
        transform: translateY(-15px);
      }
      & > span:nth-of-type(3) {
        transform: translateY(15px);
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
        font-size: 50px;
        font-weight: 900;
        line-height: 1.5em;
      }

      &.menu-docs {
        font-size: 25px;
        font-weight: 900;
        line-height: 1.5em;
        margin-top: 20px;
      }

      a {
        text-decoration: none;
        transition: letter-spacing 0.4s;

        &:link,
        &:visited {
          color: #fff;
        }

        &:hover {
          letter-spacing: 0.2em;
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
    
    #btn-lang {
      font-size: 20px;
      right: 15px;
      top: 20px;
    }

    #btn-menu {
      width: 30px;
      height: 16px;
      left: 15px;
      top: 22px;

      span {
        top: 8px;
        &:nth-of-type(1) {
          transform: translateY(-6px);
        }
        &:nth-of-type(3) {
          transform: translateY(6px);
        }
      }

      &:hover {
        & > span:nth-of-type(1) {
          transform: translateY(-8px);
        }
        & > span:nth-of-type(3) {
          transform: translateY(8px);
        }
      }
    }
    nav {
      padding-top:0;
      ul {
        &.menu-main {
          font-size: 25px;
        }

        &.menu-docs {
          font-size: 15px;
          margin-top: 10px;
        }
      }
    }

  }
`

export default Header
