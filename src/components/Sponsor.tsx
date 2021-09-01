/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useI18n } from '../hooks/useI18n'
import Link from './Link'
import { Image } from '@chakra-ui/core'
import { fadeInUp } from './Sponsors'
import { Box } from './MotionChakra'

type Props = {
  i: number
  hide?: boolean
}

const Sponsor = ({ i, hide }: Props) => {
  const i18n = useI18n()
  const t = (key: string) => i18n.t(`sponsor.${key}`) || i18n.t(key)

  return (
    <Box
      w="100%"
      pb="50%"
      bg="white"
      pos="relative"
      boxShadow="0 0 10px 0 rgba(123,136,157,.15)"
      cursor="pointer"
      css={style}
      variants={fadeInUp}
      key={i}
      mb="1.2rem"
    >
      {!hide && (
        <Link href={`/sponsors/[sponsor]`} as={`/sponsors/${t(`${i}.key`)}`} shallow>
          <Image
            src={t(`${i}.logo`)}
            alt={t(`${i}.key`)}
            w="calc(100% - 4rem)"
            pos="absolute"
            m="auto"
            top={0}
            bottom={0}
            left={0}
            right={0}
          />
        </Link>
      )}
    </Box>
  )
}

const style = css`
  transition: all 0.1s ease-out;
  &:active {
    transform: scale(0.95) !important;
  }
  @media (hover: hover) {
    &:hover {
      transform: scale(0.95) !important;
    }
  }
  & > a {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`

export default Sponsor
