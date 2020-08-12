import Header from '../components/Header'
import TopButton from '../components/TopButton'
import { useI18n } from '../hooks/useI18n'
import Markdown from '../components/Markdown'
import { Box } from '../components/MotionChakra'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {}

const COC = () => {
  const { t } = useI18n()
  return (
    <Box p="5rem 0">
      <Header></Header>
      <Markdown>{t('privacy-policy-md')}</Markdown>
      <TopButton></TopButton>
    </Box>
  )
}

export default COC
