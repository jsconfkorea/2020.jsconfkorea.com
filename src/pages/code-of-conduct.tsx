/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Header from '../components/Header'
import TopButton from '../components/TopButton'
import { useI18n } from '../hooks/useI18n'
import Markdown from '../components/Markdown'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {}

const COC = ({ }: Props) => {
  const { t } = useI18n()
  return (
    <>
      <Markdown>{t('code-of-conduct-md')}</Markdown>
      <TopButton></TopButton>
      <Header></Header>
      <Markdown>{t('code-of-conduct-md')}</Markdown>
      <TopButton></TopButton>
    </>
  )
}

const style = css``

export default COC
