/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const FacebookIcon = () => (
  <svg css={style} version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style={{ background: 'new 0 0 100 100' }}>
    <g>
      <path
        className="st0"
        d="M85.4,0H14.9C6.8,0,0.2,6.5,0.2,14.6v70.5c0,8.1,6.5,14.6,14.6,14.6h29.4V64.5H32.6V47h11.7V35.1
		c0-9.7,7.9-17.5,17.5-17.5h17.7v17.5H61.8V47h17.7l-2.9,17.5H61.8v35.3h23.6c8.1,0,14.6-6.5,14.6-14.6V14.6C100,6.5,93.5,0,85.4,0z
		"
      />
    </g>
  </svg>
)

const style = css`
  .st0 {
    fill: #333333;
  }
`

export default FacebookIcon
