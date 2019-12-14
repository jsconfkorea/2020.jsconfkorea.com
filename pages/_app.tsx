import { AppProps } from 'next/app'
import Head from 'next/head'

export default ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>JSConf Korea 2020 | JSConf Korea</title>
        <meta property="og:title" content="JSConf Korea 2020 | JSConf Korea" />
        <meta property="og:site_name" content="JSConf Korea 2020" />
        <meta property="og:url" content="https://2020.jsconfkorea.com" />
        <meta property="og:description" content="🇰🇷 Comming Soon !" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/thumb.png" />
        <link rel="shortcut icon" href="/icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
