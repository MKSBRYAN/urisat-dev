// components/Card.tsx
import Image from "next/image";
import React from "react";
interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
}
const CardReuse: React.FC<CardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {" "}
      <Image className="w-full" src={imageSrc} alt={title} width={100} height={100} />{" "}
      <div className="px-6 py-4">
        {" "}
       
        <p className="text-gray-700 text-base"> {description} </p>{" "}
      </div>{" "}
    </div>
  );
};
export default CardReuse;
