import { GetStaticPaths } from 'next'
import { languages } from '../hooks/useI18n'
import matter from 'gray-matter'
import { NUMBER_OF_SPEAKERS } from '../pages/speakers'

export const getStaticPaths: GetStaticPaths = async () => {
  const speakers = (
    await Promise.all(
      [...Array(NUMBER_OF_SPEAKERS)].map((_, i) => i + 1).map((i) => import(`../speakers/speaker-${i}.ko.md`)),
    )
  )
    .map((md) => matter(md.default))
    .map((obj) => obj.data.key)

  const paths = languages
    .map((lang) => speakers.map((speaker) => ({ lang, speaker })))
    .flat()
    .map((params) => ({ params }))

  return {
    paths,
    fallback: false,
  }
}
