import React from 'react'
import useGeolocationStatic from './useGeolocationStatic'

const GeolocationStatic = () => {
  const { coordinates, error, loading } = useGeolocationStatic({
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: 5000
  })
  if (loading) {
    return <p>loading...</p>
  }
  return (
    <section>
      <h2>Geolocation (static)</h2>
      {
        error ? (
          <pre>
            <code>
              Error: { error }
            </code>
          </pre>
        ) : (
          <>
            <h4>
              Your current location is:
            </h4>
            <p> 
              <em>lat: {coordinates.lat}&deg; </em>
            </p>
            <p>
              <em>lng: {coordinates.lng}&deg; </em>
            </p>
          </>
        )
      }
    </section>
  )
}

export default GeolocationStatic
