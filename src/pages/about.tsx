/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { GetStaticPaths } from 'next'
import Header from '../components/Header'
import Markdown from 'react-markdown'
import { useI18n } from '../hooks/useI18n'
import ChangeLanguageLink from '../components/ChangeLangaugeLink'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {}

const About = ({ }: Props) => {
  const { t } = useI18n()
  return (
    <>
      <Header></Header>
      <div className="doc" css={style}>
        <Markdown>{t('about-md')}</Markdown>
      </div>
    </>
  )
}
const style = css``

export default About
