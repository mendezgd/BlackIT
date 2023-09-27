import './App.css'
import NavBar from './Components/NavBar'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Servicios from './Components/Servicios'
import Contacto from './Components/Contacto'
import Inicio from './Components/Inicio'
import IA from './Components/IA'
import Cloud from './Components/Cloud'
import IT from './Components/IT'
import Monitoreo from './Components/Monitoreo'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Servicios' element={<Servicios />} />
          <Route path='/Contacto' element={<Contacto />} />
          <Route path='/Monitoreo' element={<Monitoreo />} />
          <Route path='/IA' element={<IA />} />
          <Route path='/Cloud' element={<Cloud />} />
          <Route path='/IT' element={<IT />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
