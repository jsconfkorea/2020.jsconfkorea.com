/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useI18n } from '../hooks/useI18n'
import Link from './Link'
import { Box, Grid, Text, Heading, Image, A, Button } from './MotionChakra'
import { fadeInUp } from './Sponsors'
import ReactMarkdown from 'react-markdown'

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
          gridTemplateColumns="auto 1fr"
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
          {Array.isArray(t(`${i}.image`)) ? (
            <Box h="4.5rem" width="4.5rem" pos="relative">
              {[...t(`${i}.image`)].map((image, i) => (
                <Image
                  key={image}
                  d="inline-block"
                  src={image}
                  alt={image}
                  w="3rem"
                  h="3rem"
                  pos="absolute"
                  borderRadius="100%"
                  right={i === 1 ? 0 : 'auto'}
                  bottom={i === 1 ? 0 : 'auto'}
                  zIndex={i === 0 ? 1 : 0}
                  transition="all .2s"
                  css={css`
                    filter: grayscale(1);
                  `}
                />
              ))}
            </Box>
          ) : (
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
          )}
          <Box d="inline-block" verticalAlign="top" ml={4}>
            <Text
              fontFamily={`'Airbnb Cereal App Book'`}
              fontSize="sm"
              mb={2}
              backgroundColor="#333"
              d="inline-block"
              color="white"
              p=".2rem .4rem"
              borderRadius="2px"
            >
              {t(`${i}.name`)}
            </Text>
            <Heading fontFamily={`'Airbnb Cereal App Bold'`} fontSize="1rem" m={0}>
              {t(`${i}.title`)}
            </Heading>
            <Box fontFamily={`'Airbnb Cereal App Book'`} mt={2}>
              <ReactMarkdown
                css={css`
                  p {
                    font-size: 0.7rem;
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    line-height: 0.9rem;
                  }
                `}
              >
                {t(`${i}.content`).split('\n').join(' ')}
              </ReactMarkdown>
            </Box>
            {/* <Text
              fontFamily={`'Airbnb Cereal App Book'`}
              fontSize="0.7rem"
              mt={2}
              d="-webkit-box"
              overflow="hidden"
              lineHeight=".9rem"
              css={css`
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
              `}
            >
              {t(`${i}.content`)}
            </Text> */}
            {/* <Text as="b" mt={1} d="inline-block">
              Read more
            </Text> */}
          </Box>
        </Grid>
      </Link>
    </>
  )
}

export default Speaker
