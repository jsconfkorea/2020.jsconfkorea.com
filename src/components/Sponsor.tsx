/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useI18n } from '../hooks/useI18n'
import { motion } from 'framer-motion'
import Link from './Link'
import { Box, Image } from '@chakra-ui/core'

const MotionBox = motion.custom(Box)

type Props = {
  i: number
}

const Sponsor = ({ i }: Props) => {
  const i18n = useI18n()
  const t = (key: string) => i18n.t(`sponsor.${key}`) || i18n.t(key)

  return (
    <MotionBox
      w="100%"
      pb="50%"
      bg="white"
      pos="relative"
      boxShadow="0 0 10px 0 rgba(123,136,157,.15)"
      cursor="pointer"
      css={style}
      variants={{
        open: {
          y: 0,
          opacity: 1,
          transition: {
            ease: 'backOut',
          },
        },
        closed: {
          y: 50,
          opacity: 0,
          transition: {
            y: { stiffness: 1000 },
          },
        },
      }}
      key={i}
      mb="1.2rem"
    >
      <Link href={`/sponsors/[sponsors]`} as={`/sponsors/${t(`${i}.key`)}`} shallow={true}>
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
    </MotionBox>
  )
}

const style = css`
  & > a {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`

export default Sponsor
