import React from 'react'
import Hero from './Hero/Hero'
import Features from './Features/Features'
import CustomerSupport from './CustomerSuport/CustomerSupport'
import Price from './Price/Price'
import SupportTeam from './SupportTeam/SupportTeam'
import CompanyPartner from './Company/CompanyPartner'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <CustomerSupport/>
      <Price/>
      <SupportTeam/>
      <CompanyPartner/>
    </div>
  )
}

export default Home