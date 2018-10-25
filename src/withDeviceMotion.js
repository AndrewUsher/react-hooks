import {useState, useEffect} from 'react'

const useDeviceMotion = () => {
  const [motion, setMotion] = useState({acceleration: 0})

  const handleMotionChange = (e) => setMotion({acceleration: e.acceleration})

  useEffect(() => {
    window.addEventListener('devicemotion', handleMotionChange)
    return () => window.removeEventListener('devicemotion', handleMotionChange)
  }, [window])

  return motion
}


export default useDeviceMotion