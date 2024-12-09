'use client'
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
const [showNav, setShoNav]=useState(false);
const showNavHandler=()=>setShoNav(true);
const closeNavHandler=()=>setShoNav(false);
  return (
    <div className=''>
      <Nav openNav={showNavHandler}/>
      <MobileNav nav={showNav} closeNav={closeNavHandler} />
    </div>
  )
}

export default ResponsiveNav

