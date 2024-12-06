import React from 'react'
import ButtonBlue from '../Button/ButtonBlue';
import ButtonRed from '../Button/ButtonRed';
interface Props{
    bg:string;
    num:string;
    price:string;
    plan:string;
}
const PriceCard = ({bg,num, price,plan}:Props) => {
  const large=num=="2"?"lg:scale-110 scale-100 z-[100]":"";
    return (
    <div className={`relative ${large} bg-gray-100 shadow-md`}>
        <div className={`${bg} h-[200px] flex flex-col items-center justify-center rounded-t-md font-bold`}>
            <p className='text-[20px] text-primary-300 font-[300] mb-[1.5rem]'>{plan}</p>
            <h1 className='text-[20px] text-black-1'>
                <span className='text-[30px] text-black-1 font-bold'>{price}/</span>per mo
            </h1>
        </div>
        <div className='p-4 mt-[1rem] text-center'>
            <p className='text-[16px] font-[500] border-b-[0.4px] border-gray-300 pb-2 text-black-1 opacity-90 mb-[1rem]'>
                Full Access Library
            </p>
            <p className='text-[16px] font-[500] border-b-[0.4px] border-gray-300 pb-2 text-black-1 opacity-90 mb-[1rem]'>
                Multiple WebSite
            </p>
            <p className='text-[16px] font-[500] border-b-[0.4px] border-gray-300 pb-2 text-black-1 opacity-90 mb-[1rem]'>
               NFT Devolopment
            </p>
            <p className='text-[16px] font-[500] border-b-[0.4px] border-gray-300 pb-2 text-black-1 opacity-90 mb-[1rem]'>
                Next Js Project
            </p>
            <p className='text-[16px] font-[500] border-b-[0.4px] border-gray-300 pb-2 text-black-1 opacity-90 mb-[1rem]'>
               API Mobile  Monney Airtel Orage & Vodacom
            </p>
            <p className='text-[16px] font-[500] border-b-[0.4px] border-gray-300 pb-2 text-black-1 opacity-90 mb-[1rem]'>
                Full Access Library
            </p>
            <div className='mt-[1.2rem] mb-[1.2rem] text-center'>
                {num!="2"&&<ButtonRed text='Choose Plan'/>}
                {num=="2"&&<ButtonBlue text='Choose Plan'/>}
            </div>
        </div>
    </div>
  )
}

export default PriceCard