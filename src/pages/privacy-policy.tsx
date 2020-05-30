/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Markdown from 'react-markdown'
import Header from '../components/Header'
import { useI18n } from '../hooks/useI18n'
import ChangeLanguageLink from '../components/ChangeLangaugeLink'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {}

const COC = ({ }: Props) => {
  const { t } = useI18n()
  return (
    <>
      <Header></Header>
      <div className="doc" css={style}>
        <Markdown>{t('privacy-policy-md')}</Markdown>
      </div>
    </>
  )
}

const style = css``

export default COC
