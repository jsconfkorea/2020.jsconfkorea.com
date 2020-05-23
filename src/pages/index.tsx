/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Markdown from 'react-markdown'
import { useI18n } from '../hooks/useI18n'
import ChangeLanguageLink from '../components/ChangeLangaugeLink'
import Link from '../components/Link'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {}

const Index = ({}: Props) => {
  const { t } = useI18n()
  return (
    <div css={style}>
      <h1>{t('hello_world')}</h1>
      <ChangeLanguageLink lang="ko">ko</ChangeLanguageLink>
      <br></br>
      <ChangeLanguageLink lang="en">en</ChangeLanguageLink>
      <div>This is Index page!</div>
      <Link href="/about">about page</Link>
    </div>
  )
}

const style = css``

export default Index
