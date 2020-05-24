import { useContext, useState } from 'react'
import { I18nContext } from '../components/I18nProvider'
import { useRouter } from 'next/dist/client/router'

export const useI18n = () => {
  const i18n = useContext(I18nContext)
  const { asPath } = useRouter()
  const defaultLanguage = asPath.slice(0, 3) === '/ko' ? 'ko' : 'en'
  const activeLanguage = ['en', 'ko'].includes(asPath.slice(1, 3)) ? asPath.slice(1, 3) : defaultLanguage

  const [, setTick] = useState(0)
  const { locale } = i18n
  return {
    ...i18n,
    activeLanguage,
    locale(lang: string) {
      locale(lang)
      setTick((tick) => tick + 1)
    },
  }
}
