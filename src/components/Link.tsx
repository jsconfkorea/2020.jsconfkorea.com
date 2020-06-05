import NextLink, { LinkProps } from 'next/link'
import { useI18n } from '../hooks/useI18n'
import { ReactNode } from 'react'
import { useRouter } from 'next/dist/client/router'
import { css } from '@emotion/core'

type Props = {
  className?: string
  disabled?: boolean
  children: ReactNode
} & LinkProps

const Link = (props: Props) => {
  const { children, className, disabled } = props
  const { pathname } = useRouter()
  const isLangPath = pathname.slice(0, 7) === '/[lang]'
  const { activeLanguage } = useI18n()
  const href = `${isLangPath ? `/[lang]` : ''}${props.href === '/' ? '' : props.href}`
  const as = `${isLangPath ? `/${activeLanguage}` : ''}${props.href === '/' ? '' : props.href}`
  if (disabled) {
    return (
      <a href="#" className="disabled">
        {children}
      </a>
    )
  }
  return (
    <NextLink href={href} as={as}>
      <a className={className}>{children}</a>
    </NextLink>
  )
}

export default Link
