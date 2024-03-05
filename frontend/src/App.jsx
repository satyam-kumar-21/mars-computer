import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home/Home'
import { Routes, Route } from "react-router-dom"
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Services from './components/Service/Services'
import Batches from './components/Batches/Batches'
import SeeAll from './components/Organization/See all/SeeAll'
import Organization from './components/Organization/Organization'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/batches' element={<Batches />} />
        <Route path='/contact' element={<Contact />} />


<Route path='/organization' element={<Organization />} />
        <Route path='/organization/all' element={<SeeAll />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
