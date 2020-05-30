import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyle from '../components/GlobalStyle'
import I18nProvider from '../components/I18nProvider'

const App = ({ Component, pageProps }: AppProps) => {
  const { langDict, lang } = pageProps
  const title = 'JSConf Korea 2020 | JSConf Korea'
  const description = '🇰🇷 Coming Soon !'
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="JSConf Korea 2020" />
        <meta property="og:url" content="https://2020.jsconfkorea.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/thumb.png" />
        <link rel="shortcut icon" href="/icon.png" />
      </Head>
      <I18nProvider langDict={langDict} lang={lang}>
        <GlobalStyle />
        <Component {...pageProps} />
      </I18nProvider>
    </>
  )
}

export default App
