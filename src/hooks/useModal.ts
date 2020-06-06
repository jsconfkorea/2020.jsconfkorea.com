import { useState } from 'react'

export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false)

  function toggle() {
    setIsShowing(!isShowing)
  }

  function close() {
    setIsShowing(false)
  }

  return {
    isShowing,
    toggle,
    close,
  }
}
