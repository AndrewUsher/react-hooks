import { useEffect, useRef } from 'react'

const usePreviousState = (value, fallback) => {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  })

  return typeof ref.current !== 'undefined' ? ref.current : fallback
}

export default usePreviousState
