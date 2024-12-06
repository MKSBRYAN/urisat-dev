import React from 'react'
interface Props{
    text:string
}
const ButtonRed = ({text}:Props) => {
  return (
   <button className='rounded-lg px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group bg-blue-950 border-primary-700 relative hover:bg-gradient-to-r hover:from-black-1 hover:to-primary-400 text-primary-50 hover:ring-2 hover:ring-offset-2 hover:ring-primary-500 transition-all ease-out duration-300'>
    <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 group-hover:translate-40 bg-white opacity-10 rotate-12 ease'></span>
    <span className='relative'>{text}</span>
   </button>
  )
}

export default ButtonRed