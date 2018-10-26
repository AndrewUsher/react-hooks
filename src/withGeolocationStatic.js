import { useEffect, useState } from 'react'

const useGeolocation = () => {
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
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }    
    navigator.geolocation.getCurrentPosition(
      position =>
        handleLocationSuccess(position),
        handleLocationFailure,
        options
    )
  }, [])

  return geolocation
}

export default useGeolocation
