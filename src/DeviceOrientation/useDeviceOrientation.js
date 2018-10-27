import { useState, useEffect } from 'react'

const useDeviceOrientation = () => {
  const [orientation, setOrientation] = useState({
    absolute: 0,
    alpha: 0,
    beta: 0,
    gamma: 0
  })

  const handleOrientationChange = e =>
    setOrientation({
      absolute: e.absolute,
      alpha: e.alpha,
      beta: e.beta,
      gamma: e.gamma
    })

  useEffect(
    () => {
      window.addEventListener('deviceorientation', handleOrientationChange)

      return () =>
        window.removeEventListener('deviceorientation', handleOrientationChange)
    },
    []
  )

  return orientation
}

export default useDeviceOrientation
