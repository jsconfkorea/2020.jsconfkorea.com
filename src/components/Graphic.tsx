/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useState } from 'react'
import useInterval from '../hooks/useInterval'
import IntroHouse from './svgs/IntroHouse'

const Graphic = () => {
  const [count, setCount] = useState(0)
  const [dCount, setDCount] = useState(0)
  const [nextInterval, setInterval] = useState(3000)

  useInterval(() => {
    let c = count + 1
    const d = (dCount + 1) % 7
    if (d == 0) setInterval(2000)
    else setInterval(200)
    setDCount(d)
    if (c >= 10) c = 0
    setCount(c)
  }, nextInterval)

  return (
    <>
      <div id="graphic" css={style}>
        <IntroHouse num={count} />
      </div>
    </>
  )
}

const style = css`
  height: 100%;
  svg {
    width: 300px;
    height: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
  @media screen and (max-width: 767px) {
    svg {
      width: 50%;
    }
  }
`

export default Graphic
