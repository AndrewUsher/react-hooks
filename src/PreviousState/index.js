import React, { useState } from 'react'
import usePreviousState from './usePreviousState'

const PreviousState = () => {
  const [count, setCount] = useState(0)
  const previousCount = usePreviousState(count, 'None exists')

  return (
    <section>
      <h2>Counter with Previous State</h2>
      <button onClick={() => setCount(count + 5)}>Increment</button>
      <button onClick={() => setCount(count - 5)}>Decrement</button>
      <p>Current count: {count}</p>
      <p>Previous count: {previousCount}</p>
    </section>
  )
}

export default PreviousState
