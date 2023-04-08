import React from "react";
import Carousel from "./Carousel";
import CardEvi2 from "./CardEvi2";

interface Section1Props {
  id: string;
}

const Evidence2 = ({ id }: Section1Props) => {
  return (
    <section
      id={id}
      className=" bg-black h-[785px] w-full flex flex-col justify-center items-center "
    >
      <div className="w-full flex justify-center items-center text-4xl font-mono text-red-700 pb-4">
        Evidence #2
      </div>
      <div className="w-[85%] h-[685px]  bg-red-400">
        <Carousel autoSlide={false} autoSlideInterval={3000} />
      </div>
    </section>
  );
};

export default Evidence2;
