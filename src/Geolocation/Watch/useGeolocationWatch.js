import { useEffect, useState } from 'react'

const useGeolocationWatch = () => {
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
    const options = {
      enableHighAccuracy: false,
      maximumAge: 0,
      timeout: 5000
    };    

    const geoTrackerId = navigator.geolocation.watchPosition(
      position =>
        handleLocationSuccess(position),
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
