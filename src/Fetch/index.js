import React from 'react'
import useFetch from './useFetch'

const Fetch = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users')
  return (
    <section>
      <h2>Fetch</h2>
      {loading && <h3>Loading...</h3>}
      {data && <pre>{JSON.stringify(data.slice(0, 2), null, 2)}</pre>}
      {error && <h3>Oops.. Something went wrong</h3>}
    </section>
  )
}

export default Fetch
