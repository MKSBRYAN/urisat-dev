import Link from "next/link";
import React from "react";
import ButtonRed from "../Button/ButtonRed";
import ButtonBlue from "../Button/ButtonBlue";
import { Bars3BottomRightIcon } from "@heroicons/react/16/solid";
interface Props{
    openNav:()=>void
}
const Nav = ({openNav}:Props) => {
  return (
    <div className="nav_style h-[12vh] border-b-1 border-primary-300 shadow-sm  shadow-primary-300 relative">
      <div className="w-[85%] flex items-center justify-between mx-auto h-[12vh] static">
        <h1 className="text-[16px] md:text-[25px] font-bold  text-primary-50">
          <span className="text-[27px] md:text-[40px] text-primary-700 ">U</span>
          risat
        </h1>
        <ul className="hidden lg:flex items-center font-bold  text-primary-50 space-x-10">
            <li className="text-[17px] cursor-pointer  hover:text-amber-600 transition-all duration-100">
                <Link href={'/'}>Home</Link>
            </li>
            <li className="text-[17px] cursor-pointer  hover:text-amber-600 transition-all duration-100">
                <Link  href={'#features'}>Features</Link>
            </li>
            <li className="text-[17px] cursor-pointer hover:text-amber-600 transition-all duration-100">
                <Link href={'#technology'}>Technology</Link>
            </li>
            <li className="text-[17px] cursor-pointer  hover:text-amber-600 transition-all duration-100">
                <Link href={'/customer'}>Customer</Link>
            </li>
            <li className="text-[17px] cursor-pointer  hover:text-amber-600 transition-all duration-100">
                <Link href={'/blog'}>Blog</Link>
            </li>
        </ul>
        <div className="flex items-center space-x-2 md:space-x-5">
            <ButtonBlue text="Sing Up"/>
            <ButtonRed text="Login"/>
            <Bars3BottomRightIcon onClick={openNav} className="w-[1.5rem] lg:hidden h-[1.5rem] text-primary-300 cursor-pointer"/>      
        </div>
      </div>
    </div>
  );
};

export default Nav;
