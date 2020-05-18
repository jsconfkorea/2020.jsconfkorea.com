import { GetServerSideProps } from 'next'

const Index = () => <div>Coming soon...!</div>

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const lang = req.headers['accept-language']?.slice(0, 2) === 'ko' ? 'ko' : 'en'
  res.writeHead(301, { Location: `/${lang}` })
  res.end()
  return { props: {} }
}

export default Index
