import { useEffect } from 'react'
import ReactGA from 'react-ga'
import { Router } from 'next/router'

const useGA = () => {
  useEffect(() => {
    initGA()
    logPageView()
    Router.events.on('routeChangeComplete', logPageView)
  }, [])
}

const initGA = () => ReactGA.initialize('UA-139256354-2')

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export default useGA
