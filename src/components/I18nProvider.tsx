import Rosetta from 'rosetta'
import { createContext, ReactNode } from 'react'
import { languages } from '../hooks/useI18n'

const i18n = Rosetta()

export const defaultLanguage = 'en'

export const I18nContext = createContext(i18n)

type Props = {
  langDict: {
    [key: string]: object
  }
  lang?: string
  children: ReactNode
}

const I18nProvider = ({ langDict, lang, children }: Props) => {
  i18n.locale(lang ?? defaultLanguage)
  languages.forEach((lang) => i18n.set(lang, langDict?.[lang]))
  return <I18nContext.Provider value={i18n}>{children}</I18nContext.Provider>
}

export default I18nProvider
