/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Link from './Link'
import { useState } from 'react'

type Props = {
  toGreen?: boolean
}

const Header = ({ toGreen }: Props) => {
  const [on, setOn] = useState(false);
  const func = () => {
    setOn(on => !on);
  }

  return (
    <header css={style} className={on ? "block active" : "block"}>
      <button id="btn-menu" className="btn-default" onClick={func}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div id="btn-lang">
        <button className="btn-default">EN</button>|<button className="btn-default">KR</button>
      </div>
      <nav>
        <ul className="menu-main">
          <li><Link href="/">ABOUT</Link></li>
          <li className="disabled"><Link href="/">SCHEDULE</Link></li>
          <li className="disabled"><Link href="/">SPEAKER</Link></li>
          <li className="disabled"><Link href="/">SPONSORS</Link></li>
        </ul>
        <ul className="menu-docs">
          <li><Link href="/">Code of Conduct</Link></li>
          <li><Link href="/">Privacy Policy</Link></li>
        </ul>
      </nav>
    </header>
  )
}

const style = css`
  position:fixed;
  top:0;
  left:0;
  right:0;

  border-bottom: solid 1px #fff;
  background:#A6A6A6;
  /* background-color:#000; */
  overflow:hidden;
  z-index:99;

  &.active{
    height:100%;

    #btn-menu{
      &>span:nth-child(1){
        transform:translateY(0px) rotate(45deg);
      }
      &>span:nth-child(2){
        opacity:0;
      }
      &>span:nth-child(3){
        transform:translateY(0px) rotate(-45deg);
      }

      &:hover{
        &>span:nth-child(1){
          transform:translateY(0px) rotate(40deg);
        }
        &>span:nth-child(3){
          transform:translateY(0px) rotate(-40deg);
        }
      }
    }
  }

  #btn-lang{
    font-size:30px;
    color:#fff;

    position:absolute;
    right:28px;
    top:35px;

    &>button{
      color:#fff;
      font-weight:900;
    }
  }

  #btn-menu{

    width:50px;
    height:20px;
    left:28px;
    top:40px;

    position:absolute;

    span{
      display:block;
      position:absolute;
      width:100%;
      height:2px;
      background-color:#fff;
      top:10px;
      transition:transform .3s;

      &:nth-child(1){
        transform:translateY(-10px);
      }
      &:nth-child(2){
        transition:opacity .3s;
      }
      &:nth-child(3){
        transform:translateY(10px);
      }
    }

    &:hover{
      &>span:nth-child(1){
        transform:translateY(-15px);
      }
      &>span:nth-child(3){
        transform:translateY(15px);
      }
    }
  }

  nav{
    visibility:hidden;
    padding-top:90px;
    position:absolute;
    left:20%;
    top:45%;
    transform:translateY(-50%);
    visibility:hidden;
    opacity:0;

    transition:opacity .0s, visibility 0s .5s;
    

    ul{
      padding:0;
      list-style:none;
      margin:0;

      &.menu-main{
        font-size:50px;
        font-weight:900;
        line-height:1.5em;
      }

      &.menu-docs{
        font-size:25px;
        font-weight:900;
        line-height:1.5em;
        margin-top:20px;
      }

      a{
        text-decoration:none;
        transition:letter-spacing .4s;

        &:link, &:visited{
          color:#fff;
        } 

        &:hover{
          letter-spacing:0.2em;
        }
      }


    }


  }

  &.active nav{
    visibility:visible;
    opacity:1;
    transition:opacity .5s, visibility 0s;
  }
`

export default Header
