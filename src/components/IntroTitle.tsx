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
      <h1 css={titleStyle}>
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
      <div css={dateStyle}>
        {d.split('').map((s, i) => {
          const key = shortid.generate()
          if (s === ' ') {
            return <Letter key={key} letter="&nbsp;" num={i}></Letter>
          } else if (s !== '\n') {
            return <Letter key={key} letter={s} num={i}></Letter>
          } else {
            return <br key={key} />
          }
        })}
      </div>
    </>
  )
})

const titleStyle = css`
  position: absolute;
  top: 1.2rem;
  left: 1.2rem;

  color: #333;
  font-size: 3rem;
  font-weight: 900;
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
    top: 0.8rem;
    left: 0.8rem;
    font-size: 1.8rem;
  }
`

const dateStyle = css`
  position: absolute;
  bottom: 1.2rem;
  right: 1.2rem;

  color: #333;
  font-size: 3rem;
  letter-spacing: -0.05em;
  line-height: 1em;
  font-weight: 900;
  text-align: right;

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
    bottom: 0.8rem;
    right: 0.8rem;
    font-size: 1.8rem;
  }
`

export default IntroTitle
