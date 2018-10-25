import { useState } from 'react'

const useLocale = () => {
  const [locale] = useState({
    primary: navigator.language,
    others: navigator.languages
  })

  return locale
}

export default useLocale;
