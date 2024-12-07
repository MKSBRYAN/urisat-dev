import React from 'react'
import { FaGithub, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footers = () => {
    const date=new Date().getFullYear();
  return (
    <footer className='bg-black-1 text-primary-100'>

    <div className='pt-[3rem] pb-[3rem]'>
        <div className='w-[80%] mx-auto grid grid-cols-1 border-b-[1.5px] border-slate-300 pb-[2rem] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[2rem] items-center'>
            <div className='md:mx-auto mx-0'>
                <h1 className='text-[17px] text-primary-100 font-semibold mb-[1.5rem]'>Company</h1>
                <p className='text-primary-100 opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-primary-300'>About</p>
                <p className='text-primary-100 opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-primary-300'>Careers</p>
                <p className='text-primary-100 opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-primary-300'>Prime</p>
                <p className='text-primary-100 opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-primary-300'>Ventures</p>
                <p className='text-primary-100 opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-primary-300'>Support</p>
                <p className='text-primary-100 opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-primary-300'>Legal & Privacy</p>
            </div>
            <div className='md:mx-auto mx-0'>
                <h1 className='text-[17px] text-primary-100 font-semibold mb-[1.5rem]'>Ressources</h1>
                <p className='text-primary-100 opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-primary-300'>APIs</p>
                <p className='text-primary-100 opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-primary-300'>Blog</p>
                <p className='text-primary-100 opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-primary-300'>Podcast</p>
                <p className='text-primary-100 opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-primary-300'>Bitcoin Price</p>
                <p className='text-primary-100 opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-primary-300'>Ethereum Price</p>
                <p className='text-primary-100 opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-primary-300'>Solana Price</p>
            </div>
            <div className='md:mx-auto mx-0'>
                <h1 className='text-[17px] text-primary-100 font-semibold mb-[1.5rem]'>Products</h1>
                <p className='text-primary-100 opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-primary-300'>Wallet</p>
                <p className='text-primary-100 opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-primary-300'>Exchange</p>
                <p className='text-primary-100 opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-primary-300'>Explorer</p>
                <p className='text-primary-100 opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-primary-300'>Institutional</p>
                <p className='text-primary-100 opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-primary-300'>Earn</p>
                <p className='text-primary-100 opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-primary-300'>Pay</p>
            </div>
            <div className='md:mx-auto mx-0'>
                <h1 className='text-[17px] text-primary-100 font-semibold mb-[1.5rem]'>Conatct</h1>
                <p className='text-primary-100 opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-primary-300'>Email: urisatinfo@urisat.dev</p>
                <p className='text-primary-100 opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-primary-300'>Phone: +243 993 7856 111</p>
                <p className='text-primary-100 opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-primary-300'>Photograpy</p>
                <p className='text-primary-100 opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-primary-300'>Learning Portal</p>
                <div className='flex space-x-3'>
                <a className='text-white hover:text-primary-300 transition-all duration-150 ease-in-out transform hover:scale-150' href="">
                    <FaGithub/>
                </a>
                <a className='text-white hover:text-primary-300 transition-all duration-150 ease-in-out transform hover:scale-150' href="">
                    <FaLinkedin/>
                </a>
                <a className='text-white hover:text-primary-300 transition-all duration-150 ease-in-out transform hover:scale-150' href="">
                    <FaTwitter/>
                </a>
                <a className='text-white hover:text-primary-300 transition-all duration-150 ease-in-out transform hover:scale-150' href="">
                    <FaGoogle/>
                </a>
                </div>
               
            </div>
            <div className='md:mx-auto mx-0'>
                <h1 className='text-[17px] text-primary-100 font-semibold mb-[1.5rem]'>Learn</h1>
                <p className='text-primary-100 opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-primary-300'>What is Bitcoin ?</p>
                <p className='text-primary-100 opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-primary-300'>What is crypto wallet ?</p>
                <p className='text-primary-100 opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-primary-300'>What is a DEX ?</p>
                <p className='text-primary-100 opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-primary-300'>Learning Portal</p>
               
            </div>
           
        </div>
        <div className='mt-[2rem]'>
            <div className='h-full flex items-center justify-center mb-5'>
                <form action="" className='w-96 relative'>
                    <input type="email" placeholder='urisat@urisat.dev' className='w-full text-gray-800 p-4 h-12 rounded-full focus:outline-none focus:border border-primary-300' />
                    <button className='bg-primary-700 text-center px-8 py-2 rounded-full text-primary-50 absolute top-0 right-0 h-full'>Submit</button>
                </form>
            </div>
        </div>
    </div>
    <div className='text-center text-primary-100'>&copy; Copy right urisat.dev {date}</div>
</footer>
  )
}

export default Footers