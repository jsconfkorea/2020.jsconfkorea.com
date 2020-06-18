import Router, { useRouter } from 'next/router'
import { useEffect } from 'react'

const CFP = () => {
  const {
    query: { lang },
  } = useRouter()
  useEffect(() => {
    Router.replace(`${lang ? `/${lang}` : ''}/call-for-proposals`)
  })
  return <></>
}

export default CFP
