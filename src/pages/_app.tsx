import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyle from '../components/GlobalStyle'
import I18nProvider from '../components/I18nProvider'
import { ThemeProvider } from '@chakra-ui/core'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import useGA from '../hooks/useGA'
import useGTM from '../hooks/useGTM'
import { NextSeo } from 'next-seo'
import 'hamburgers/_sass/hamburgers/hamburgers.scss'
import { theme } from '../utils/theme'

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export const WEBSITE_URL = 'https://jsconfkorea.com'

const App = ({ Component, pageProps }: AppProps) => {
  const { langDict, lang } = pageProps
  const title = 'JSConf Korea 2020 | JSConf Korea'
  const description = 'JSConf Korea 2020 - Home Edition'
  const url = WEBSITE_URL
  const thumb = `${url}/og-image.png`
  const siteName = 'JSConf Korea 2020'

  useGA()
  useGTM()

  return (
    <>
      <Head>
        <link rel="dns-prefetch" href="//jsconf.now.sh"></link>
        <link rel="dns-prefetch" href="//now.sh"></link>
        <link rel="dns-prefetch" href="//jsconfkorea.com"></link>
        <link rel="dns-prefetch" href="//www.google-analytics.com"></link>
        <link rel="dns-prefetch" href="//polyfill.io"></link>
        <link rel="dns-prefetch" href="//www.googletagmanager.com"></link>

        <link rel="preconnect" href="https://jsconf.now.sh" crossOrigin="anonymous"></link>
        <link rel="preconnect" href="https://now.sh" crossOrigin="anonymous"></link>
        <link rel="preconnect" href="https://jsconfkorea.com" crossOrigin="anonymous"></link>
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous"></link>
        <link rel="preconnect" href="https://polyfill.io" crossOrigin="anonymous"></link>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous"></link>

        <link rel="shortcut icon" href="/favicon.png" />

        <meta charSet="UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>{title}</title>
        <meta key="description" name="description" content={description} />
        <meta name="keywords" content="JSConf, JavaScript, Conference" />
        <meta name="author" content="JSConf Korea" />
        <meta name="google" content="notranslate"></meta>

        <script async src="https://polyfill.io/v3/polyfill.min.js?features=smoothscroll"></script>
      </Head>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          description,
          url,
          site_name: siteName,
          images: [{ url: thumb, alt: siteName }],
          type: 'website',
          locale: lang,
        }}
        twitter={{
          handle: '@jsconfkorea',
          site: '@jsconfkorea',
          cardType: 'summary_large_image',
        }}
      ></NextSeo>
      <GlobalStyle />
      <I18nProvider langDict={langDict} lang={lang}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </I18nProvider>
    </>
  )
}

export default App
