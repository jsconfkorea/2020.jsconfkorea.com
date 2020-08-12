import { useI18n } from '../hooks/useI18n'
import Header from '../components/Header'
import Link from '../components/Link'
import TitoWidget from '../components/TitoWidget'
import { Box, Heading } from '../components/MotionChakra'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {}

const Ticket = () => {
  const { t } = useI18n()
  return (
    <>
      <Header></Header>
      <Box p="5rem 0">
        <Heading as="h1">티켓</Heading>
        <Box>This is Index page!</Box>
        <Link href="/about">about page</Link>
        <TitoWidget event="demo/exampleconf"></TitoWidget>
      </Box>
    </>
  )
}

export default Ticket
