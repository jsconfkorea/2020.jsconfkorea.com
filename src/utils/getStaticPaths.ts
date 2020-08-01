import { GetStaticPaths } from 'next'
import { languages } from '../hooks/useI18n'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: languages.map((lang) => ({ params: { lang } })),
    fallback: false,
  }
}
