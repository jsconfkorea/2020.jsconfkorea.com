import { useEffect } from 'react'

export const useOnClickOutside = (ref: React.RefObject<HTMLFormElement>, callback: Function) => {
  const handleOutsideClick = (event: Event) => {
    const node = ref.current
    if (!node?.contains(event.target as Node)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('touchstart', handleOutsideClick)
    }
  })
}
