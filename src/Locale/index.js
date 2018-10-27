import React from 'react'
import useLocale from './useLocale'

const Locale = () => {
  const { primary, others } = useLocale()
  return (
    <section>
      <h2>Locale</h2>
      <h4>
        Your current locale is: <em>{primary}</em>
      </h4>
      <h4>Any more?</h4>
      <ul>
        {others.map(single => (
          <li>{single}</li>
        ))}
      </ul>
    </section>
  )
}

export default Locale
