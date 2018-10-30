import React from 'react'
import useDeviceMotion from './useDeviceMotion'

const Motion = () => {
  const { acceleration: { x, y, z } } = useDeviceMotion()
  return (
    <section>
      <h2>Motion</h2>
      <ul>
        <li>x: {x}</li>
        <li>y: {y}</li>
        <li>z: {z}</li>
      </ul>
    </section>
  )
}

export default Motion