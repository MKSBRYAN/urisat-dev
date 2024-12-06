import Image from 'next/image'
import React from 'react'
import partner from '@/public/wazi.webp'
const CompanyPartner = () => {
  return (
    <div className='pt-[6rem] pb-[3rem]'>
        <h1 className='mb-[1.5rem] font-bold text-[22px] text-center md:text-[30px] text-black-1'> Company partner also  worked with us</h1>
        <p className='w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] mx-auto text-[17px] text-center text-gray-950 opacity-90'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore dignissimos tempora ipsa repellat non, veritatis iste optio necessitatibus natus dolores ex quaerat ipsam eaque. Necessitatibus magni sit officiis minima. Id?
        </p>
        <p className='w-[90%] mt-[1.7rem] cursor-pointer font-[500] sm:w-[85%] md:w-[75%] lg:w-[65%] mx-auto text-[17px] text-center text-gray-950 opacity-90'>
            Explore Detail
        </p>
        <div className='mt-[2rem] text-center w-[80%] mx-auto'>
          <Image src={partner} alt='logo'/>
        </div>
    </div>
  )
}

export default CompanyPartner