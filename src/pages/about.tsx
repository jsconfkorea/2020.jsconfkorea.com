/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Header from '../components/Header'
import TopButton from '../components/TopButton'
import { useI18n } from '../hooks/useI18n'
import Markdown from '../components/Markdown'
import Teams from '../components/Teams'
import { Box } from '../components/MotionChakra'
import { NextSeo } from 'next-seo'
import { siteName, WEBSITE_URL_WITH_YEAR, WEBSITE_URL } from './_app'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {}

const About = () => {
  const { t, activeLanguage: lang } = useI18n()
  const title = `${siteName} | ${t(`about`)}`
  const description = t('about_description')

  return (
    <Box css={style} p="5rem 0">
      <NextSeo
        title={title}
        description={description}
        canonical={`${WEBSITE_URL_WITH_YEAR}/${lang}/about`}
        openGraph={{
          title,
          description,
          images: [{ url: `${WEBSITE_URL}/images/2019_thumb.jpg`, alt: siteName }],
          locale: lang,
        }}
      />
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
