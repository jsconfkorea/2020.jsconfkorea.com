import { ThemeProvider } from '@chakra-ui/core'
import 'hamburgers/_sass/hamburgers/hamburgers.scss'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import GlobalStyle from '../components/GlobalStyle'
import I18nProvider from '../components/I18nProvider'
import useGA from '../hooks/useGA'
import useGTM from '../hooks/useGTM'
import { languages } from '../hooks/useI18n'
import { theme } from '../utils/theme'

if (typeof window !== 'undefined') {
  if (window.location.hostname === 'jsconf.kr') {
    window.location.href = 'https://2022.jsconf.kr'
  }
}

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export const WEBSITE_URL = 'https://jsconfkorea.com'
export const WEBSITE_URL_WITH_YEAR = `https://2020.jsconfkorea.com`
export const siteName = 'JSConf Korea 2020'
export const title = `${siteName} | JSConf Korea`
export const description = `${siteName} - Home Edition`
const url = WEBSITE_URL
export const thumb = `${url}/og-image.png`

const App = ({ Component, pageProps }: AppProps) => {
  const { langDict, lang } = pageProps

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
        <meta name="keywords" content="JSConf, JavaScript, Conference" />
        <meta name="author" content="JSConf Korea" />
        <meta name="google" content="notranslate"></meta>

        <script async src="https://polyfill.io/v3/polyfill.min.js?features=smoothscroll"></script>
      </Head>
      <DefaultSeo
        openGraph={{
          type: 'website',
          url,
          site_name: siteName,
        }}
        twitter={{
          handle: '@jsconfkorea',
          site: '@jsconfkorea',
          cardType: 'summary_large_image',
        }}
        languageAlternates={languages.map((lang) => ({
          hrefLang: lang,
          href: `${url}/${lang}`,
        }))}
      />
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
