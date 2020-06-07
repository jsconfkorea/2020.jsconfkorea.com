/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Header from '../components/Header'
import TopButton from '../components/TopButton'
import { useI18n } from '../hooks/useI18n'
import ChangeLanguageLink from '../components/ChangeLangaugeLink'
import Markdown from '../components/Markdown'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {}

const COC = ({ }: Props) => {
  const { t } = useI18n()
  return (
    <>
      <Header></Header>
      <Markdown>{t('privacy-policy-md')}</Markdown>
      <TopButton></TopButton>
    </>
  )
}

const style = css``

export default COC
