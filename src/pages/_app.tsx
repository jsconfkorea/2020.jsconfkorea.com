import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyle from '../components/GlobalStyle'
import I18nProvider from '../components/I18nProvider'
import { ThemeProvider } from '@chakra-ui/core'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import useGA from '../hooks/useGA'
import TagManager from 'react-gtm-module'

TagManager.initialize({ gtmId: 'GTM-NNG9RWK' })

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App = ({ Component, pageProps }: AppProps) => {
  const { langDict, lang } = pageProps
  const title = 'JSConf Korea 2020 | JSConf Korea'
  const description = 'JSConf Korea 2020 - Home Edition'
  const url = 'https://jsconfkorea.com/'
  const thumb = `${url}og-image.png`

  useGA()

  return (
    <>
      <Head>
        <link rel="dns-prefetch" href="//jsconf.now.sh"></link>
        <link rel="dns-prefetch" href="//now.sh"></link>
        <link rel="dns-prefetch" href="//jsconfkorea.com"></link>
        <link rel="dns-prefetch" href="//www.google-analytics.com"></link>
        <link rel="dns-prefetch" href="//polyfill.io"></link>

        <link rel="preconnect" href="https://jsconf.now.sh" crossOrigin="anonymous"></link>
        <link rel="preconnect" href="https://now.sh" crossOrigin="anonymous"></link>
        <link rel="preconnect" href="https://jsconfkorea.com" crossOrigin="anonymous"></link>
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous"></link>
        <link rel="preconnect" href="https://polyfill.io" crossOrigin="anonymous"></link>

        <link rel="shortcut icon" href="/favicon.png" />

        <meta charSet="UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>{title}</title>
        <meta key="description" name="description" content={description} />
        <meta name="keywords" content="JSConf, JavaScript, Conference" />
        <meta name="author" content="JSConf Korea" />

        <meta key="og:title" property="og:title" content={title} />
        <meta key="og:description" property="og:description" content={description} />
        <meta key="og:image" property="og:image" content={thumb} />
        <meta key="og:site_name" property="og:site_name" content="JSConf Korea 2020" />
        <meta key="og:url" property="og:url" content={url} />
        <meta key="og:type" property="og:type" content="website" />

        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:curl" name="twitter:url" content={url} />
        <meta key="twitter:site" name="twitter:site" content="@jsconfkorea" />
        <meta key="twitter:title" name="twitter:title" content={title} />
        <meta key="twitter:description" name="twitter:description" content={description} />
        <meta key="twitter:image:src" name="twitter:image:src" content={thumb} />
        <meta key="twitter:creator" name="twitter:creator" content="@jsconfkorea" />

        <meta name="google" content="notranslate"></meta>

        <script async src="https://polyfill.io/v3/polyfill.min.js?features=smoothscroll"></script>
      </Head>
      <GlobalStyle />
      <I18nProvider langDict={langDict} lang={lang}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </I18nProvider>
    </>
  )
}

export default App
