import { join } from 'path'
import { GetServerSideProps } from 'next'
import { first, isArray } from 'lodash/fp'

export const getServerSideProps: GetServerSideProps = async ({ res, query }) => {
  const lang = isArray(query.lang) ? first(query.lang) : query.lang
  res.statusCode = 302
  res.setHeader('Location', join(`/${lang || ''}`, 'call-for-proposals'))
  return { props: {} }
}

const CFP = () => <></>

export default CFP
