import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home/Home'
import { Routes, Route } from "react-router-dom"
import About from './components/About/About'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
