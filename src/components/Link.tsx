import NextLink, { LinkProps } from 'next/link'
import { useI18n } from '../hooks/useI18n'
import { ReactNode } from 'react'
import { useRouter } from 'next/dist/client/router'

type Props = {
  children: ReactNode
} & LinkProps

const Link = (props: Props) => {
  const { href, children } = props
  const { pathname } = useRouter()
  const isLangPath = pathname.slice(0, 7) === '/[lang]'
  const { activeLanguage } = useI18n()
  return (
    <NextLink href={`${isLangPath ? `/${activeLanguage}` : ''}${href}`}>
      <a>{children}</a>
    </NextLink>
  )
}

export default Link
