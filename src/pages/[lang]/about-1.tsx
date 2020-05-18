/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { GetStaticProps, GetStaticPaths } from 'next'
import Markdown from 'react-markdown'
import Link from 'next/link'

type Props = {
  md: string
}

const Index = ({ md }: Props) => (
  <div css={style}>
    <Link href="/ko">
      <a>ko</a>
    </Link>
    <br></br>
    <Link href="/en">
      <a>en</a>
    </Link>
    <Markdown>{md}</Markdown>
  </div>
)

const style = css``

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const md = await import(`../../docs/about.${params?.lang}.md`)
  return { props: { md: md.default } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { lang: 'ko' } }, { params: { lang: 'en' } }],
    fallback: true,
  }
}

export default Index
