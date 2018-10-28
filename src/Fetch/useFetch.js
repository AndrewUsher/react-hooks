import { useState, useEffect } from 'react'

const useFetch = url => {
  const [fetchInfo, setFetchInfo] = useState({
    data: null,
    error: false,
    loading: true
  })

  const makeRequest = () =>
    fetch(url)
      .then(res => res.json())
      .then(data =>
        setFetchInfo({
          ...fetchInfo,
          data,
          error: false,
          loading: false
        })
      )
      .catch(err => setFetchInfo({ error: true, data: null, loading: false }))

  useEffect(() => {
    setFetchInfo({
      data: null,
      error: false,
      loading: true
    })
    makeRequest()
  }, [])

  return fetchInfo
}

export default useFetch
