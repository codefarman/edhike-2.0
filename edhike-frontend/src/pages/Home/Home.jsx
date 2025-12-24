import React from 'react'
import Hero from './Hero'
import TrustSection from './TrustSection'
import WhyEdHike from './WhyEdhike'
import Programs from './Programs'
import ComparisonTool from './ComparisonTool'
import Testimonials from './Testimonials'
import LeadCTA from '../../components/Forms/LeadCTA'
import FAQ from './FAQ'


const Home = () => {
  return (
    <div>

     
      <div className="page-padding">
        <Hero />
        <TrustSection />
        <Programs />
        <ComparisonTool />
      </div>     
      <WhyEdHike />      
      <div className="page-padding">
        <Testimonials />
        <LeadCTA />
        <FAQ />
      </div>

    </div>
  )
}

export default Home
