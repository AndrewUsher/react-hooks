import { useState, useEffect } from 'react'

const useDeviceMotion = () => {
  const [motion, setMotion] = useState({
    acceleration: {
      x: 0,
      y: 0,
      z: 0
    }
  })

  const handleMotionChange = e => setMotion({ acceleration: e.acceleration })

  useEffect(
    () => {
      window.addEventListener('devicemotion', handleMotionChange)
      return () =>
        window.removeEventListener('devicemotion', handleMotionChange)
    },
    []
  )

  return motion
}

export default useDeviceMotion
