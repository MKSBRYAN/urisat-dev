import Image from "next/image";
import React from "react";
import Icon1 from '@/public/crypto.png';
import Icon2 from '@/public/bit.png';
import Icon3 from '@/public/TetherLogo.png'
import Icon4 from '@/public/btc-cpu.png'
const SupportTeam = () => {
  return (
    <div className="pt-[7rem] pb-[3rem]">
      <div className="w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-[2rem]">
        <div>
          <h1 className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-black-1 leading-[2.4rem] md:leading-[3rem]">Unlock the Future of Innovation with Blockchain</h1>
          <p className="text-gray-900 opacity-90 text-[17px] mt-[1rem]">
            Discover The Transfomative Power Of Blockchain Technology, Offering Transparency , Efficiency , and Trust For Individual And Businesses. Embrace innovation, Enhance Opereting , And Stay Ahead in The Digital Age By Exploring Blockchain Today 
          </p>
          <div className="flex items-center space-x-6 mt-[2rem]">
          <Image src={Icon2} alt="explore" width={60} height={60}/>
           <div>
            <h1 className="text-[18px] text-gray-900 font-[500] mb-[0.5rem]">Bitcoin</h1>
            <p className="md:w-[70%] w-[90%] text-[15px] text-black-1 opacity-90">
            Discover The Transfomative Power Of Blockchain Technology, Offering Transparency build on  Bitcoin Technology
          </p>
           </div>
          </div>
          <div className="flex items-center space-x-6 mt-[2rem]">
          <Image src={Icon1} alt="explore" width={50} height={50}/>
           <div>
            <h1 className="text-[18px] text-gray-900 font-[500] mb-[0.5rem]">Ethereum</h1>
            <p className="md:w-[70%] w-[90%] text-[15px] text-black-1 opacity-90">
            Discover The Transfomative Power Of Blockchain Technology, Offering Transparency build on  Ethereum sytem
          </p>
           </div>
          </div>
          <div className="flex items-center space-x-6 mt-[2rem]">
          <Image src={Icon3} alt="explore" width={50} height={50}/>
           <div>
            <h1 className="text-[18px] text-gray-900 font-[500] mb-[0.5rem]">Tether</h1>
            <p className="md:w-[70%] w-[90%] text-[15px] text-black-1 opacity-90">
            Discover The Transfomative Power Of Blockchain Technology, Offering Transparency
          </p>
           </div>
          </div>
          
        </div>
        <div>
            <Image src={Icon4} alt="technology"/>
        </div>
      </div>
    </div>
  );
};

export default SupportTeam;
