/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Markdown from 'react-markdown'
import { useI18n } from '../hooks/useI18n'
import Link from '../components/Link'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {}

const Index = ({}: Props) => {
  const { t, locale, activeLanguage } = useI18n()
  console.log(activeLanguage)
  return (
    <div css={style}>
      <h1>{t('hello_world')}</h1>
      <Link href="/" lang="ko">
        ko
      </Link>
      <br></br>
      <Link href="/" lang="en">
        en
      </Link>
      <Markdown>{t('about')}</Markdown>
    </div>
  )
}

const style = css``

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const md = await import(`../docs/about.${params?.lang ?? defaultLanguage}.md`)
//   return { props: { md: md.default } }
// }

export default Index
