import React from 'react'
import useGeolocationWatch from './useGeolocationWatch'

const GeolocationWatch = () => {
  const { geolocation, error, loading } = useGeolocationWatch({
    enableHighAccuracy: false,
    maximumAge: 1,
    timeout: 5000
  })
  if (loading) {
    return <p>loading...</p>
  }
  return (
    <section>
      <h2>Geolocation (watch)</h2>
      <p>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition"
          rel="noopener noreferrer"
          target="_blank"
        >
          MDN - geolocation api (watchPosition)
        </a>
      </p>
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
              <em>lat: {geolocation.lat} &deg; </em>
            </p>  
            <p>
              <em>lng: {geolocation.lng} &deg; </em>
            </p>
          </>
        )
      }
    </section>
  )
}

export default GeolocationWatch
