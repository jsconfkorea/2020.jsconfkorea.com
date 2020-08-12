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
import { Box, Grid, Flex, A } from './MotionChakra'
import { listStack } from './Sponsors'
import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

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
  const thumb = isSelected ? `/images/speakers/${t(`${selectedSpeaker}.key`)}_thumb.jpg` : '/og-image.png'

  const { isOpen, onOpen } = useDisclosure()
  useEffect(() => {
    onOpen()
  }, [])

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          images: [{ url: thumb }],
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
          <Heading as="h1" size="xl" m={0}>
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
                      h={['calc(80% + 2rem)', 'fit-contento', 'fit-content']}
                      maxH={['auto', '75%']}
                      w="100%"
                      maxW={['auto', '28rem', '26rem']}
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
                          <Image
                            src={t(`${selectedSpeaker}.image`)}
                            alt={t(`${selectedSpeaker}.name`)}
                            d="inline-block"
                            w="4.5rem"
                            mb=".5rem"
                            borderRadius="100%"
                          />
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
                        </Box>
                        <Box>
                          <Text d="inline-block" fontSize="1rem" m=".5rem 0">
                            {t(`${selectedSpeaker}.name`)}
                          </Text>
                          <Heading as="h1" m="0" fontSize="1rem" mb=".5rem">
                            {t(`${selectedSpeaker}.title`)}
                          </Heading>
                        </Box>
                      </Grid>
                      <Box overflow="scroll" borderY="1px solid #888" py=".5rem">
                        <Text fontSize=".8rem" fontWeight="bold" mb=".4rem">
                          {t('summary')}
                        </Text>
                        <ReactMarkdown css={mdStyle}>{t(`${selectedSpeaker}.content`)}</ReactMarkdown>
                        <Text fontSize=".8rem" mt="1.2rem" fontWeight="bold">
                          {t('bio')}
                        </Text>
                        <Text mt=".4rem" fontSize="1rem" fontWeight="normal">
                          {t(`${selectedSpeaker}.bio`)}
                        </Text>
                      </Box>
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
  & > * {
    font-family: 'Airbnb Cereal App Book';
    line-height: 1.2rem;
  }
`

export default Speakers
