/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Letter from './Letter'
import shortid from 'shortid'
import { memo } from 'react'

const str = `JSCONF KOREA 2020
HOME EDITION`

const d = `ONLINE
2020.9.20`

const IntroTitle = memo(() => {
  return (
    <>
      <h1 css={title_style}>
        {str.split('').map((s, i) => {
          const key = shortid.generate()
          if (s === ' ') {
            return <Letter key={key} letter="&nbsp;" num={i}></Letter>
          } else if (s !== '\n') {
            return <Letter key={key} letter={s} num={i}></Letter>
          } else {
            return <br key={key} />
          }
        })}
      </h1>
      <div id="date" css={date_style}>{d.split('').map((s, i) => {
        const key = shortid.generate()
        if (s === ' ') {
          return <Letter key={key} letter="&nbsp;" num={i}></Letter>
        } else if (s !== '\n') {
          return <Letter key={key} letter={s} num={i}></Letter>
        } else {
          return <br key={key} />
        }
      })}</div>
    </>
  )
})

const title_style = css`
    position: absolute;
    top: 0.3rem;
    left: 0.3rem;

    color: #333;
    font-size: 0.75rem;
    font-weight:900;
    letter-spacing: -0.05em;
    line-height: 1em;

    margin: 0;

    p {
      margin: 0;
    }

    font-family: 'Noto Sans KR', sans-serif;

    span {
      display: inline-block;
      transition: transform 0.3s;
    }


  @media screen and (max-width: 768px) {
    top: 0.2rem;
    left: 0.2rem;
    font-size: 0.45rem;
  }
`

const date_style = css`
  position: absolute;
  bottom: 0.3rem;
  right: 0.3rem;

  color: #333;
  font-size: 0.75rem;
  letter-spacing: -0.05em;
  line-height: 1em;
  font-weight:900;
  text-align:right;

  margin: 0;

  p {
    margin: 0;
  }

  font-family: 'Noto Sans KR', sans-serif;

  span {
    display: inline-block;
    transition: transform 0.3s;
  }


  @media screen and (max-width: 768px) {
    bottom: 0.2rem;
    right: 0.2rem;
    font-size: 0.45rem;
  }
`

export default IntroTitle
