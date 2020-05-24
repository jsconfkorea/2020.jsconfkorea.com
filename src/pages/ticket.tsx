/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useI18n } from '../hooks/useI18n'
import ChangeLanguageLink from '../components/ChangeLangaugeLink'
import Link from '../components/Link'
import TitoWidget from '../components/TitoWidget'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {}

const Ticket = ({}: Props) => {
  const { t } = useI18n()
  return (
    <>
      <div css={style}>
        <h1>{t('hello_world')}</h1>
        <ChangeLanguageLink lang="ko">ko</ChangeLanguageLink>
        <br></br>
        <ChangeLanguageLink lang="en">en</ChangeLanguageLink>
        <div>This is Index page!</div>
        <Link href="/about">about page</Link>
        <TitoWidget event="demo/exampleconf"></TitoWidget>
      </div>
    </>
  )
}

const style = css`
  .tito-wrapper {
    /* background: black; */
  }
`

export default Ticket
