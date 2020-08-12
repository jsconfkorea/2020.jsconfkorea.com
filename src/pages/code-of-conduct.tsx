import Header from '../components/Header'
import TopButton from '../components/TopButton'
import { useI18n } from '../hooks/useI18n'
import Markdown from '../components/Markdown'
import { Box } from '../components/MotionChakra'
import { NextSeo } from 'next-seo'
import { siteName, WEBSITE_URL_WITH_YEAR, thumb } from './_app'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {}

const COC = () => {
  const { t, activeLanguage: lang } = useI18n()
  const title = `${siteName} | ${t(`code_of_conduct`)}`
  const description = t('code_of_conduct_description')

  return (
    <Box p="5rem 0">
      <NextSeo
        title={title}
        description={description}
        canonical={`${WEBSITE_URL_WITH_YEAR}/${lang}/code-of-conduct`}
        openGraph={{
          title,
          description,
          images: [{ url: thumb, alt: siteName }],
          locale: lang,
        }}
      />
      <Header></Header>
      <Markdown>{t('code-of-conduct-md')}</Markdown>
      <TopButton></TopButton>
    </Box>
  )
}

export default COC
