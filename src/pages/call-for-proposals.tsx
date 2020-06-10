/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Header from '../components/Header'
import TopButton from '../components/TopButton'
import { useI18n } from '../hooks/useI18n'
import Markdown from '../components/Markdown'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {}

const CFP_FORM_URL: { [key: string]: string } = {
  ko: 'https://forms.gle/4fuou7MXeXuKJ4rP9',
  en: 'https://forms.gle/uD1UxdSTKQZDjJMA8',
}

const CFP = ({}: Props) => {
  const { t, activeLanguage } = useI18n()
  return (
    <div css={style}>
      <Header></Header>
      <Markdown>{t('call-for-proposals-md')}</Markdown>
      <a href={CFP_FORM_URL[activeLanguage]} target="_blank" rel="noopener">
        {t('submit_proposal')}
      </a>
      <TopButton></TopButton>
    </div>
  )
}

const style = css`
  padding: 5rem 0 0 0;
  display: grid;
  & > a {
    justify-self: center;
    display: inline-block;
    border: solid 1px rgba(0, 0, 0, 0.1);
    color: #fff;
    background: #555;
    max-width: 300px;

    margin: 40px auto 30px;
    padding: 10px 20px;
    outline: none;
    border-radius: 3px;
    font-size: 20px;

    cursor: pointer;
    transform: translate3d(0px, -6px, 0);
    box-shadow: 0px 6px 0 #111;
    transition: transform 0.2s, box-shadow 0.2s;
    &:hover,
    &:focus {
      transform: translate3d(0px, -4px, 0);
      box-shadow: 0px 4px 0 #111;
    }
    &:active {
      transform: translate3d(0px, -2px, 0);
      box-shadow: 0px 2px 0 #111;
    }
  }
`

export default CFP
