/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Header from '../components/Header'
import TopButton from '../components/TopButton'
import { useI18n } from '../hooks/useI18n'
import Markdown from '../components/Markdown'
import Teams from '../components/Teams'
import { Box } from '../components/MotionChakra'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {}

const About = () => {
  const { t } = useI18n()
  return (
    <Box css={style} p="5rem 0">
      <Header></Header>
      <Markdown>{t('about-md')}</Markdown>
      <Teams />
      <TopButton></TopButton>
    </Box>
  )
}
const style = css`
  img[alt='2019_thumbnail'] {
    display: block;
    margin: -2rem 0 2rem -1rem;
    width: calc(100% + 30px);

    @media screen and (min-width: 768px) {
      margin: -45px 0 2rem -30px;
      width: calc(100% + 60px);
    }

    @media screen and (min-width: 1200px) {
      margin: -45px 0 2rem -30px;
      width: calc(100% + 60px);
    }
  }
`

export default About
