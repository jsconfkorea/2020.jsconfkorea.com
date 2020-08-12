/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Header from '../components/Header'
import TopButton from '../components/TopButton'
import { useI18n } from '../hooks/useI18n'
import Markdown from '../components/Markdown'
import { NextSeo } from 'next-seo'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {}

const CFP = () => {
  const { t, activeLanguage } = useI18n()
  const title = `JSConf Korea 2020 - ${t('cfp_title')}`
  const description = t('cfp_description')

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
        }}
      />
      <div css={style}>
        <Header></Header>
        <Markdown>{t('call-for-proposals-md')}</Markdown>
        {/* <A href={`/redirect/cfp-form-${activeLanguage}`} isExternal>
          {t('submit_proposal')}
        </A> */}
        <TopButton></TopButton>
      </div>
    </>
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
