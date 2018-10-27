import React from 'react'
import useWindowResize from './useWindowResize';

const Resize = () => {
  const size = useWindowResize()
  return (
    <section >
      <h1>Resize</h1>
      <h2>Window width is {size}</h2>
    </section>
  )
}

export default Resize