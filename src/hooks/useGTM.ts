import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

const useGTM = () => {
  useEffect(() => {
    initGTM()
  }, [])
}

const initGTM = () => TagManager.initialize({ gtmId: 'GTM-NNG9RWK' })

export default useGTM
