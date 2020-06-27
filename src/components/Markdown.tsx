/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import ReactMarkdown from 'react-markdown'
import React, { Children, ReactNode } from 'react'
import { motion } from 'framer-motion'

export { default as getStaticProps } from '../utils/getStaticProps'

type Props = {
  children: ReactNode
}

function flatten(text: string, child: any): any {
  return typeof child === 'string' ? text + child : Children.toArray(child.props.children).reduce(flatten, text)
}

function HeadingRenderer(props: any) {
  const children = Children.toArray(props.children)
  const text = children.reduce(flatten, '')
  const slug = text.toLowerCase().replace(/\W/g, '-')
  return React.createElement('h' + props.level, { id: slug }, props.children)
}

const Markdown = ({ children }: Props) => {
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'tween', duration: 0.35, ease: 'backOut' }}
        css={style}
      >
        <ReactMarkdown renderers={{ heading: HeadingRenderer }} linkTarget="_blank">
          {children}
        </ReactMarkdown>
      </motion.div>
    </>
  )
}

const style = css`
  font-family: 'Airbnb Cereal App Book', sans-serif;
  letter-spacing: 0px;
  margin: 0px auto;
  max-width: 820px;
  padding: 30px 30px;
  color: #333;
  border: solid 1px rgba(0, 0, 0, 0.1);
  background-color: rgb(228, 228, 228);
  box-sizing: border-box;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Airbnb Cereal App Bold', sans-serif;
  }

  a,
  strong {
    font-family: 'Airbnb Cereal App Medium', sans-serif;
  }

  h1 {
    margin-top: 80px;
    margin-bottom: 25px;
    font-size: 25px;

    &:first-of-type {
      margin-top: 0px;
      margin-bottom: 50px;
      font-size: 35px;
      border-bottom: solid 1px #333;
      padding-bottom: 5px;
    }
  }
  h2 {
    margin-top: 60px;
    margin-bottom: 20px;
    font-size: 20px;
  }
  h3 {
    margin-top: 50px;
    margin-bottom: 20px;
    font-size: 18px;
  }
  p {
    margin-top: 15px;
    font-size: 15px;
    line-height: 1.5em;
  }
  ul {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  li {
    margin-top: 6px;
    font-size: 15px;
    line-height: 1.5em;
    border-radius: 3px;
  }
  ul li {
    border: solid 1px #333;
    padding: 6px 12px;
  }

  ol li {
    margin-left: 20px;
  }
  a {
    color: #333;
    border-bottom: solid 1px #333;

    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }

  blockquote {
    margin: 0;
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.05);
    border: solid 1px rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 1200px) {
    font-size: 80px;
    max-width: 768px;
  }

  @media screen and (max-width: 768px) {
    font-size: 60px;
    margin: 8px 8px 20px;
    padding: 15px;
    h1 {
      margin-top: 50px;
      margin-bottom: 20px;
      font-size: 20px;
      line-height: 1.5em;

      &:first-of-type {
        font-size: 30px;
      }
    }
    h2 {
      margin-top: 40px;
      margin-bottom: 15px;
      font-size: 16px;
    }
    p {
      margin-top: 15px;
      font-size: 15px;
      line-height: 1.5em;
    }
    ul {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    li {
      margin-top: 10px;
      font-size: 15px;
      line-height: 1.5em;
    }
  }
`

export default Markdown
