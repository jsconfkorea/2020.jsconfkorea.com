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
import { Heading, Grid, Divider, Image, Box, Button, A } from './MotionChakra'
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

export const listStack = (delayChildren: number) => ({
  open: {
    transition: { delayChildren, staggerChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
})

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
          <Grid variants={fadeIn}>
            <Heading as="h2" size="md" m={0} mt="1rem" variants={fadeIn}>
              {t('platinum')}
            </Heading>
            <Divider mb="1rem" variants={fadeIn} />
            <Grid
              gridTemplateColumns={['1fr', '1fr 1fr']}
              gridAutoFlow={['row', 'column']}
              gridGap={['0', '1rem']}
              variants={listStack(0.2)}
            >
              {[...Array(NUMBER_OF_SPONSORS)]
                .map((_, i) => i)
                .slice(0, 1)
                .map((i) => (
                  <Sponsor key={i} i={i} />
                ))}
              <Sponsor i={0} hide />
            </Grid>
            <Heading as="h2" size="md" m={0} mt="1rem" variants={fadeIn}>
              {t('gold')}
            </Heading>
            <Divider mb="1rem" />
            <Grid
              gridTemplateColumns={['1fr', '1fr 1fr']}
              gridAutoFlow={['row', 'column']}
              gridGap={['0', '1rem']}
              variants={listStack(0.6)}
            >
              {[...Array(NUMBER_OF_SPONSORS)]
                .map((_, i) => i)
                .slice(2, 3)
                .map((i) => (
                  <Sponsor key={i} i={i} />
                ))}
              <Sponsor i={0} hide />
            </Grid>
            <Heading as="h2" size="md" m={0} mt="1rem" variants={fadeIn}>
              {t('accessibility')}
            </Heading>
            <Divider mb="1rem" />
            <Grid
              gridTemplateColumns={['1fr', '1fr 1fr']}
              gridAutoFlow={['row', 'column']}
              gridGap={['0', '1rem']}
              variants={listStack(1)}
            >
              {[...Array(NUMBER_OF_SPONSORS)]
                .map((_, i) => i)
                .slice(4, 5)
                .map((i) => (
                  <Sponsor key={i} i={i} hide />
                ))}
            </Grid>
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
                      <Box w="100%" pb="50%" pos="relative">
                        <Image
                          src={t(`${selectedSponsor}.logo`)}
                          alt={t(`${selectedSponsor}.name`)}
                          w="calc(100% - 2rem)"
                          pos="absolute"
                          m="auto"
                          top={0}
                          bottom={0}
                          left={0}
                          right={0}
                        />
                      </Box>
                      <Box
                        // minH="0"
                        h="100%"
                        // maxH="300px"
                        overflow="scroll"
                        borderTop="2px solid"
                        borderBottom="2px solid"
                        // fontSize="1.2rem"
                        lineHeight="1.7rem"
                        mb="2rem"
                        flex={1}
                        dangerouslySetInnerHTML={{
                          __html: t(`${selectedSponsor}.content`),
                        }}
                      ></Box>
                      <A
                        href={t(`${selectedSponsor}.link`)}
                        isExternal
                        // position="absolute"
                        bottom="6rem"
                        // w="calc(100% - 4rem)"
                      >
                        <Button rightIcon="arrow-forward" variantColor="teal" variant="outline" size="lg" w="100%">
                          Go To Website
                        </Button>
                      </A>
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
    display: flex;
    flex-direction: column;
    position: absolute;
    /* top: 15%; */
    bottom: -2rem;
    /* min-height: 40rem; */
    height: calc(80% + 2rem);
    /* max-height: 50rem; */
    width: 100%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    padding: 2rem;
    padding-bottom: 4rem;
    padding-top: 1rem;
    background-color: white;
    & > button:first-of-type {
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
    button {
      cursor: pointer;
    }
    & > a {
      &:hover {
        text-decoration: none;
      }
    }
  }

  @media screen and (min-width: 768px) {
    & > section {
      max-width: 28rem;
      margin: auto;
      height: 70%;
      max-height: 35rem;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 1rem;
      padding: 2rem;
      padding-top: 1rem;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      & > button:first-of-type {
        & > svg {
          width: 16px;
          height: 16px;
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    & > section {
      max-width: 26rem;
      height: 38rem;
      & > button {
        margin: 0.8rem;
      }
    }
  }
`

export default Sponsors
