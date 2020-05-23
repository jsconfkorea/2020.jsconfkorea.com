/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Markdown from 'react-markdown'
import { useI18n } from '../hooks/useI18n'
import Link from '../components/Link'
import Footer from '../components/Footer'
import { useState } from 'react'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {}

const Index = ({ }: Props) => {
  const [on, setOn] = useState(false)
  const { t, locale, activeLanguage } = useI18n()
  console.log(activeLanguage)
  const func = () => {
    setOn(on => !on);
  }
  return (
    <>
      <div css={style}>
        <Footer toGreen={true}></Footer>
        <h1 className={on ? 'green' : ''} onClick={func}>{t('hello_world')}</h1>
        <span className="test">test</span>
        <Link href="/" lang="ko">
          ko
      </Link>
        <br></br>
        <Link href="/" lang="en">
          en
      </Link>
        <div>

          <Markdown>{t('about')}</Markdown>
        </div>
      </div>
      <canvas id="three"></canvas>
      <script src="/threejs/index.js"></script>
    </>

  )
}

const style = css`
  color: red;
  & > h1 {
    color: blue;
  }
  div {
    & > h1 {
      color: green;
    }
  }
  .test {
    color: green;
  }
  .green {
    color: green;
  }
`


export default Index
