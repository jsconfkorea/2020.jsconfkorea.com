/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import Header from '../../components/Header'
import { GetStaticProps } from 'next'
import matter from 'gray-matter'
import { defaultLanguage } from '../../components/I18nProvider'
import { ko } from '../../i18n/ko'
import { en } from '../../i18n/en'
import Sponsors from '../../components/Sponsors'
import { Box } from '../../components/MotionChakra'
import React from 'react'

export const NUMBER_OF_SPONSORS = 5

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const ko_list = (
    await Promise.all(
      [...Array(NUMBER_OF_SPONSORS)]
        .map((_, i) => i + 1)
        .map((i) => import(`../../markdown/sponsors/sponsor-${i}.ko.md`)),
    )
  )
    .map((md) => matter(md.default))
    .map((obj) => {
      delete obj.orig
      return { ...obj, ...obj.data }
    })
  const en_list = (
    await Promise.all(
      [...Array(NUMBER_OF_SPONSORS)]
        .map((_, i) => i + 1)
        .map((i) => import(`../../markdown/sponsors/sponsor-${i}.en.md`)),
    )
  )
    .map((md) => matter(md.default))
    .map((obj) => {
      delete obj.orig
      return { ...obj, ...obj.data }
    })
  const langDict = {
    en: { sponsor: en_list, ...en },
    ko: { sponsor: ko_list, ...ko },
  }

  return { props: { langDict, lang: params?.lang ?? defaultLanguage } }
}

type Props = {}

const SponsorsPage = () => {
  return (
    <>
      <Header></Header>
      <Box p="4rem 0 2rem 0">
        <Sponsors />
      </Box>
    </>
  )
}

export default SponsorsPage
