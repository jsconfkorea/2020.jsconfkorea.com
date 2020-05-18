import { languages } from '../../components/I18nProvider'
import { GetStaticPaths } from 'next'

export { default } from '../'
export { getStaticProps } from '../'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: languages.map((lang) => ({ params: { lang } })),
    fallback: false,
  }
}
