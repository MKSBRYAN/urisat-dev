'use client'
import React, { useEffect } from 'react'
import ButtonBlue from '../Button/ButtonBlue'
import ButtonRed from '../Button/ButtonRed'
import Image from 'next/image'
import heroImage from '@/public/rx-btc.png'
import AOS  from 'aos';
import "aos/dist/aos"
import AnimatedSection from '../Common/AnimatedSection'
 const Hero = () => {
     useEffect(()=>{
         AOS.init({})
        },[])
        return (
        
            <div className='hero  bg-transparent/70 bg-blend-luminosity h-[70vh lg-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col justify-center'>

        <div className=' grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto'>
            <div  className='col-span-2'>
                <h1 className='text-[27px] text-primary-50 md:text-[35] lg:text-[40px] mb-[1rem] font-bold leading-[2rem] md:leading-[3rem] bg-gradient-to-r from-primary-700 to-white bg-clip-text text-transparent text-wrap'>
                The Future of Finance <br />
                Transform Transactions With Secure <br /> Blockchain Solutions
                </h1>
                <p className='md:text-[17px] text-[15px] mb-[2rem] text-primary-50 opacity-90 font-[400]'>Immerse yourself in the world of decentralization with our innovative solutions. We are shaping the digital future with cutting-edge blockchain and Web3 technologies.</p>
                <div className='flex items-center space-x-4 md:space-x-6'>
                    <ButtonBlue text='Get Started'/>
                    <ButtonRed text='Explore Features'/>
                </div>
            </div>
            <div className='col-span-3 hidden sm:block'>
                <Image id='loading' src={heroImage} alt='hero' />
            </div>
        </div>
    </div>
  )
}


export default Hero