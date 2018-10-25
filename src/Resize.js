import React, {useState} from 'react'
import useWindowResize from './withWindowResize';

const Resize = () => {
  const [name, setName] = useState('Drew')
  const handleChange = (e) => setName(e.target.value)
  const size = useWindowResize()
  return (
    <section >
      <h1>Resize</h1>
      <h2>Window width is {size}</h2>
      <input type="text" value={name} onChange={handleChange}/>
    </section>
  )
}

export default Resize