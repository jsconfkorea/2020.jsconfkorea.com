import Rosetta from 'rosetta'
import { createContext, ReactNode, useRef, useEffect } from 'react'

const i18n = Rosetta()

export const defaultLanguage = 'en'
export const languages = ['en', 'ko']

export const I18nContext = createContext(i18n)

// i18n.locale(defaultLanguage)

type Props = {
  langDict: {
    [key: string]: object
  }
  lang: string
  children: ReactNode
}

const I18nProvider = ({ langDict, lang, children }: Props) => {
  // const activeLanguage = useRef(lang || defaultLanguage)
  i18n.locale(lang)
  // useEffect(() => {

  // })
  languages.forEach((lang) => i18n.set(lang, langDict[lang]))
  return <I18nContext.Provider value={i18n}>{children}</I18nContext.Provider>
}

export default I18nProvider
