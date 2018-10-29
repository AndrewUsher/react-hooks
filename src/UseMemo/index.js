import React, { useMemo } from 'react'

// contrived example..
function computeExpensiveValue(a = 0, b = 1000) {
  const t0 = performance.now()
  console.log("now: ", t0)

  let total = 0;
  for (let i = a; i < b; i++) {
    total++
  }
  const t1 = performance.now()
  console.log("t1: ", t1)

  const timeDiff = t1 - t0 // ms

  return [total, timeDiff]
}

const a = 0
const b = 100000

const UseMemoExample = () => {
  const [memoizedValue, timeDiff] = useMemo(
    () => computeExpensiveValue(a, b),
    [a, b]
  );
  console.log("memoizedValue: ", memoizedValue);
  console.log("timeDiff: ", timeDiff);
  return (
    <section>
      <h2>useMemo Example</h2>
      <button>Rerun calculation</button>
      <p>Result: {memoizedValue} </p>
      <p>Time taken: {timeDiff && timeDiff / 1000} sec</p>
    </section>
  )
}

export default UseMemoExample
