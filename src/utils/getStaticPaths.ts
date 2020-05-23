import { GetStaticPaths } from 'next'
import { languages } from '../components/I18nProvider'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: languages.map((lang) => ({ params: { lang } })),
    fallback: false,
  }
}
