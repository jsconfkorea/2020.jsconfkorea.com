/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useState, useEffect } from 'react'
import useInterval from '../hooks/useInterval'
import Letter from './Letter'
import shortid from 'shortid';

const str = `
JSCONF
KOREA 2020
HOME EDITION
`

const IntroTitle = () => {
  return (
    <>
      <h1 css={style}>
        {
          str.split("").map((s, i) => {
            const key = shortid.generate();
            if (s === " ") {
              return (<Letter key={key} letter="&nbsp;" num={i}></Letter>)
            } else if (s !== "\n") {
              return (<Letter key={key} letter={s} num={i}></Letter>)
            } else {
              return (<br key={key}/>)
            }
          })
        }
      </h1>
    </>
  )
}

const style = css`
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:ital,wght@1,100&display=swap');
font-family: 'Roboto Mono', monospace;
span{
  display:inline-block;
  transition:transform .3s;
}
`

export default IntroTitle
