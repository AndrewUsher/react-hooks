import { useEffect, useState } from 'react'

const useGeolocation = (options = {}) => {
  const [ geolocation, setGeolocation ] = useState({
    coordinates: {
      lat: null,
      lng: null,
    },
    error: null,
    loading: true,
  })

  const handleLocationSuccess = (position) => setGeolocation({
    coordinates: {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    },
    error: null,
    loading: false,
  })

  const handleLocationFailure = () => setGeolocation({
    coordinates: {
      lat: null,
      lng: null
    },
    error: "Something went wrong getting your geolocation!",
    loading: false,
  })

  useEffect(() => {  
    navigator.geolocation.getCurrentPosition(
      handleLocationSuccess,
      handleLocationFailure,
      options
    )
  }, [])

  return geolocation
}

export default useGeolocation
