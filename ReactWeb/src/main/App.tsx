import { useState } from 'react'
import './App.css'
import Header from './Header'
import HouseList from '../house/HouseList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HouseDetails from '../house/HouseDetails'

function App() {
  return (
    <BrowserRouter>
    <div className='container'>
      <Header subtitle='Your local(host) Warehouse Service!' />
      <Routes>
        <Route path="/" element={<HouseList/>}></Route>
        <Route path="/house/:id" element={<HouseDetails/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>

  )
}

export default App