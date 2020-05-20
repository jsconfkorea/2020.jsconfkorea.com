/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { GetStaticPaths } from 'next'
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

export default Index
