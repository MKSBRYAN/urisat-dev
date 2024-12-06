import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import PriceCard from './PriceCard'

const Price = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <SectionHeading
        HeadingMini='Deal for your Busness'
        HeadingPrimary='Meet our pricing plan that suit you'
        />
        <div className='w-[60%] mx-auto grid pt-[6rem] gap-[2rem] lg:gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center '>
            <div>
                {/* Price card */}
                <PriceCard bg="bg-[#1E1E1]" description='Audit de sécurité' price="19.99" num="1" plan="Starter"/>
            </div>
            <div>
                {/* Price card */}
                <PriceCard bg="bg-[#22840c]" price="Sécurité Blockchain" num="1" plan="Blockchain Security"/>
            </div>
            <div>
                {/* Price card */}
                <PriceCard bg="bg-primary-300" price="19.99" num="1" plan="Ultimate"/>
            </div>
        </div>
    </div>
  )
}

export default Price