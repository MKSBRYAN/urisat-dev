import React, { Suspense } from 'react'
import Hero from './Hero/Hero'
import Features from './Features/Features'
import CustomerSupport from './CustomerSuport/CustomerSupport'
import Price from './Price/Price'
import SupportTeam from './SupportTeam/SupportTeam'
import CompanyPartner from './Company/CompanyPartner'
import Technology from './Technology/Technology'
import Particles from 'react-tsparticles'
import ParticlesBackground from './ParticlesBackground'
import ScrollToTop from './ScrollToTop/ScrollToTop'
const Home = () => {
  return (
    <div className='bg-white'>
      {/* <ParticlesBackground/> */}
      <Suspense fallback={"Loading...."}>
      <Hero/>
      </Suspense>
     
      <Features/>
      <CustomerSupport/>
      <Price/>
      <Technology/>
      <SupportTeam/>
      <ScrollToTop/>
      <CompanyPartner/>
    </div>
  )
}

export default Home
