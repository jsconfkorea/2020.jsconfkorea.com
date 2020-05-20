import Link from 'next/link'
import { ReactNode } from 'react'
import { useRouter } from 'next/dist/client/router'

type Props = {
  lang: string
  children: ReactNode
}

const ChangeLanguageLink = ({ lang, children }: Props) => {
  const { asPath, pathname } = useRouter()
  const isLangPath = pathname.slice(0, 7) === '/[lang]'
  const href = `/[lang]${isLangPath ? asPath.slice(3) : asPath === '/' ? '' : asPath}`
  const as = `/${lang}${isLangPath ? asPath.slice(3) : asPath === '/' ? '' : asPath}`
  return (
    <Link href={href} as={as}>
      <a>{children}</a>
    </Link>
  )
}

export default ChangeLanguageLink
