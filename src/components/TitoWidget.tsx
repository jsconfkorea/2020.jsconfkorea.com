/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import TitoStyle from './TitoStyle'
import dynamic from 'next/dynamic'

const TitoScript = dynamic(() => import('./TitoScript'), { ssr: false })

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'tito-widget': Props
      'tito-button': Props
    }
  }
}

type Props = {
  event: string
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

const TitoWidget = ({ event }: Props) => {
  return (
    <>
      <TitoScript />
      <TitoStyle />
      <tito-widget event={event} />
    </>
  )
}

export default TitoWidget
