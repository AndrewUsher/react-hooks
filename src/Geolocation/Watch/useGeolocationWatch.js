import { useEffect, useState } from 'react'

const useGeolocationWatch = (options = {}) => {
  const [ geolocation, setGeolocation ] = useState({
    lat: null,
    lng: null
  })
  const [ error, setError ] = useState(null)
  const [ loading, setLoading ] = useState(true)

  const handleLocationSuccess = (position) => {
    setGeolocation({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    })
    setLoading(false)
  }

  const handleLocationFailure = () => {
    setGeolocation({
      lat: null,
      lng: null
    })
    setError("Something went wrong getting your geolocation!")
    setLoading(false)
  }

  useEffect(() => { 
    const geoTrackerId = navigator.geolocation.watchPosition(
      handleLocationSuccess,
      handleLocationFailure,
      options
    )
    return () => navigator.geolocation.clearWatch(geoTrackerId)
  }, [])

  return {
    geolocation,
    error,
    loading
  }
}

export default useGeolocationWatch
