import React from 'react'
import useDeviceOrientation from './useDeviceOrientation'

const Orientation = () => {
  const orientation = useDeviceOrientation()
  return (
    <section>
      <h2>Orientation</h2>
      <ul>
        <li>Absolute: {typeof orientation.absolute !== 'undefined' && orientation.absolute.toString()}</li>
        <li>Alpha: {orientation.alpha.toFixed(2)}</li>
        <li>Beta: {orientation.beta.toFixed(2)}</li>
        <li>Gamma: {orientation.gamma.toFixed(2)}</li>
      </ul>
    </section>
  )
}

export default Orientation
