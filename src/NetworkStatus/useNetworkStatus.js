import { useState, useEffect } from 'react'

const getCurrentConnection = () => navigator.connection || navigator.webkitConnection || navigator.mozConnection

const useNetworkStatus = () => {
  const [networkStatus, setNetworkStatus] = useState(getCurrentConnection())

  const handleNetworkChange = () => setNetworkStatus(getCurrentConnection())

  useEffect(() => {
    networkStatus && networkStatus.addEventListener('change', handleNetworkChange)

    return () => networkStatus && networkStatus.removeEventListener('change', handleNetworkChange)
  }, [])

  console.log(networkStatus)
  return networkStatus
}

export default useNetworkStatus
