import { useState, useEffect } from 'react'

const useMouseMove = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = e => setMousePosition({ x: e.clientX, y: e.clientY })

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return mousePosition
}

export default useMouseMove
