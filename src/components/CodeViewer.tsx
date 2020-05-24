/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Link from './Link'
import { useState } from 'react'

const CodeViewer = () => {
  let codes = `
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
  
`;

  let elems = [];

  for (let i = 0; i < codes.length; i++) {
    let s = codes[i];
    elems.push((() => {
      if (s == " ") return (<span>&nbsp;</span>);
      else if (s != "\n") return (<span>{s}</span>);
      else return (<br />);
    })());
  }

  return (
    <div id="code-viewer" css={style}>
      {elems}
    </div>
  )
}

const style = css`
    position:absolute;
    max-width:50%;
    max-height:80%;
    left:20px;
    top:20px;
    color:#fff;
    font-size:15px;
    line-height:1.2em;
    font-family: 'Source Code Pro', monospace;
    overflow:hidden;

    span{
      opacity:0;
      &.active{
        opacity:1;
      }
    }
`

export default CodeViewer
