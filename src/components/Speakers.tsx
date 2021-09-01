/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'
import { useI18n } from '../hooks/useI18n'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { NUMBER_OF_SPEAKERS } from '../pages/speakers'
import { Heading, Image, Divider, CloseButton, useDisclosure, PseudoBox, Text, Icon } from '@chakra-ui/core'
import { createPortal } from 'react-dom'
import { useKey } from 'react-use'
import { NextSeo } from 'next-seo'
import Speaker from './Speaker'
import { Box, Grid, Flex, A, Button } from './MotionChakra'
import { listStack } from './Sponsors'
import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { WEBSITE_URL, WEBSITE_URL_WITH_YEAR } from '../pages/_app'

const Speakers = () => {
  const i18n = useI18n()
  const { activeLanguage: lang } = i18n
  const t = (key: string) => i18n.t(`speaker.${key}`) || i18n.t(key)
  const router = useRouter()
  const { query } = router
  const selectedSpeaker = [...Array(NUMBER_OF_SPEAKERS)]
    .map((_, i) => i)
    .filter((_, i) => t(`${i}.key`) === query.speaker)
  const isSelected = selectedSpeaker.length === 1
  const onClose = () => router.push(`/[lang]/speakers`, `/${lang}/speakers`, { shallow: true })

  useKey((e) => e.keyCode === 27, onClose)

  const title = `JSConf Korea 2020 - ${t('speakers_title')}${isSelected ? ` | ${t(`${selectedSpeaker}.name`)}` : ''}`
  const description = isSelected ? t(`${selectedSpeaker}.title`) : t('speakers_description')
  const thumb = isSelected
    ? `${WEBSITE_URL}/images/speakers/${t(`${selectedSpeaker}.key`)}_thumb.jpg`
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
        canonical={`${WEBSITE_URL_WITH_YEAR}/${lang}/speakers${isSelected ? `/${t(`${selectedSpeaker}.key`)}` : ''}`}
        openGraph={{
          title,
          description,
          images: [{ url: thumb, alt: title }],
          locale: lang,
        }}
      />
      <Box m="0 auto" maxW={820}>
        <Box
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          // animate={{ opacity: 1 }}
          // transition={{ type: 'tween', duration: 0.35, ease: 'backOut' }}
          overflow="hidden"
          p="1.5rem"
          m="0"
          fontSize="0.8rem"
        >
          <Heading fontFamily={`'Airbnb Cereal App Bold'`} as="h1" size="xl" m={0}>
            {t('speakers')}
          </Heading>
          <Divider mb="1rem" />
          <Grid gridGap="1rem" variants={listStack(0.2, 0.1)}>
            {[...Array(NUMBER_OF_SPEAKERS)].map((_, i) => (
              <Speaker i={i} key={i} />
            ))}
          </Grid>
        </Box>
        {typeof window !== 'undefined' &&
          createPortal(
            <Box>
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
                      fontFamily="'Airbnb Cereal App Medium'"
                      zIndex={20}
                      flexDir="column"
                      pos="absolute"
                      h={['calc(80% + 2rem)', 'fit-content']}
                      minH="26rem"
                      maxH={['auto', '80%']}
                      w="100%"
                      maxW={['auto', '26rem']}
                      m="auto"
                      top={['auto', 0]}
                      left={['auto', 0]}
                      right={['auto', 0]}
                      bottom={['-2rem', 0]}
                      borderRadius="1rem"
                      p={['2rem 2rem 4rem 2rem', '2rem']}
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
                      <Grid
                        gridAutoColumns="column"
                        gridTemplateColumns="4.5rem 1fr"
                        verticalAlign="top"
                        w="auto"
                        mb="1rem"
                        gridGap="1rem"
                      >
                        <Box>
                          {Array.isArray(t(`${selectedSpeaker}.image`)) ? (
                            <Box w="4.5rem" h="4.5rem" mb=".5rem" pos="relative">
                              {[...t(`${selectedSpeaker}.image`)].map((image, i) => (
                                <Image
                                  key={image}
                                  src={image}
                                  alt={image}
                                  pos="absolute"
                                  d="inline-block"
                                  w="3rem"
                                  right={i === 1 ? 0 : 'auto'}
                                  bottom={i === 1 ? 0 : 'auto'}
                                  zIndex={i === 0 ? 1 : 0}
                                  borderRadius="100%"
                                />
                              ))}
                            </Box>
                          ) : (
                            <Image
                              src={t(`${selectedSpeaker}.image`)}
                              alt={t(`${selectedSpeaker}.name`)}
                              d="inline-block"
                              w="4.5rem"
                              mb=".5rem"
                              borderRadius="100%"
                            />
                          )}
                          {t(`${selectedSpeaker}.key`) === 'yeom-n-seonghyeon' ? (
                            <>
                              <Grid gridAutoFlow="column" justifyItems="center">
                                {t(`${selectedSpeaker}.website`) && (
                                  <A
                                    href={t(`${selectedSpeaker}.website`)}
                                    isExternal
                                    d="inline-block"
                                    w="1rem"
                                    h="1rem"
                                    css={css`
                                      &:focus {
                                        box-shadow: none;
                                      }
                                    `}
                                  >
                                    <Icon name="link" d="inline-block" w="1rem" h="1rem" />
                                  </A>
                                )}
                                {t(`${selectedSpeaker}.sns`) && (
                                  <A
                                    href={t(`${selectedSpeaker}.sns.0`)}
                                    isExternal
                                    d="inline-block"
                                    w="1rem"
                                    h="1rem"
                                    css={css`
                                      &:focus {
                                        box-shadow: none;
                                      }
                                    `}
                                  >
                                    <Icon
                                      name={t(`${selectedSpeaker}.sns.0`).includes('twitter') ? 'twitter' : 'instagram'}
                                      d="inline-block"
                                      w="1rem"
                                      h="1rem"
                                    />
                                  </A>
                                )}
                                {t(`${selectedSpeaker}.github`) && (
                                  <A
                                    href={t(`${selectedSpeaker}.github.0`)}
                                    isExternal
                                    d="inline-block"
                                    w="1rem"
                                    h="1rem"
                                    css={css`
                                      &:focus {
                                        box-shadow: none;
                                      }
                                    `}
                                  >
                                    <Icon name="github" d="inline-block" w="1rem" h="1rem" />
                                  </A>
                                )}
                              </Grid>
                              <Grid gridAutoFlow="column" justifyItems="center" mt=".5rem">
                                {t(`${selectedSpeaker}.website`) && (
                                  <A
                                    href={t(`${selectedSpeaker}.website`)}
                                    isExternal
                                    opacity={0}
                                    w="1rem"
                                    h="1rem"
                                    css={css`
                                      &:focus {
                                        box-shadow: none;
                                      }
                                    `}
                                  >
                                    <Icon name="link" d="inline-block" w="1rem" h="1rem" />
                                  </A>
                                )}
                                {t(`${selectedSpeaker}.sns`) && (
                                  <A
                                    href={t(`${selectedSpeaker}.sns.1`)}
                                    isExternal
                                    d="inline-block"
                                    w="1rem"
                                    h="1rem"
                                    css={css`
                                      &:focus {
                                        box-shadow: none;
                                      }
                                    `}
                                  >
                                    <Icon
                                      name={t(`${selectedSpeaker}.sns.1`).includes('twitter') ? 'twitter' : 'instagram'}
                                      d="inline-block"
                                      w="1rem"
                                      h="1rem"
                                    />
                                  </A>
                                )}
                                {t(`${selectedSpeaker}.github`) && (
                                  <A
                                    href={t(`${selectedSpeaker}.github.1`)}
                                    isExternal
                                    d="inline-block"
                                    w="1rem"
                                    h="1rem"
                                    css={css`
                                      &:focus {
                                        box-shadow: none;
                                      }
                                    `}
                                  >
                                    <Icon name="github" d="inline-block" w="1rem" h="1rem" />
                                  </A>
                                )}
                              </Grid>
                            </>
                          ) : (
                            <Grid gridAutoFlow="column" justifyItems="center">
                              {t(`${selectedSpeaker}.website`) && (
                                <A
                                  href={t(`${selectedSpeaker}.website`)}
                                  isExternal
                                  d="inline-block"
                                  w="1rem"
                                  h="1rem"
                                  css={css`
                                    &:focus {
                                      box-shadow: none;
                                    }
                                  `}
                                >
                                  <Icon name="link" d="inline-block" w="1rem" h="1rem" />
                                </A>
                              )}
                              {t(`${selectedSpeaker}.sns`) && (
                                <A
                                  href={t(`${selectedSpeaker}.sns`)}
                                  isExternal
                                  d="inline-block"
                                  w="1rem"
                                  h="1rem"
                                  css={css`
                                    &:focus {
                                      box-shadow: none;
                                    }
                                  `}
                                >
                                  <Icon name="twitter" d="inline-block" w="1rem" h="1rem" />
                                </A>
                              )}
                              {t(`${selectedSpeaker}.github`) && (
                                <A
                                  href={t(`${selectedSpeaker}.github`)}
                                  isExternal
                                  d="inline-block"
                                  w="1rem"
                                  h="1rem"
                                  css={css`
                                    &:focus {
                                      box-shadow: none;
                                    }
                                  `}
                                >
                                  <Icon name="github" d="inline-block" w="1rem" h="1rem" />
                                </A>
                              )}
                            </Grid>
                          )}
                        </Box>
                        <Box>
                          <Text
                            fontFamily={`'Airbnb Cereal App Book'`}
                            d="inline-block"
                            fontSize="0.9rem"
                            mb=".5rem"
                            backgroundColor="#444"
                            color="white"
                            p=".2rem .5rem"
                            borderRadius="2px"
                          >
                            {t(`${selectedSpeaker}.name`)}
                          </Text>
                          <Heading fontFamily={`'Airbnb Cereal App Bold'`} as="h1" m="0" fontSize="1.1rem" mb=".5rem">
                            {t(`${selectedSpeaker}.title`)}
                          </Heading>
                        </Box>
                      </Grid>
                      <Box overflow="scroll" borderY="1px solid #888" py="1rem">
                        <Text
                          fontFamily={`'Airbnb Cereal App Book'`}
                          fontSize=".8rem"
                          fontWeight="bold"
                          mb=".4rem"
                          backgroundColor="#444"
                          d="inline-block"
                          color="white"
                          p=".2rem .4rem"
                          borderRadius="2px"
                        >
                          {t('summary')}
                        </Text>
                        <ReactMarkdown css={mdStyle}>{t(`${selectedSpeaker}.content`)}</ReactMarkdown>
                        <Text
                          fontFamily={`'Airbnb Cereal App Book'`}
                          fontSize=".8rem"
                          mt="1.5rem"
                          fontWeight="bold"
                          backgroundColor="#444"
                          d="inline-block"
                          color="white"
                          p=".2rem .4rem"
                          borderRadius="2px"
                        >
                          {t('bio')}
                        </Text>
                        <Text
                          fontFamily={`'Airbnb Cereal App Book'`}
                          mt=".4rem"
                          lineHeight="1.4rem"
                          fontSize="1rem"
                          fontWeight="normal"
                        >
                          {t(`${selectedSpeaker}.bio`)}
                        </Text>
                      </Box>
                      <A
                        href={`https://www.youtube.com/watch?v=${t(`${selectedSpeaker}.youtube_video_key`)}`}
                        isExternal
                        mt="1rem"
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
                          Go To Youtube Video
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

const mdStyle = css`
  font-family: 'Airbnb Cereal App Book';
  & > p:not(:first-of-type) {
    margin-top: 1rem;
  }
  a {
    color: rgb(49, 130, 206);
    text-decoration: underline;
  }
  & > * {
    line-height: 1.4rem;
  }
`

export default Speakers
