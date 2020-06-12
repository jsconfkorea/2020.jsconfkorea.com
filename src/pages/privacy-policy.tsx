/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Header from '../components/Header'
import TopButton from '../components/TopButton'
import { useI18n } from '../hooks/useI18n'
import Markdown from '../components/Markdown'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {}

const COC = ({}: Props) => {
  const { t } = useI18n()
  return (
    <div css={style}>
      <Header></Header>
      <Markdown>{t('privacy-policy-md')}</Markdown>
      <TopButton></TopButton>
    </div>
  )
}

const style = css`
  padding: 5rem 0 5rem 0;
`

export default COC
