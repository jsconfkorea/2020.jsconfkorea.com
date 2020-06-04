/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Link from './Link'
import { useState } from 'react'
import { useI18n } from '../hooks/useI18n'

type Props = {
  className?: string
  active?: boolean
}

const Popup = (props: Props) => {
  const { t } = useI18n()
  const [on, setOn] = useState(false)
  const func = () => {
    setOn((on) => !on)
  }

  return (
    <div id="popup" css={style} className={props.active ? 'active' : ''}>
      <div className="inner">
        <form id="popup-form">
          <p id="popup-message">Please enter your e-mail address</p>
          <input id="email-input" type="email" placeholder="email address"></input>
          <div id="popup-notice" className="">Incorrect format</div>
          <button id="popup-submit" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

const style = css`
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background:#ffffff33;
  z-index:10;
  opacity:0;
  visibility: hidden;
  transition:opacity .3s, visibility 0s .1s;
  z-index:99;

  &.active{
    opacity:1;
    visibility: visible;
    transition:opacity .1s, visibility 0s;

    &>.inner{
      #popup-form{
        transform:translateY(0) scaleX(1) translateZ(0);
        box-shadow: 0px 10px 10px rgba(0,0,0,0.3);
      }
    }
  }

  &>.inner{
      position: absolute;;
      top:50%;
      left:50%;
      transform:translate3d(-50%,-50%,0);

      #popup-form{
        background:white;
        z-index: 10;
        padding:70px 100px;
        max-width:500px;
        box-sizing:border-box;
        background-color: #ff7235;
        border:solid 5px #ff7235;
        color:white;
        font-size:0;
        transition:all .3s;
        z-index: 1;

        transform:translateY(10px) translateZ(0);
        box-shadow: 0px 0px 0px rgba(0,0,0,0.3);

        input{
            width:100%;
            display:block;
            background:rgba(0,0,0,0.2);
            border:solid rgba(0,0,0,0.2) 1px;
            color:#fff;
            outline:none;
            font-size:20px;
            line-height:30px;
            padding:5px 10px;
            border-radius:3px;
            margin-top:20px;
            box-sizing: border-box;;
            -webkit-appearance: none;
        }

        input::-webkit-input-placeholder { /* Edge */
          color: #ffffff99;
        }

        input:-ms-input-placeholder { /* Internet Explorer 10-11 */
          color: #ffffff99;
        }

        input::placeholder {
          color: #ffffff99;
        }
        #popup-message{
          color:#fff;
          font-size:20px;
          line-height:1.5em;
        }
        #popup-notice{
          color:#fff;
          font-size:15px;
          line-height:1.5em;
          padding:5px 0;
          box-sizing:border-box;
          transition:height .2s;

          height:0;
          opacity:0;
          visibility:hidden;

          &.active{
            height:auto;
            opacity:1;
            visibility:visible;
          }
        }

        button{
          display:block;
          border:solid 1px rgba(0,0,0,0.1);
          color:#fff;
          background:#ff7235;
          width:100%;

          margin-top:15px;
          padding:10px;
          outline:none;
          border-radius:3px;
          font-size:20px;

          cursor:pointer;
          transform:translate3d(0px,-6px,0);
          box-shadow:0px 6px 0 rgba(0,0,0,0.3);
          transition:transform .2s, box-shadow .2s;
        }
        button:hover{
          transform:translate3d(0px,-4px,0);
          box-shadow:0px 4px 0 #ff7235;
        }
        button:active{
          transform:translate3d(0px,-2px,0);
          box-shadow:0px 2px 0 #ff7235;
        }
      }
  }





  @media screen and (max-width:768px){
    &>.inner #popup-form{
      width:calc(100vw - 25px);
      padding:30px 30px;
      border:solid 3px #ff7235;
      box-shadow: 0px 0px 0 #ff7235;
    }
    &.active>.inner #popup-form{
      box-shadow: 6px 8px 0 #ff7235;
    }
  }
`

export default Popup