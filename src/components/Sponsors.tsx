/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'
import { useI18n } from '../hooks/useI18n'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import Link from './Link'
import TwitterIcon from './svgs/TwitterIcon'
import { createPortal } from 'react-dom'
import { useKey } from 'react-use'
import { NextSeo } from 'next-seo'
import { NUMBER_OF_SPONSORS } from '../pages/sponsors'
import { useEffect } from 'react'
import Sponsor from './Sponsor'
import { useDisclosure, CloseButton } from '@chakra-ui/core'
import { Heading, Grid, Divider } from './MotionChakra'
import { capitalize } from 'lodash/fp'

export const fadeIn = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}

export const fadeInUp = {
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
}

const Sponsors = () => {
  const i18n = useI18n()
  const { activeLanguage: lang } = i18n
  const t = (key: string) => i18n.t(`sponsor.${key}`) || i18n.t(key)
  const router = useRouter()
  const { query } = router
  const selectedSponsor = [...Array(NUMBER_OF_SPONSORS)]
    .map((_, i) => i)
    .filter((_, i) => t(`${i}.key`) === query.sponsor)
  const isSelected = selectedSponsor.length === 1
  const onClose = () => router.push(`/[lang]/sponsors`, `/${lang}/sponsors`, { shallow: true })

  useKey((e) => e.keyCode === 27, onClose)

  const title = `JSConf Korea 2020 - ${capitalize(t('sponsors'))}${
    isSelected ? ` | ${t(`${selectedSponsor}.name`)}` : ''
  }`
  const description = isSelected ? t(`${selectedSponsor}.content`) : t('sponsors_description')

  const { isOpen, onOpen } = useDisclosure()
  useEffect(() => {
    onOpen()
  }, [])

  return (
    <>
      <NextSeo title={title} description={description} openGraph={{ title, description }} />
      <main css={style}>
        <motion.div initial={false} animate={isOpen ? 'open' : 'closed'}>
          <Heading as="h1" size="xl" m={0} mb={4} variants={fadeInUp}>
            {t('sponsors')}
          </Heading>
          <Grid
            variants={{
              open: {
                transition: { delayChildren: 0.2, staggerChildren: 0.15 },
              },
              closed: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 },
              },
            }}
          >
            <Heading as="h2" size="md" m={0} mt="1rem" variants={fadeIn}>
              {t('platinum')}
            </Heading>
            <Divider mb="1rem" variants={fadeIn} />
            {[...Array(NUMBER_OF_SPONSORS)]
              .map((_, i) => i)
              .slice(0, 2)
              .map((i) => (
                <Sponsor key={i} i={i} />
              ))}
            <Heading as="h2" size="md" m={0} mt="1rem" variants={fadeIn}>
              {t('gold')}
            </Heading>
            <Divider mb="1rem" />
            {[...Array(NUMBER_OF_SPONSORS)]
              .map((_, i) => i)
              .slice(2, 4)
              .map((i) => (
                <Sponsor key={i} i={i} />
              ))}
            <Heading as="h2" size="md" m={0} mt="1rem" variants={fadeIn}>
              {t('accessibility')}
            </Heading>
            <Divider mb="1rem" />
            {[...Array(NUMBER_OF_SPONSORS)]
              .map((_, i) => i)
              .slice(4, 5)
              .map((i) => (
                <Sponsor key={i} i={i} />
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
                {isSelected && (
                  <>
                    <motion.div
                      className="dim"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={onClose}
                    ></motion.div>
                    <motion.section
                      initial={{ y: '50%', opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: '50%', opacity: 0 }}
                      transition={{ type: 'tween', duration: 0.35, ease: 'backOut' }}
                    >
                      <CloseButton onClick={onClose} />
                      {/* <header>
                        <Image src={t(`${selectedSpeaker}.image`)} alt={t(`${selectedSpeaker}.name`)} />
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
                      <article>{t(`${selectedSpeaker}.content`)}</article> */}
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
  max-width: 820px;

  & > div {
    overflow: hidden;
    padding: 1.5rem;
    margin: 0;
    font-size: 0.8rem;
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
    font-family: 'Airbnb Cereal App Medium', sans-serif;
    z-index: 20;
    position: absolute;
    top: 25%;
    height: 120%;
    width: 100%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    padding: 1.5rem;
    padding-top: 2rem;
    background-color: white;
    & > button {
      border: none;
      background-color: white;
      cursor: pointer;
      position: absolute;
      right: 0;
      top: 0;
      margin: 0.5rem;
      &:focus {
        background-color: white;
        box-shadow: none;
      }
    }
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

  @media screen and (min-width: 769px) {
    & > section {
      max-width: 28rem;
      margin: auto;
      height: 28rem;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 1rem;
      padding: 2rem;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
  }

  @media screen and (min-width: 1201px) {
    & > section {
      max-width: 24rem;
      height: 28rem;
      & > button {
        margin: 0.8rem;
      }
    }
  }
`

export default Sponsors
