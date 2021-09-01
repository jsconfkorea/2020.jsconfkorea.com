/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const ScrollArrow = () => (
  <svg css={style} version="1.1" x="0px" y="0px" viewBox="0 0 16 39.9" style={{ background: 'new 0 0 16 39.9' }}>
    <path
      className="st0"
      d="M15.7,30.8c-0.4-0.4-1-0.4-1.4,0L9,36.1V1c0-0.6-0.4-1-1-1S7,0.4,7,1v35.1l-5.3-5.3c-0.4-0.4-1-0.4-1.4,0
	s-0.4,1,0,1.4l7,7l0,0L8,39.9l0.7-0.7l0,0l7-7C16.1,31.8,16.1,31.2,15.7,30.8z"
    />
  </svg>
)
const style = css`
  .st0 {
    fill: #333333;
  }
`

export default ScrollArrow
