import { useEffect } from 'react'

const useRedirect = (url: string) => {
  useEffect(() => {
    window.location.href = url
  })
}

export default useRedirect
