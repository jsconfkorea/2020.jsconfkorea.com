/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useI18n } from '../hooks/useI18n'
import { motion } from 'framer-motion'
import { A, Image, Box } from './MotionChakra'

const teams = [
  {
    name: {
      en: 'Soeun Lee',
      ko: '이소은',
    },
    link: 'https://about.sonalee.me',
    image: '/images/sona.jpg',
  },
  {
    name: {
      en: 'Suzin You',
      ko: '유수진',
    },
    link: 'https://github.com/suzinyou',
    image: '/images/suzin.jpg',
  },
  {
    name: {
      en: 'Seungkyu Jang',
      ko: '장승규',
    },
    link: 'https://www.instagram.com/sk.jang/',
    image: '/images/seungkyu.jpg',
  },
  {
    name: {
      en: 'Jeonghyo Lee',
      ko: '이정효',
    },
    link: 'https://turtlefingers.com/',
    image: '/images/jeonghyo.jpg',
  },
  {
    name: {
      en: 'Eunjeong Ko',
      ko: '고은정',
    },
    link: 'https://github.com/godori',
    image: '/images/godori.jpg',
  },
  {
    name: {
      en: 'Sungmin Yang',
      ko: '양성민',
    },
    link: 'https://twitter.com/ysm0622_',
    image: '/images/chris.jpg',
  },
  {
    name: {
      en: 'Kiwoong Kwon',
      ko: '권기웅',
    },
    link: 'https://github.com/doondoony',
    image: '/images/kiwoong.jpg',
  },
]

const Teams = () => {
  const { activeLanguage: lang } = useI18n()
  return (
    <>
      <motion.section
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'tween', duration: 0.35, ease: 'backOut' }}
        css={style}
      >
        <div>
          {teams
            .sort((a, b) => (a.name[lang] > b.name[lang] ? 1 : -1))
            .map(({ name, link, image }) => (
              <A href={link} key={link} isExternal>
                <Image src={image} alt={name[lang]} />
                <Box>{name[lang]}</Box>
              </A>
            ))}
        </div>
      </motion.section>
    </>
  )
}

const style = css`
  margin: 0 auto;
  margin-top: -1rem;
  max-width: 820px;

  @media screen and (max-width: 1199px) {
    max-width: 768px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background-color: rgb(228, 228, 228);
    grid-gap: 1.5rem;
    padding: 1rem;
    margin: 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-top: none;
    z-index: 1;
    font-size: 0.7rem;

    @media screen and (max-width: 1199px) {
      grid-template-columns: repeat(3, 1fr);
      margin: -24px 0px 0 0px;
      padding: 30px;
      max-width: 820px;
      font-size: 0.8rem;
    }

    @media screen and (max-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
      margin: -24px 8px 0 8px;
      max-width: 768px;
      padding: 15px;
      font-size: 1rem;
    }

    a {
      img {
        display: block;
        width: 100%;
        margin-bottom: 0.5rem;
        border-radius: 100%;
        filter: grayscale(1);
        transition: all 0.2s;
        &:hover {
          filter: none;
        }
      }
      div {
        color: #333;
        text-align: center;
      }
    }
  }
`

export default Teams
