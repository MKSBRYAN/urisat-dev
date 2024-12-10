import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import FeatureCard from './FeatureCard'
import Icon1 from '@/public/icon1.png';
import Icon2 from '@/public/icon2.png';
import Icon3 from '@/public/icon3.png';
import Icon4 from '@/public/icon4.png';
import Icon5 from '@/public/icon5.png'

const Features = () => {
  return (
    <div id='features' className='nav_style opacity-90 shadow-gray-500 shadow-sm mt-[3rem] pt-[5rem] pb-[3rem]'>
      <SectionHeading HeadingMini="Ideal Solution for You" HeadingPrimary="Explore the powerfull driving innovation and decentralization in Web3"/>
      <div className='pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[1.5rem]'>
            <div>
                <FeatureCard title={'Decentralization'} descrption='bring your digital assets to life with our NFT expertise In the world of blockchain, Non-Fungible Tokens (NFT) open up immense horizons for creators and collectors. Our NFT services offer you tailor-made solutions to create, manage and monetize your digital assets in an innovative and secure way.' image={Icon1.src} />
            </div>
            <div>
                <FeatureCard title={'Security'} descrption='Protect your digital assets with our advanced blockchain security solutions Security is paramount in the blockchain world, where every transaction and every asset must be protected against potential threats. Our blockchain security services offer you comprehensive and robust solutions to ensure the protection of your systems and data.' image={Icon3.src} />
            </div>
            <div>
                <FeatureCard title={'Transparency'} descrption='In a world where trust and transparency are essential, blockchain offers a revolutionary solution to ensure the integrity of transactions. Using our cutting-edge technology, every transaction is recorded securely and immutably, accessible to all network participants.' image={Icon2.src} />
            </div>
            <div>
                <FeatureCard title={'Smart Contract'} image={Icon4.src} descrption='Automate and secure your transactions with our Smart Contracts services In the dynamic world of blockchain, automation and security are essential. Our smart contracts services offer you robust and reliable solutions for your decentralized transaction needs.' />
            </div>
            <div>
                <FeatureCard title={'Tokenization'} descrption='Transform your assets into digital tokens with our tokenization expertise Tokenization opens new perspectives for traditional assets by transforming them into digital tokens on the blockchain. Our tokenization services allow you to convert assets like real estate, art, stocks, and more into tokens, making them easier to trade and manage.' image={Icon5.src} />
            </div>
            <div>
                <FeatureCard title={'Scalability'} descrption='Reach new heights with our blockchain data scalability solution In the dynamic world of decentralized technologies, the ability to manage a large volume of transactions and data is crucial. Our blockchain data scalability solutions are designed to give you optimal performance, even when your network reaches high levels of utilization.' image={Icon5.src} />
            </div>
         
      </div>
    </div>

  )
}

export default Features
