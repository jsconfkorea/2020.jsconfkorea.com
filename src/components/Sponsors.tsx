/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'
import { useI18n } from '../hooks/useI18n'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { createPortal } from 'react-dom'
import { useKey } from 'react-use'
import { NextSeo } from 'next-seo'
import { NUMBER_OF_SPONSORS } from '../pages/sponsors'
import { useEffect } from 'react'
import Sponsor from './Sponsor'
import { useDisclosure, CloseButton, PseudoBox } from '@chakra-ui/core'
import { Heading, Grid, Divider, Image, Box, Button, A, Flex } from './MotionChakra'
import { capitalize, truncate } from 'lodash/fp'
import ReactMarkdown from 'react-markdown'
import { WEBSITE_URL, WEBSITE_URL_WITH_YEAR } from '../pages/_app'

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

export const listStack = (delayChildren = 0.2, staggerChildren = 0.15) => ({
  open: {
    transition: { delayChildren, staggerChildren },
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
  const description = isSelected
    ? truncate({ length: 150 }, t(`${selectedSponsor}.content`))
    : t('sponsors_description')
  const thumb = isSelected
    ? `${WEBSITE_URL}/images/sponsors/${t(`${selectedSponsor}.key`)}_thumb.png`
    : `${WEBSITE_URL}/og-image.png`

  const { isOpen, onOpen } = useDisclosure()
  useEffect(() => {
    onOpen()
  }, [])

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${WEBSITE_URL_WITH_YEAR}/${lang}/sponsors${isSelected ? `/${t(`${selectedSponsor}.key`)}` : ''}`}
        openGraph={{
          title,
          description,
          images: [{ url: thumb, alt: title }],
          locale: lang,
        }}
      />
      <Box m="0 auto" maxW={820}>
        <Box overflow="hidden" p="1.5rem" m="0" fontSize="0.8rem" initial={false} animate={isOpen ? 'open' : 'closed'}>
          <Heading fontFamily={`'Airbnb Cereal App Bold'`} as="h1" size="xl" m={0} mb={4} variants={fadeInUp}>
            {t('sponsors')}
          </Heading>
          <Grid variants={fadeIn}>
            <Heading fontFamily={`'Airbnb Cereal App Bold'`} as="h2" size="md" m={0} mt="1rem" variants={fadeIn}>
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
                .slice(0, 2)
                .map((i) => (
                  <Sponsor key={i} i={i} />
                ))}
            </Grid>
            <Heading fontFamily={`'Airbnb Cereal App Bold'`} as="h2" size="md" m={0} mt="1rem" variants={fadeIn}>
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
              {/* <Sponsor i={0} hide /> */}
            </Grid>
            <Heading fontFamily={`'Airbnb Cereal App Bold'`} as="h2" size="md" m={0} mt="1rem" variants={fadeIn}>
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
                  <Sponsor key={i} i={i} />
                ))}
            </Grid>
          </Grid>
        </Box>
        {typeof window !== 'undefined' &&
          createPortal(
            <Box css={popupStyle}>
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
                    <Box
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={onClose}
                      pos="absolute"
                      w="100%"
                      h="100%"
                      top={0}
                      left={0}
                      zIndex={15}
                      backgroundColor="rgba(0, 0, 0, 0.5)"
                    />
                    <Flex
                      fontFamily={`'Airbnb Cereal App Bold'`}
                      zIndex={20}
                      flexDir="column"
                      pos="absolute"
                      h={['calc(80% + 2rem)', 'fit-content']}
                      minH="26rem"
                      maxH={['auto', '75%']}
                      w="100%"
                      maxW={['auto', '25rem']}
                      m="auto"
                      top={['auto', 0]}
                      left={['auto', 0]}
                      right={['auto', 0]}
                      bottom={['-2rem', 0]}
                      borderRadius="1rem"
                      p={['1rem 2rem 4rem 2rem', '1rem 2rem 2rem 2rem']}
                      backgroundColor="white"
                      boxShadow="0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                      initial={{ y: '50%', opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: '50%', opacity: 0 }}
                      // transition={{ type: 'tween', duration: 0.35, ease: 'backOut' }}
                    >
                      <PseudoBox
                        as={CloseButton}
                        border="none"
                        backgroundColor="white"
                        cursor="pointer"
                        pos="absolute"
                        right={0}
                        top={0}
                        m={['0.5rem', '0.8rem']}
                        _focus={{ boxShadow: 'none' }}
                        onClick={onClose}
                      />
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
                        h="100%"
                        overflow="scroll"
                        lineHeight="1.7rem"
                        mb="1.5rem"
                        flex={1}
                        css={css`
                          p {
                            margin-bottom: 1rem;
                          }
                        `}
                      >
                        <ReactMarkdown
                          css={css`
                            font-family: 'Airbnb Cereal App Book';
                            font-size: 0.9rem;
                          `}
                        >
                          {t(`${selectedSponsor}.content`)}
                        </ReactMarkdown>
                      </Box>
                      <A
                        href={t(`${selectedSponsor}.link`)}
                        isExternal
                        bottom="6rem"
                        css={css`
                          &:hover {
                            text-decoration: none;
                          }
                        `}
                      >
                        <Button
                          cursor="pointer"
                          rightIcon="arrow-forward"
                          variantColor="teal"
                          variant="outline"
                          size="md"
                          w="100%"
                        >
                          Go To Website
                        </Button>
                      </A>
                    </Flex>
                  </>
                )}
              </AnimatePresence>
            </Box>,
            document.querySelector('body')!,
          )}
      </Box>
    </>
  )
}

const popupStyle = css`
  @media screen and (min-width: 769px) {
    button[aria-label='Close'] {
      & > svg {
        width: 16px;
        height: 16px;
      }
    }
  }
`

export default Sponsors
