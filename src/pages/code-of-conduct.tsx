/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Markdown from 'react-markdown'
import { useI18n } from '../hooks/useI18n'
import ChangeLanguageLink from '../components/ChangeLangaugeLink'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {}

const COC = ({}: Props) => {
  const { t } = useI18n()
  return (
    <div css={style}>
      <ChangeLanguageLink lang="ko">ko</ChangeLanguageLink>
      <br></br>
      <ChangeLanguageLink lang="en">en</ChangeLanguageLink>
      <Markdown>{t('code-of-conduct-md')}</Markdown>
    </div>
  )
}

const style = css``

export default COC
