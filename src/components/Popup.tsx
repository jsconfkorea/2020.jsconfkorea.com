/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useState, forwardRef } from 'react'
import ReactDOM from 'react-dom'
import { useI18n } from '../hooks/useI18n'
import mailchimp from '../api/mailchimp'

type Props = {
  isShowing: boolean
  hide: (event: React.MouseEvent) => void
}

const Popup = ({ isShowing, hide }: Props, ref: any) => {
  const { t } = useI18n()
  const [emailAddress, setEmailAddress] = useState('')
  const [isSuccess, setIsSuccess] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mailchimp(emailAddress).then((res: { status: number; error: any }) => {
      if (res.status === 201) {
        setIsSuccess('ok')
      } else {
        setIsSuccess('fail')
        setErrorMsg(res.error)
      }
    })
  }

  if (isShowing) {
    return ReactDOM.createPortal(
      <div id="popup" css={style} className="active">
        <div className="inner">
          <form id="popup-form" ref={ref} onSubmit={handleOnSubmit}>
            <p id="popup-message">{t('input_email')}</p>
            <input
              id="email-input"
              type="email"
              placeholder="email address"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            {isSuccess === 'ok' && <p className="popup-notice">{t('success')}</p>}
            {isSuccess === 'fail' && <p className="popup-notice">{errorMsg}</p>}
            <button id="popup-submit" type="submit">
              {t('submit')}
            </button>
          </form>
          <button className="popup-close-button" onClick={hide} />
        </div>
      </div>,
      document.body,
    )
  } else {
    return null
  }
}

const style = css`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffffff33;
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0s 0.1s;
  z-index: 99;

  &.active {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.1s, visibility 0s;

    & > .inner {
      #popup-form {
        transform: translateY(0) scaleX(1) translateZ(0);
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
      }
    }
  }

  & > .inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);

    #popup-form {
      background: white;
      z-index: 10;
      padding: 70px 100px;
      max-width: 500px;
      box-sizing: border-box;
      background-color: #ff7235;
      border: solid 5px #ff7235;
      color: white;
      font-size: 0;
      transition: all 0.3s;
      z-index: 1;

      transform: translateY(10px) translateZ(0);
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3);

      input {
        width: 100%;
        display: block;
        background: rgba(0, 0, 0, 0.2);
        border: solid rgba(0, 0, 0, 0.2) 1px;
        color: #fff;
        outline: none;
        font-size: 20px;
        line-height: 30px;
        padding: 5px 10px;
        border-radius: 3px;
        margin-top: 20px;
        box-sizing: border-box;
        -webkit-appearance: none;
      }

      input::-webkit-input-placeholder {
        /* Edge */
        color: #ffffff99;
      }

      input:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: #ffffff99;
      }

      input::placeholder {
        color: #ffffff99;
      }
      #popup-message {
        color: #fff;
        font-size: 20px;
        line-height: 1.5em;
      }
      .popup-notice {
        color: #fff;
        font-size: 15px;
        line-height: 1.5em;
        padding: 5px 0;
        box-sizing: border-box;
        transition: height 0.2s;

        height: 0;
        opacity: 0;
        visibility: hidden;

        &.active {
          height: auto;
          opacity: 1;
          visibility: visible;
        }
      }

      button {
        display: block;
        border: solid 1px rgba(0, 0, 0, 0.1);
        color: #fff;
        background: #ff7235;
        width: 100%;

        margin-top: 15px;
        padding: 10px;
        outline: none;
        border-radius: 3px;
        font-size: 20px;

          cursor:pointer;
          transform:translate3d(0px,-6px,0);
          box-shadow:0px 6px 0 rgba(0,0,0,0.3);
          transition:transform .2s, box-shadow .2s;
        }
        button:hover, button:focus{
          transform:translate3d(0px,-4px,0);
          box-shadow:0px 4px 0 #ff7235;
        }
        button:active{
          transform:translate3d(0px,-2px,0);
          box-shadow:0px 2px 0 #ff7235;
        }
      }
      button:hover {
        transform: translate3d(0px, -4px, 0);
        box-shadow: 0px 4px 0 #ff7235;
      }
      button:active {
        transform: translate3d(0px, -2px, 0);
        box-shadow: 0px 2px 0 #ff7235;
      }
    }
  }

  .popup-close-button::before {
    content: 'x';
    color: #fff;
    font-size: 20px;
  }

  .popup-close-button {
    background-color: transparent;
    border: none;
    position: absolute;
    right: 10px;
    top: -20px;
    z-index: 9999;
  }

  @media screen and (max-width: 768px) {
    & > .inner #popup-form {
      width: calc(100vw - 25px);
      padding: 30px 30px;
      border: solid 3px #ff7235;
      box-shadow: 0px 0px 0 #ff7235;
    }
    &.active > .inner #popup-form {
      box-shadow: 6px 8px 0 #ff7235;
    }
  }
`

export default forwardRef(Popup)
