import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home/Home'
import { Routes, Route } from "react-router-dom"
import About from './components/About/About'
import Features from './components/Features/Features'
import Courses from './components/Courses/Courses'
import Contact from './components/Contact/Contact'
import Team from './components/Team/Team'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/features' element={<Features />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
