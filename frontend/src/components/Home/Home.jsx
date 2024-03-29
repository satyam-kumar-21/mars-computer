import React from 'react'
import HeroSection from './HeroSection'
import Stats from './Stats'
import MeetOurTeams from './MeetOurTeams'
import Subscribe from './Subscribe'
import Teatinomials from './Testinomials'
import WhyUs from './WhyUs'
import LetUs from '../Contact/LetUs'

function Home() {
  return (
    <>
    <HeroSection />
   <Stats />
   <MeetOurTeams />
   <WhyUs />
   <Subscribe />
   <Teatinomials />
   <LetUs />
    </>
  )
}

export default Home