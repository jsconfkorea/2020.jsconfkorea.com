import { useEffect, useRef } from 'react'

const useRequestAnimationFrame = (callback: Function, delay?: number | null) => {
  const savedCallback = useRef<Function>(() => { })

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    const ref = requestAnimationFrame(() => savedCallback.current())
    return () => cancelAnimationFrame(ref)
  })
}

export default useRequestAnimationFrame
