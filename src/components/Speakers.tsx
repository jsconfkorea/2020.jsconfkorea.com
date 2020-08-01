/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'
import { useI18n } from '../hooks/useI18n'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { NUMBER_OF_SPEAKERS } from '../pages/speakers'
import Link from './Link'
import TwitterIcon from './svgs/TwitterIcon'
import { Box, Heading, Image, Divider, Stack, Text, Grid } from '@chakra-ui/core'
import { createPortal } from 'react-dom'

const Speakers = () => {
  const i18n = useI18n()
  const { activeLanguage: lang } = i18n
  const t = (key: string) => i18n.t(`speaker.${key}`) || i18n.t(key)
  const router = useRouter()
  const { query } = router
  const selectedSpeaker = [...Array(NUMBER_OF_SPEAKERS)].map((_, i) => i).filter((_, i) => query[t(`${i}.key`)] === '')
  return (
    <>
      <main css={style}>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'tween', duration: 0.35, ease: 'backOut' }}
        >
          <Heading as="h1" size="xl" m={0}>
            {t('speakers')}
          </Heading>
          <Divider mb={6} />
          <Grid gridGap={8}>
            {[...Array(NUMBER_OF_SPEAKERS)].map((_, i) => (
              <Link href={`/speakers?${t(`${i}.key`)}`} as={`/speakers?${t(`${i}.key`)}`} key={i}>
                <Grid key={i} gridAutoFlow="column" gridTemplateColumns="4.5rem 1fr">
                  <Image d="inline-block" src={t(`${i}.image`)} alt={t(`${i}.name`)} w="4.5rem" h="4.5rem" />
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
            ))}
          </Grid>
        </motion.div>
        {typeof window !== 'undefined' &&
          createPortal(
            <div css={popupStyle}>
              <Global
                styles={css`
                  html {
                    overflow: hidden;
                  }
                `}
              />
              <AnimatePresence>
                {selectedSpeaker.length === 1 && (
                  <>
                    <motion.div
                      className="dim"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => router.push(`/[lang]/speakers`, `/${lang}/speakers`, { shallow: true })}
                    ></motion.div>
                    <motion.section
                      initial={{ y: '50%', opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: '50%', opacity: 0 }}
                      transition={{ type: 'tween', duration: 0.35, ease: 'backOut' }}
                    >
                      <header>
                        <img src={t(`${selectedSpeaker}.image`)} alt={t(`${selectedSpeaker}.name`)} />
                        <div>
                          <h1>{t(`${selectedSpeaker}.title`)}</h1>
                          <span>{t(`${selectedSpeaker}.name`)}</span>
                          <a href={t(`${selectedSpeaker}.link`)} target="_blank" rel="noopener noreferrer">
                            <TwitterIcon />
                          </a>
                        </div>
                      </header>
                      <div className="audience">{t('audience')}</div>
                      <h2>{t(`${selectedSpeaker}.audience`)}</h2>
                      <div className="summary">{t('summary')}</div>
                      <article>{t(`${selectedSpeaker}.content`)}</article>
                    </motion.section>
                  </>
                )}
              </AnimatePresence>
            </div>,
            document.querySelector('body')!,
          )}
      </main>
    </>
  )
}

const style = css`
  margin: 0 auto;
  margin-top: -1rem;
  max-width: 820px;

  & > div {
    overflow: hidden;
    padding: 1.5rem;
    margin: 0;
    font-size: 0.8rem;
    & > div {
      a {
        & > div {
          img {
            border-radius: 100%;
            filter: grayscale(1);
            transition: all 0.2s;
          }
          &:hover {
            img {
              filter: none;
            }
          }
        }
      }
    }
  }
`

const popupStyle = css`
  & > .dim {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 15;
    background-color: rgba(0, 0, 0, 0.5);
  }
  & > section {
    overflow: hidden;
    font-family: 'Airbnb Cereal App Medium', sans-serif;
    z-index: 20;
    position: absolute;
    top: 25%;
    height: 120%;
    width: 100%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    padding: 1.5rem;
    background-color: white;
    header {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: 4.5rem 1fr;
      vertical-align: top;
      width: auto;
      img {
        display: inline-block;
        width: 4.5rem;
        border-radius: 100%;
      }
      & > div {
        margin: 0.5rem 0 0 1rem;
        h1 {
          margin: 0;
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }
        span {
          font-family: 'Airbnb Cereal App Book', sans-serif;
          display: inline-block;
          font-size: 0.8rem;
        }
        svg {
          display: inline-block;
          vertical-align: middle;
          margin-left: 0.6rem;
          width: 0.9rem;
          height: 0.9rem;
        }
      }
    }

    .audience {
      font-size: 0.8rem;
      margin-top: 1.2rem;
      font-weight: bold;
    }
    h2 {
      font-family: 'Airbnb Cereal App Book', sans-serif;
      margin-top: 0.2rem;
      font-size: 1rem;
      font-weight: normal;
    }
    .summary {
      font-size: 0.8rem;
      margin-top: 1.2rem;
      font-weight: bold;
    }
    article {
      font-family: 'Airbnb Cereal App Book', sans-serif;
      margin-top: 0.2rem;
    }
  }
`

export default Speakers
