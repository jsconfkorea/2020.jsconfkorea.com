/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Markdown from 'react-markdown'
import { useI18n } from '../hooks/useI18n'
import Link from '../components/Link'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {}

const Index = ({ }: Props) => {
  const { t, locale, activeLanguage } = useI18n()
  console.log(activeLanguage)
  return (
    <div css={style}>
      <h1 onClick={e => {
        console.log('123')
      }}>{t('hello_world')}</h1>
      <span className="test">test</span>
      <Link href="/" lang="ko">
        ko
      </Link>
      <br></br>
      <Link href="/" lang="en">
        en
      </Link>
      <Markdown>{t('about')}</Markdown>
    </div>
  )
}

const style = css`
  color: red;
  h1 {
    color: blue;
  }
  .test {
    color: green;
  }
`


export default Index
