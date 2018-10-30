import { useState, useEffect } from 'react'

const useWindowResize = () => {
  const [width, setWidth] = useState(window.innerWidth)

  function handleWidthChange() {
    setWidth(window.innerWidth)
  }

  useEffect(
    () => {
      window.addEventListener('resize', handleWidthChange)
      return () => window.removeEventListener('resize', handleWidthChange)
    },
    []
  )

  return width
}

export default useWindowResize
