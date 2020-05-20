import Link from 'next/link'
import { ReactNode } from 'react'
import { useRouter } from 'next/dist/client/router'
import { useI18n } from '../hooks/useI18n'

type Props = {
  lang: string
  children: ReactNode
}

const ChangeLanguageLink = ({ lang, children }: Props) => {
  const { asPath, pathname } = useRouter()
  const { locale } = useI18n()
  const isLangPath = pathname.slice(0, 7) === '/[lang]'
  return (
    <Link href={`/${lang}${isLangPath ? asPath.slice(3) : asPath === '/' ? '' : asPath}`} shallow>
      <a
        onClick={(e) => {
          locale(lang)
        }}
      >
        {children}
      </a>
    </Link>
  )
}

export default ChangeLanguageLink
