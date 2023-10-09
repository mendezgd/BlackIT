import './App.css'
import NavBar from './Components/NavBar'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './Components/Inicio'
import IA from './Components/IA'
import Cloud from './Components/Cloud'
import IT from './Components/IT'
import Monitoreo from './Components/Monitoreo'
import Contacto from './Components/Contacto'
import Footer from './Components/Footer'
import Header from './Components/Header'
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (
    <>
      <div className="App">

        <BrowserRouter>
          <ScrollToTop />
          <NavBar />
          <Header />
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/Monitoreo' element={<Monitoreo />} />
            <Route path='/AI' element={<IA />} />
            <Route path='/Cloud' element={<Cloud />} />
            <Route path='/IT' element={<IT />} />
          </Routes>
          <Contacto id="contacto" />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
