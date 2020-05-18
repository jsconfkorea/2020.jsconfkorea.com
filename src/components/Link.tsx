import NextLink, { LinkProps } from 'next/link'
import { useI18n } from '../hooks/useI18n'
import { ReactNode } from 'react'
import { useRouter } from 'next/dist/client/router'

type Props = {
  lang?: string
  children: ReactNode
} & LinkProps

const Link = (props: Props) => {
  const { lang, children } = props
  const router = useRouter()
  const { locale, activeLanguage } = useI18n()
  const href = `/${activeLanguage}${props.href}`
  return (
    <NextLink {...props} href={href}>
      <a
        onClick={(e) => {
          if (!lang) return
          e.preventDefault()
          locale(lang)
          const { pathname, asPath } = router
          router.push(pathname, `/${lang}${asPath.slice(3)}`)
        }}
      >
        {children}
      </a>
    </NextLink>
  )
}

export default Link
