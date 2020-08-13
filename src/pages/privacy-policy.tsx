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
  const title = `${siteName} | ${t(`privacy_policy`)}`
  const description = t('privacy_policy_description')

  return (
    <Box p="5rem 0">
      <NextSeo
        title={title}
        description={description}
        canonical={`${WEBSITE_URL_WITH_YEAR}/${lang}/privacy-policy`}
        openGraph={{
          title,
          description,
          images: [{ url: thumb, alt: siteName }],
          locale: lang,
        }}
      />
      <Header></Header>
      <Markdown>{t('privacy-policy-md')}</Markdown>
      <TopButton></TopButton>
    </Box>
  )
}

export default COC
