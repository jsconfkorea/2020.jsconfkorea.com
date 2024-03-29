import Link from 'next/link'
import { ReactNode } from 'react'
import { useRouter } from 'next/router'

type Props = {
  lang: string
  children: ReactNode
  className?: string
}

const languages = ['ko', 'en']

const ChangeLanguageLink = ({ lang, children, className }: Props) => {
  const { asPath, pathname } = useRouter()
  const isLangPath = pathname.slice(0, 7) === '/[lang]' || languages.includes(asPath.slice(1, 3))
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
