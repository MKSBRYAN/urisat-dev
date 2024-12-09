import React from 'react'

interface Props{
    HeadingMini:string;
    HeadingPrimary:string
}
const SectionHeading = ({HeadingMini,HeadingPrimary}:Props) => {
  return (
    <div className='text-center p-2'>
        <p className='text-primary-50 md:text-[16px] text-[15px]'>
            {HeadingMini}
        </p>
        <h1 className='mt-[0.5rem] mx-auto w-[50%] justify-center text-center font-bold text-[24px] md:text-[30px] text-primary-50'>{HeadingPrimary}</h1>
    </div>
  )
}

export default SectionHeading