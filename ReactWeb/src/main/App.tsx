import { useState } from 'react'
import './App.css'
import Header from './Header'
import HouseList from '../house/HouseList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Header subtitle='Your local(host) Warehouse Service!' />
      <HouseList/>
    </div>
  )
}

export default App