import { css } from '@emotion/core'
import { GetServerSideProps } from 'next'
import { languages } from '../../i18n'

const Index = () => <div css={style}>Coming soon...!</div>

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  console.log({ query })
  console.log({ url: req.url })
  const lang = query.lang as string
  if (!languages.includes(lang)) {
    res.writeHead(301, { Location: `/en${req.url}` })
    res.end()
  }
  return { props: {} }
}

const style = css``

export default Index
