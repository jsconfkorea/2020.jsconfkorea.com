/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useState, useEffect } from 'react'
import useInterval from '../hooks/useInterval'

const Graphic = () => {
  const [count, setCount] = useState(Math.floor(Math.random() * 10))
  const [dCount, setDCount] = useState(0)
  const [nextInterval, setInterval] = useState(3000)

  useInterval(() => {
    let c = count + 1;
    let d = (dCount + 1) % 7;
    if (d == 0) setInterval(2000);
    else setInterval(200);
    setDCount(d);
    if (c >= 10) c = 0;
    setCount(c)

  }, nextInterval)
  return (
    <>
      <div id="graphic" css={style}>
        <img src={"/images/intro_" + count + ".svg"}></img>
      </div>
    </>
  )
}

const style = css`
  height: 100%;
  img{
    width:300px;
    height:auto;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate3d(-50%,-50%,0);
  }
  @media screen and (max-width:768px){
    img{
      width:50%;
    }
  }
`

export default Graphic
