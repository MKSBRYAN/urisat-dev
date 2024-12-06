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
    <div className="text-center bg-black-1/40 p-4 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
      <Image
        src={image}
        alt="icon"
        width={70}
        height={70}
        className="mx-auto"
      />
      <h1 className="text-[20px] mt-[1.4rem] font-[500] text-black-1">
        {title}
      </h1>
      <p className="mt-[1rem] text-black-1 text-justify opacity-90 text-[15px]">
        {descrption}
      </p>

      <ButtonBlue text="Lean More" />
    </div>
  );
};

export default FeatureCard;
