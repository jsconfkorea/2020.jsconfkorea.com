/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import GoToTop from './svgs/GoToTop'

const GoToTopButton = () => {
  return (
    <>
      <button
        css={style}
        onClick={() => document.querySelector('#__next')!.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="go to top"
      >
        <GoToTop />
      </button>
    </>
  )
}

const style = css`
  position: fixed;
  right: 25px;
  bottom: 25px;
  width: 60px;
  padding: 0;
  font-size: 0;
  background: #ddd;
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.3s;

  cursor: pointer;
  border: none;
  outline: none;
  -webkit-appearance: none;
  border-radius: none;

  svg {
    opacity: 1;
    transition: all 0.3s;
  }

  &:hover {
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);

    svg {
      opacity: 0.85;
    }
  }

  &:active {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 768px) {
    border: solid 1px rgba(0, 0, 0, 0.1);
    right: 15px;
    bottom: 10px;
    width: 50px;
  }
`

export default GoToTopButton
