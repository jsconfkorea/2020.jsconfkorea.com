/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Header from '../components/Header'
import { useI18n } from '../hooks/useI18n'
import Markdown from '../components/Markdown'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {}

const CFP = ({}: Props) => {
  const { t } = useI18n()
  return (
    <>
      <Header></Header>
      <Markdown>{t('call-for-proposals-md')}</Markdown>
    </>
  )
}

const style = css``

export default CFP
