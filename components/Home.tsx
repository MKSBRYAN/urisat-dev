import React, { Suspense } from 'react'
import Hero from './Hero/Hero'
import Features from './Features/Features'
import CustomerSupport from './CustomerSuport/CustomerSupport'
import Price from './Price/Price'
import SupportTeam from './SupportTeam/SupportTeam'
import CompanyPartner from './Company/CompanyPartner'
// import Technology from './Technology/Technology'

import ScrollToTop from './ScrollToTop/ScrollToTop'
import { AnimatedTestimonialsDemo } from './Testimonial/Testimonia'
const Home = () => {
  return (
    <div className='bg-transparent'>
      {/* <ParticlesBackground/> */}
      <Hero/>
      <Features/>
      <CustomerSupport/>
      <Price/>
     <AnimatedTestimonialsDemo/>
      <SupportTeam/>
      <ScrollToTop/>
      <CompanyPartner/>
    </div>
  )
}

export default Home
