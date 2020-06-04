/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useState, useEffect } from 'react'
import useInterval from '../hooks/useInterval'
import Letter from './Letter'

const str = `
JSCONF
KOREA 2020
HOME EDITION
`

const IntroTitle = () => {
  let typo = [];
  for (let i = 0; i < str.length; i++) {
    let s = str[i];
    let n = i;
    typo.push((() => {
      if (s == " ") return (<Letter letter="&nbsp;" num={n}></Letter>)
      else if (s != "\n") return (<Letter letter={s} num={n}></Letter>)
      else return (<br />)
    })());
  }

  return (
    <>
      <h1 css={style}>{typo}</h1>
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
