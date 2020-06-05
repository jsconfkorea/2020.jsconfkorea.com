/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Letter from './Letter'
import shortid from 'shortid'
import { memo } from 'react'

const str = `
JSCONF
KOREA 2020
HOME EDITION
`

const IntroTitle = memo(() => {
  return (
    <>
      <h1 css={style}>
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
    </>
  )
})

const style = css`
  font-family: 'Roboto Mono', monospace;
  span {
    display: inline-block;
    transition: transform 0.3s;
  }
`

export default IntroTitle
