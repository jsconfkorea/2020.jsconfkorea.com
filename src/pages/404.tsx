/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Header from '../components/Header'
import NotFoundSVG from '../components/svgs/NotFound'
import { useI18n } from '../hooks/useI18n'

export { default as getStaticProps } from '../utils/getStaticProps'

const NotFound = () => {
  const { t } = useI18n()
  return (
    <>
      <Header></Header>
      <div css={style}>
        <NotFoundSVG />
        <p>404 Not Found</p>
      </div>
    </>
  )
}

const style = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  svg {
    display: block;
    width: 200px;
    margin: 0 auto;
  }
  p {
    font-size: 28px;
    text-align: center;
    font-weight: 900;
    color: #aaa;
  }
`

export default NotFound
