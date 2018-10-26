import React from 'react'
import useMouseMove from './withMouseMove'

const MouseMove = () => {
  const {x: mouseX, y: mouseY} = useMouseMove()
  return (
    <section>
      <h2>Mouse Move</h2>
      <h3>Your current mouse position is:</h3>
      <ul>
        <li>X: {mouseX}</li>
        <li>Y: {mouseY}</li>
      </ul>
    </section>
  )
}

export default MouseMove