import { useState } from 'react'
import './App.css'
import Header from './Header'
import HouseList from '../house/HouseList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HouseDetails from '../house/HouseDetails'
import HouseAdd from '../house/HouseAdd'
import HouseEdit from '../house/HouseEdit'

function App() {
  return (
    <BrowserRouter>
    <div className='container'>
      <Header subtitle='Your local(host) Warehouse Service!' />
      <Routes>
        <Route path="/" element={<HouseList/>}></Route>
        <Route path="/house/:id" element={<HouseDetails/>}></Route>
        <Route path="/house/add" element={<HouseAdd/>}></Route>
        <Route path="/house/edit/:id" element={<HouseEdit/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>

  )
}

export default App