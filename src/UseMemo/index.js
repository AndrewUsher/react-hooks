import React, { useMemo, useState } from 'react'

// contrived example..
function computeExpensiveValue(a, b) {
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

// const a = 0
// const b = 100000

const UseMemoExample = () => {
  const [high, setHigh] = useState(100000);

  console.log("maybe");
  const [memoizedValue, timeDiff] = useMemo(
    () => computeExpensiveValue(0, high),
    [high]
  );
  console.log("memoizedValue: ", memoizedValue);
  console.log("timeDiff: ", high);
  return (
    <section>
      <h2>useMemo Example</h2>
      <button onChange={() => setHigh(high * 10)}>Count Up To The Moon</button>

      <button>Rerun calculation</button>
      <p>Result: {memoizedValue} </p>
      <p>Time taken: {timeDiff && timeDiff.toFixed(4)} ms</p>
    </section>
  )
}

export default UseMemoExample
