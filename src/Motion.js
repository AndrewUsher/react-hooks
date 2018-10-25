import React from 'react'
import useDeviceMotion from './withDeviceMotion'

const Motion = () => {
  const { acceleration } = useDeviceMotion()
  
  return (
    <section>
      <h2>Motion</h2>
      <ul>
        <li>Acceleration: {acceleration}</li>
      </ul>
    </section>
  )
}

export default Motion