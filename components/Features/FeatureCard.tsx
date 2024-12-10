import Image from "next/image";
import React from "react";
import ButtonBlue from "../Button/ButtonBlue";
interface Props {
  image: string;
  title: string;
  descrption?: string;
}
const FeatureCard = ({ title, image, descrption }: Props) => {
  return (
    <div className="text-center text-primary-50 bg-black-1/60 p-4 rounded-lg border-y-2 border-primary-300 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-primary-300">
      <Image
        src={image}
        alt="icon"
        width={70}
        height={70}
        className="mx-auto"
      />
      <h1 className="text-[20px] mt-[1.4rem] font-[500] text-primary-50">
        {title}
      </h1>
      <p className="mt-[1rem] text-primary-50 text-start opacity-90 text-[15px]">
        {descrption}
      </p>

      <ButtonBlue text="Lean More" />
    </div>
  );
};

export default FeatureCard;
