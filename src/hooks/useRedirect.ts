import { useEffect } from 'react'
import { useRouter } from 'next/router'

const useRedirect = (url: string) => {
  const router = useRouter()
  useEffect(() => {
    router.push(url)
  })
}

export default useRedirect
