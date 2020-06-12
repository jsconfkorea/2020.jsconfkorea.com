/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useState } from 'react'
import useInterval from '../hooks/useInterval'

const codes = `
  class Map_ {
    constructor(gap) {
      this.gap = gap;
    }
  
    generate(col, row) {
      let col_half = this.gap * col / 2;
      let row_half = this.gap * row / 2;
      for (let z = -row_half; z <= row_half; z += this.gap) {
        for (let x = -col_half; x <= col_half; x += this.gap) {
          let b = new Building(new THREE.Vector3(x, -1, z));
          b.generate();
        }
      }
    }
  
    clear() {
      while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
      }
    }
  }

  function random(a, b) {
    if (b) return Math.random() * (b - a) + a;
    else return Math.random() * a;
  }
`

const { length } = codes

const CodeViewer = () => {
  const [code, setCode] = useState(codes)
  const [slice, setSlice] = useState(1)

  useInterval(() => {
    setCode(codes.slice(0, slice))
    //if (slice > length + 300) (window as any).resetMap()
    setSlice((slice) => (slice > length + 300 ? 1 : slice + 2))
  }, 10)

  return (
    <>
      <div css={style}>{code} </div>
    </>
  )
}

const style = css`
  position: absolute;
  max-width: 768px;
  max-height: 80%;
  left: 20px;
  top: 20px;
  color: #333;
  font-size: 15px;
  line-height: 1.2em;
  font-family: 'Source Code Pro', monospace;
  overflow: hidden;
  white-space: pre;

  @media screen and (max-width: 768px) {
    font-size: 10px;
    left: 10px;
    top: 10px;
    width: calc(100% - 20px);
  }
`

export default CodeViewer
