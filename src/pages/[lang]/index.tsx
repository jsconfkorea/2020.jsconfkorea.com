import { css } from '@emotion/core'
import { GetStaticProps, GetStaticPaths } from 'next'
import Markdown from 'react-markdown'

type Props = {
  md: string
}

const Index = ({ md }: Props) => (
  <div css={style}>
    <Markdown>{md}</Markdown>
  </div>
)

const style = css``

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const md = await require(`../../docs/about.${params?.lang}.md`)
  return { props: { md: md.default } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { lang: 'ko' } }, { params: { lang: 'en' } }],
    fallback: false,
  }
}

export default Index
