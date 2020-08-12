import { join } from 'path'
import { GetServerSideProps } from 'next'
import { first, isArray } from 'lodash/fp'

export const getServerSideProps: GetServerSideProps = async ({ res, query }) => {
  const lang = isArray(query.lang) ? first(query.lang) : query.lang
  res.statusCode = 302
  res.setHeader('Location', join(`/${lang || ''}`, 'code-of-conduct'))
  return { props: {} }
}

const COC = () => <></>

export default COC
