/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useState, useEffect, useRef } from 'react'
import useInterval from '../hooks/useInterval'
import useRequestAnimationFrame from '../hooks/useRequestAnimationFrame'

type Props = {
  letter: string
  num: number
}

const Letter = (props: Props) => {
  const requestRef = useRef();
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[],.<>?/~';
  let l = characters.charAt(Math.floor(Math.random() * characters.length));
  const [letter, setLetter] = useState("#")
  const [color, setColor] = useState({ color: "#333", transform: "skewY(-10deg) translateZ(0)" })
  const [count, setCount] = useState(Math.floor(/*Math.random() * 5 + */props.num + 30))
  const colors = ["#2d68ff", "#00e168", "#efc325", "#ff7235"];

  useInterval(() => {
    if (count <= 0) {
      setLetter(props.letter);
      setColor({ color: "#333", transform: "skewY(0) translateZ(0)" });
    }
    else if (count <= 5) {
      setLetter(characters.charAt(Math.floor(Math.random() * characters.length)));
      setColor({ color: colors[Math.floor(Math.random() * colors.length)], transform: "skewY(-10deg) translateZ(0)" });
      setCount(count - 1);
    }
    else {
      setCount(count - 1);
    }
  }, 150)

  const reset = () => {
    setCount(6);
  }


  return (
    <>
      <span style={color} onMouseEnter={reset}>{letter}</span>
    </>
  )
}



export default Letter
