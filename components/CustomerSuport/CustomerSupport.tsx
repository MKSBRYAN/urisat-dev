import Image from 'next/image'
import React from 'react'
import customImage from '@/public/assets/tech.png'
import { CheckIcon } from '@heroicons/react/16/solid'
const CustomerSupport = () => {
  return (
    <div id='technology' className='pt-[5rem] pb-[3rem]'>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center'>
            <div className='order-2 lg:order-1'>
                <Image className='img' src={customImage} width={550} height={550} alt='custorm'/>
            </div>
            <div className='order-1 lg:order-2'>
                <h1 className='text-[20px] md:text-[25px] lg:text-[28px] text-black-1 font-bold leading-[2rem] md:leading-[3rem]'>
                    Customer support is our main priority with hundred percent sastifaction
                </h1>
                <p className='mt-[1.5rem] mb-[1.5rem] text-black-1 opacity-90 text-[15px] md:text-[16px]'>

                Automate and secure your transactions with our Smart Contracts services

In the dynamic world of blockchain, automation and security are essential. Our smart contracts services offer you robust and reliable solutions for your decentralized transaction needs.
                </p>
                <div className='flex items-center mb-[1rem] space-x-3'>
                    <CheckIcon className='w-[1.3rem] h-[1.3rem] text-primary-700'/>
                    <p className='text-[17px] text-black-1 font-[500]'>Développement sur mesure</p>
                </div>
                <div className='flex items-center mb-[1rem] space-x-3'>
                    <CheckIcon className='w-[1.3rem] h-[1.3rem] text-primary-700'/>
                    <p className='text-[17px] text-black-1 font-[500]'>Audits de sécurité</p>
                </div>
                <div className='flex items-center mb-[1rem] space-x-3'>
                    <CheckIcon className='w-[1.3rem] h-[1.3rem] text-primary-700'/>
                    <p className='text-[17px] text-black-1 font-[500]'>Intégration et déploiement</p>
                </div>
                <div className='flex items-center mb-[1rem] space-x-3'>
                    <CheckIcon className='w-[1.3rem] h-[1.3rem] text-primary-700'/>
                    <p className='text-[17px] text-black-1 font-[500]'>Consultation et support</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CustomerSupport