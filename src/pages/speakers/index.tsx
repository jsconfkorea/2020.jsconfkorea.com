/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Header from '../../components/Header'
import { GetStaticProps } from 'next'
import matter from 'gray-matter'
import { defaultLanguage } from '../../components/I18nProvider'
import { ko } from '../../i18n/ko'
import { en } from '../../i18n/en'
import Speakers from '../../components/Speakers'

export const NUMBER_OF_SPEAKERS = 10

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const ko_list = (
    await Promise.all(
      [...Array(NUMBER_OF_SPEAKERS)]
        .map((_, i) => i + 1)
        .map((i) => import(`../../markdown/speakers/speaker-${i}.ko.md`)),
    )
  )
    .map((md) => matter(md.default))
    .map((obj) => {
      delete obj.orig
      return { ...obj, ...obj.data }
    })
  const en_list = (
    await Promise.all(
      [...Array(NUMBER_OF_SPEAKERS)]
        .map((_, i) => i + 1)
        .map((i) => import(`../../markdown/speakers/speaker-${i}.en.md`)),
    )
  )
    .map((md) => matter(md.default))
    .map((obj) => {
      delete obj.orig
      return { ...obj, ...obj.data }
    })
  const langDict = {
    en: { speaker: en_list, ...en },
    ko: { speaker: ko_list, ...ko },
  }

  return { props: { langDict, lang: params?.lang ?? defaultLanguage } }
}

type Props = {}

const SpeakersPage = () => {
  return (
    <>
      <Header></Header>
      <div css={style}>
        <Speakers />
      </div>
    </>
  )
}

const style = css`
  padding: 4rem 0 2rem 0;
`

export default SpeakersPage
