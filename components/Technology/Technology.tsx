import { techItems } from "@/constant";
import React from "react";
import CardReuse from "../Common/CardReuse";

const Technology = () => {
  return (
    <section className="py-20 bg-heropattern" id="technology">
      {" "}
      <div className="container mx-auto px-6 text-center">
        {" "}
        {Array.from((techItems)).map((item,index)=>{
            return(
            <CardReuse title={item.title} description={item.description} imageSrc={item.image} key={index}/>
            );
        })}
      </div>{" "}
    </section>
  );
};

export default Technology;
