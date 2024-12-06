import Link from "next/link";
import { XMarkIcon } from '@heroicons/react/16/solid'
import React from 'react'
interface Props{
    nav:boolean
    closeNav:()=>void
}
const MobileNav = ({nav,closeNav}:Props) => {
  const navopenStyle=nav?"translate-x-0":"translate-x-[100%]";
    return (
    <div className={`transform transition-all ${navopenStyle} md:hidden duration-200 fixed top-0 left-0 z-[200] h-[100vh] right-0 bottom-0 bg-amber-600`}>
      <XMarkIcon onClick={closeNav} className="w-[2rem] h-[2rem] absolute top-[2rem] text-white z-[202] right-[2rem]"/>
      <ul className="relative z-[201] space-y-10 flex flex-col justify-center h-[100%] items-center">
            <li className="text-[25px] cursor-pointer text-white text-primary-300 hover:text-amber-300 transition-all duration-100">
                <Link href={'/'}>Home</Link>
            </li>
            <li className="text-[25px] cursor-pointer text-white text-primary-300 hover:text-yellow-300 transition-all duration-100">
                <Link href={'/service'}>Services</Link>
            </li>
            <li className="text-[25px] cursor-pointer text-white text-primary-300 hover:text-yellow-300 transition-all duration-100">
                <Link href={'/about'}>About</Link>
            </li>
            <li className="text-[25px] cursor-pointer text-white text-primary-300 hover:text-yellow-300 transition-all duration-100">
                <Link href={'/customer'}>Customer</Link>
            </li>
            <li className="text-[25px] cursor-pointer text-white text-primary-300 hover:text-yellow-300 transition-all duration-100">
                <Link href={'/blog'}>Blog</Link>
            </li>
        </ul>
    </div>
  )
}

export default MobileNav
