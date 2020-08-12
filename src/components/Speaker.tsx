/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useI18n } from '../hooks/useI18n'
import Link from './Link'
import { Box, Grid, Text, Heading, Image } from './MotionChakra'
import { fadeInUp } from './Sponsors'

type Props = {
  i: number
  hide?: boolean
}

const Speaker = ({ i, hide }: Props) => {
  const i18n = useI18n()
  const t = (key: string) => i18n.t(`speaker.${key}`) || i18n.t(key)

  return (
    <>
      <Link href={`/speakers/[speaker]`} as={`/speakers/${t(`${i}.key`)}`}>
        <Grid
          gridAutoFlow="column"
          gridTemplateColumns="4.5rem 1fr"
          backgroundColor="white"
          p="1rem"
          variants={fadeInUp}
          // transition="all .2s"
          boxShadow="0 0 10px 0 rgba(123,136,157,.15)"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          css={css`
            &:hover {
              img {
                filter: none;
              }
            }
          `}
        >
          <Image
            d="inline-block"
            src={t(`${i}.image`)}
            alt={t(`${i}.name`)}
            w="4.5rem"
            h="4.5rem"
            borderRadius="100%"
            transition="all .2s"
            css={css`
              filter: grayscale(1);
            `}
          />
          <Box d="inline-block" verticalAlign="top" ml={4}>
            <Text fontSize="sm" my={2}>
              {t(`${i}.name`)}
            </Text>
            <Heading size="xs" m={0}>
              {t(`${i}.title`)}
            </Heading>
          </Box>
        </Grid>
      </Link>
    </>
  )
}

export default Speaker
