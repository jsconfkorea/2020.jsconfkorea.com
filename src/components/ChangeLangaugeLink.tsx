import Link from 'next/link'
import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { useI18n } from '../hooks/useI18n'

type Props = {
  lang: string
  children: ReactNode
  className?: string
}

const ChangeLanguageLink = ({ lang, children, className }: Props) => {
  const { asPath, pathname } = useRouter()
  const { locale } = useI18n()
  const isLangPath = pathname.slice(0, 7) === '/[lang]'
  const href = `/[lang]${isLangPath ? asPath.slice(3) : asPath === '/' ? '' : asPath}`
  const as = `/${lang}${isLangPath ? asPath.slice(3) : asPath === '/' ? '' : asPath}`
  return (
    <Link href={href} as={as} scroll={false}>
      <a
        className={className}
        onClick={(e) => {
          // locale(lang)
          if (lang === asPath.slice(1, 3)) e.preventDefault()
        }}
      >
        {children}
      </a>
    </Link>
  )
}

export default ChangeLanguageLink
