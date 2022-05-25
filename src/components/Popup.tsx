/** @jsxRuntime classic */
/** @jsx jsx */
import { useToast } from '@chakra-ui/core'
import { css, jsx } from '@emotion/core'
import { AnimatePresence, motion } from 'framer-motion'
import React, { forwardRef, useState } from 'react'
import { useKey } from 'react-use'
import { useI18n } from '../hooks/useI18n'
import CloseButton from './svgs/CloseButton'

type Props = {
  isShowing: boolean
  close: () => void
}

const emailRegex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/

const Popup = ({ isShowing, close }: Props, ref: any) => {
  const { t } = useI18n()
  const [email, setEmail] = useState('')
  const toast = useToast()

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!emailRegex.test(email)) return

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (response.status < 300) {
        toast({
          position: 'top',
          title: t('newsletter_success'),
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      } else {
        toast({
          position: 'top',
          title: t('newsletter_error'),
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }
    } catch {
      toast({
        position: 'top',
        title: t('newsletter_error'),
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }

    close()
  }

  useKey((e) => e.keyCode === 27, close)
  useKey(
    (e) => isShowing && e.key === 'Enter',
    (e) => handleOnSubmit(e as any),
  )

  return (
    <AnimatePresence>
      {isShowing && (
        <>
          <motion.div css={dimStyle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
          <motion.div css={style}>
            <motion.div
              ref={ref}
              className="inner"
              initial={{ y: 1000, display: 'none' }}
              animate={{ opacity: 1, y: 0, display: 'block' }}
              exit={{ y: 1000 }}
            >
              <button onClick={close}>
                <CloseButton />
              </button>
              <form onSubmit={handleOnSubmit}>
                <p>{t('newsletter_message')}</p>
                <input
                  name="email"
                  type="email"
                  placeholder={t('newsletter_placeholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleOnSubmit(e as any)}
                />
                <button type="submit" disabled={!emailRegex.test(email)}>
                  {t('subscribe')}
                </button>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

const dimStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #ffffff55;
  z-index: 10;
`

const style = css`
  position: absolute;
  display: grid;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  overflow: hidden;

  & > .inner {
    position: absolute;
    justify-self: center;
    align-self: center;
    width: 90%;
    max-width: 350px;
    height: 220px;
    background-color: #ff7235;
    border: solid 0.4rem #ff7235;
    padding: 0.8rem;

    box-shadow: 5px 10px 5px rgba(0, 0, 0, 0.3);

    & > button {
      position: absolute;
      right: 0;
      top: 0;
      width: 40px;
      height: 40px;
      padding: 8px;
      cursor: pointer;
      background: none;
      border: none;
      svg {
        position: absolute;
        top: 8px;
        left: 8px;
        color: white;
      }
    }

    form {
      /* background: white; */
      /* padding: 70px 100px;
      max-width: 500px;
      box-sizing: border-box;
      color: white; */

      transform: translateY(10px) translateZ(0);
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3);

      p {
        color: #fff;
        font-size: 20px;
        line-height: 1.5em;
        text-align: center;
      }

      input {
        width: 100%;
        display: block;
        background: rgba(0, 0, 0, 0.2);
        border: solid rgba(0, 0, 0, 0.2) 1px;
        color: #fff;
        outline: none;
        font-size: 20px;
        line-height: 30px;
        padding: 5px 10px;
        border-radius: 3px;
        margin-top: 20px;
        box-sizing: border-box;
        -webkit-appearance: none;
        &::-webkit-input-placeholder,
        &::-moz-placeholder,
        &::-ms-placeholder,
        &::placeholder {
          color: #ffffff99;
        }
      }

      & > button {
        display: block;
        border: solid 1px rgba(0, 0, 0, 0.1);
        color: #fff;
        background: #ff7235;
        width: 100%;

        margin-top: 15px;
        padding: 10px;
        outline: none;
        border-radius: 3px;
        font-size: 20px;

        cursor: pointer;
        transform: translate3d(0px, -6px, 0);
        box-shadow: 0px 6px 0 rgba(0, 0, 0, 0.3);
        transition: transform 0.2s, box-shadow 0.2s;
        &[disabled] {
          transform: translate3d(0px, -2px, 0);
          background: #9b4206;
          box-shadow: 0px 2px 0 #ff7235;
        }
        &:hover:not([disabled]),
        &:focus:not([disabled]) {
          transform: translate3d(0px, -4px, 0);
          box-shadow: 0px 4px 0 #ff7235;
        }
        &:active:not([disabled]) {
          transform: translate3d(0px, -2px, 0);
          box-shadow: 0px 2px 0 #ff7235;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    & > .inner form {
      /* width: calc(100vw - 25px);
      padding: 30px 30px;
      border: solid 3px #ff7235;
      box-shadow: 0px 0px 0 #ff7235; */
    }
    &.active > .inner form {
      /* box-shadow: 6px 8px 0 #ff7235; */
    }
  }
`

export default forwardRef(Popup)
