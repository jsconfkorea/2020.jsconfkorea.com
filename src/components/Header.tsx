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
      <div id="btn-right">
        <div id="btn-lang">
          <ChangeLanguageLink lang="en">EN</ChangeLanguageLink>|<ChangeLanguageLink lang="ko">KR</ChangeLanguageLink>
        </div>
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
      <div id="btn-social">
        <Link href="/"><img src="/images/icon-facebook.svg"></img></Link>
        <Link href="/"><img src="/images/icon-twitter.svg"></img></Link>
        <Link href="/"><img src="/images/icon-instagram.svg"></img></Link>
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
    #btn-social {
      opacity:1;
      visibility:visible;
    }
  }

  #btn-right{
    position: absolute;
    right: 0.28rem;
    top: 0.35rem;
    white-space:nowrap;

    &>*{
      vertical-align:top;
    }
  }
  #btn-lang {
    display:inline-block;
    font-size: 0.3rem;
    color: #333;
    & > a {
      margin: 0 0.1rem;
      color: #333;
    }
    
  }
  #btn-social {
    position:absolute;
    opacity:0;
    visibility:hidden;
    right:0.3rem;
    bottom:0.3rem;
    height:0.4rem;
    font-size:0;

    &>a{
      display:inline-block;
      height:100%;
      margin-left:0.2rem;
      transition:opacity .3s;
      img{
        height:100%;
      }
      &:hover{
        opacity:.5;
      }
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
      background-color: #333;
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
        line-height: 1.5em;
      }

      &.menu-docs {
        font-size: 0.25rem;
        line-height: 1.5em;
        margin-top: 20px;
      }

      a {
        display:inline-block;
        text-decoration: none;
        transition: all 0.4s;
        padding:0 10px;
        background:#ddd;
        border:solid 1px transparent;

        &:link,
        &:visited {
          color: #333;
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
