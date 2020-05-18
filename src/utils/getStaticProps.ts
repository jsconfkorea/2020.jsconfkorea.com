import { GetStaticProps } from 'next'
import { ko } from '../i18n/ko'
import { en } from '../i18n/en'
import { defaultLanguage } from '../components/I18nProvider'

const DOC_LIST = [
  'about',
  'accessibility',
  'call-for-proposals',
  'code-of-conduct',
  'frequently-asked-questions',
  'privacy-policy',
  'scholarships',
]

const getStaticProps: GetStaticProps = async ({ params }) => {
  const en_list = (await Promise.all(DOC_LIST.map((doc) => import(`../docs/${doc}.en.md`))))
    .map((doc) => doc.default)
    .reduce((obj, doc, idx) => ({ ...obj, [DOC_LIST[idx]]: doc }), {})
  const ko_list = (await Promise.all(DOC_LIST.map((doc) => import(`../docs/${doc}.ko.md`))))
    .map((doc) => doc.default)
    .reduce((obj, doc, idx) => ({ ...obj, [DOC_LIST[idx]]: doc }), {})

  const langDict = {
    en: { ...en_list, ...en },
    ko: { ...ko_list, ...ko },
  }

  return { props: { langDict, lang: params?.lang ?? defaultLanguage } }
}

export default getStaticProps
