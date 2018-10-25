import {useState, useEffect} from 'react'

const useWindowResize = () => {
  const [width, setWidth] = useState(window.innerWidth)

  function handleWidthChange () {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    console.log('add')
    window.addEventListener('resize', handleWidthChange)
    return () => {
      console.log('remove')
      window.removeEventListener('resize', handleWidthChange)
    }
  }, [width])
  
  return width
}

export default useWindowResize