import React from 'react'
import Ceo from './Ceo'
import Company from './Company'
import MeetOurTeams from '../Home/MeetOurTeams'
import FreeTrial from './FreeTrial'
import VisionMission from './VissionMission'
import Subscribe from '../Home/Subscribe'

function About() {
  return (
   <>
   <Company />
   <Ceo />
   <VisionMission />
   <MeetOurTeams />
   <FreeTrial />
   <Subscribe />
   </>
  )
}

export default About