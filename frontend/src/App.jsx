import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Stats from './components/Home/Stats'
import Teatinomials from './components/Home/Testinomials'
import Subscribe from './components/Home/Subscribe'
import MeetOurTeams from './components/Home/MeetOurTeams'
import HeroSection from './components/Home/HeroSection'

const App = () => {
  return (
    <>
    <Header />
    <HeroSection />
    <Stats />
    <MeetOurTeams />
    <Subscribe />
    <Teatinomials />
    <Footer />
    </>
  )
}

export default App