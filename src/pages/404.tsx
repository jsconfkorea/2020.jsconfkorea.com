/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Header from '../components/Header'
import { useI18n } from '../hooks/useI18n'

const NotFound = () => {
  const { t } = useI18n()
  return (
    <>
      <Header></Header>
      <div css={style}>
        <img src="/images/404_gray.svg"></img>
        <p>404 Not Found</p>
      </div>
    </>
  )
}

const style = css`
  position: absolute;
  left:50%;
  top:50%;
  transform:translate3d(-50%,-50%,0);
  img{
    display:block;
    width:200px;
    margin:0 auto;
  }
  p{
    font-size:28px;
    text-align:center;
    font-weight:900;
    color:#aaa;
  }
`

export default NotFound
