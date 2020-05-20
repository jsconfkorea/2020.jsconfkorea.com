/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { GetStaticProps, GetStaticPaths } from 'next'
import Markdown from 'react-markdown'
import { useI18n } from '../hooks/useI18n'
import ChangeLanguageLink from '../components/ChangeLangaugeLink'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {}

const Index = ({}: Props) => {
  const { t } = useI18n()
  return (
    <div css={style}>
      <ChangeLanguageLink lang="ko">ko</ChangeLanguageLink>
      <br></br>
      <ChangeLanguageLink lang="en">en</ChangeLanguageLink>
      <Markdown>{t('about')}</Markdown>
    </div>
  )
}
const style = css``

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { lang: 'ko' } }, { params: { lang: 'en' } }],
    fallback: true,
  }
}

export default Index
