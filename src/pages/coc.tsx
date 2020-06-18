import Router, { useRouter } from 'next/router'
import { useEffect } from 'react'

const COC = () => {
  const {
    query: { lang },
  } = useRouter()
  useEffect(() => {
    Router.replace(`${lang ? `/${lang}` : ''}/code-of-conduct`)
  })
  return <></>
}

export default COC
