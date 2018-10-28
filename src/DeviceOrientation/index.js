import React from 'react'
import useDeviceOrientation from './useDeviceOrientation'

const Orientation = () => {
  const orientation = useDeviceOrientation()
  return (
    <section>
      <h2>Orientation</h2>
      <ul>
        <li>Absolute: {orientation.absolute.toString()}</li>
        <li>Alpha: {orientation.alpha}</li>
        <li>Beta: {orientation.beta}</li>
        <li>Gamma: {orientation.gamma}</li>
      </ul>
    </section>
  )
}

export default Orientation