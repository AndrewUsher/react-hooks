import React, { Fragment } from 'react'
import useNetworkStatus from './useNetworkStatus'

const NetworkStatus = () => {
  const status = useNetworkStatus()
  console.log('status in component', status)
  return (
    <section>
      <h2>Network Status</h2>
      {status && (
        <Fragment>
          <p>Effective Type: {status.effectiveType}</p>
          <p>Round trip time estimate: {status.rtt} ms</p>
          <p>This user is {!status.saveData && 'not'} trying to save data.</p>
        </Fragment>
      )}
    </section>
  )
}

export default NetworkStatus
