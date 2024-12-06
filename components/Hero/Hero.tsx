import React from 'react'
import ButtonBlue from '../Button/ButtonBlue'
import ButtonRed from '../Button/ButtonRed'
import Image from 'next/image'
import heroImage from '@/public/rx-btc.png'

 const Hero = () => {
  return (
    <div className='h-[70vh] bg-black-1 lg-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col justify-center'>
        <div className='grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto'>
            <div className='col-span-2'>
                <h1 className='text-[27px] text-primary-50 md:text-[35] lg:text-[40px] mb-[1rem] font-bold leading-[2rem] md:leading-[3rem]'>
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
                <Image src={heroImage} alt='hero' />
            </div>
        </div>
    </div>
  )
}


export default Hero