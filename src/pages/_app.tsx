import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyle from '../components/GlobalStyle'
import I18nProvider from '../components/I18nProvider'
import { ThemeProvider } from '@chakra-ui/core'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import useGA from '../hooks/useGA'

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App = ({ Component, pageProps }: AppProps) => {
  const { langDict, lang } = pageProps
  const title = 'JSConf Korea 2020 | JSConf Korea'
  const description = 'JSConf Korea 2020 - Home Edition'
  const thumb = '/og-image.png'

  useGA()

  return (
    <>
      <Head>
        <link rel="dns-prefetch" href="//fonts.googleapis.com"></link>
        <link rel="dns-prefetch" href="//jsconf.now.sh"></link>
        <link rel="dns-prefetch" href="//now.sh"></link>
        <link rel="dns-prefetch" href="//jsconfkorea.com"></link>
        <link rel="dns-prefetch" href="//www.google-analytics.com"></link>
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;700;900&family=Roboto+Mono:ital,wght@1,100&family=Source+Code+Pro&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;700;900&family=Roboto+Mono:ital,wght@1,100&family=Source+Code+Pro&display=swap"
          rel="stylesheet"
          media="print"
          onLoad={`this.media='all'` as any}
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="JSConf, JavaScript, Conference" />
        <meta name="author" content="JSConf Korea" />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={thumb} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jsconfkorea" />
        <meta name="twitter:creator" content="@jsconfkorea" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={thumb} />
        <meta property="og:site_name" content="JSConf Korea 2020" />
        <meta property="og:url" content="https://2020.jsconfkorea.com" />
        <meta property="og:type" content="website" />
        <script src="https://polyfill.io/v3/polyfill.min.js?features=smoothscroll"></script>
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
