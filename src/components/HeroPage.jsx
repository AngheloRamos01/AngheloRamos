import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import heroimg1 from "../assets/heroimg1.png";
import heroimg2 from "../assets/heroimg2.png";
import heroimg3 from "../assets/heroimg3.png";

const HeroPage = () => {
  const [text] = useTypewriter({
    words: ["Developer", "Designer"],
    loop: {},
    delaySpeed: 2000,
    typeSpeed: 100,
  });
  return (
    <div
      name="Home"
      className="flex flex-col lg:flex-row items-center justify-center lg:justify-between xl:justify-around lg:ml-20 lg:mr-32 "
    >
      <div className="order-2 lg:order-1">
        <p className="font-goldman text-center text-[40px] md:text-[90px] lg:text-[65px] xl:text-[90px]">
          ANGHELO
        </p>
        <p className="font-goldman text-center text-[40px] md:text-[90px] lg:text-[65px]  xl:text-[90px] md:-mt-12">
          RAMOS
        </p>
        <h3 className="font-goldman text-center text-lg md:text-[30px] lg:text-[25px] xl:text-[40px] text-[#848484]">
          Front-End {text}
          <Cursor />
        </h3>
      </div>
      <div className="relative lg:mr-10 order-1 lg:order-2">
        <div className=" relative h-[200px] w-[120px] md:h-[400px] md:w-[250px] lg:h-[400px] lg:w-[250px] xl:h-[600px] xl:w-[400px] group">
          <img
            src={heroimg3}
            alt="img1"
            className=" absolute h-[150px] w-[100px] md:h-[300px] md:w-[200px] lg:h-[300px] lg:w-[200px] xl:h-[500px] xl:w-[340px] group-hover:translate-x-[75px] group-hover:rotate-[40deg] mt-10 md:group-hover:translate-x-[160px] md:group-hover:rotate-[40deg] md:group-hover:mt-20 lg:group-hover:translate-x-[140px] lg:group-hover:rotate-[38deg] lg:mt-10 xl:group-hover:translate-x-[290px] xl:group-hover:rotate-45 xl:group-hover:mt-12 duration-200 rounded-3xl object-cover"
          />
          <img
            src={heroimg2}
            alt="img1"
            className=" absolute h-[150px] w-[100px] md:h-[300px] md:w-[200px] lg:h-[300px] lg:w-[200px] xl:h-[500px] xl:w-[340px] group-hover:-translate-x-[50px] group-hover:-rotate-[40deg] mt-10 md:group-hover:-translate-x-[105px] md:group-hover:-rotate-[40deg] md:group-hover:mt-20 xl:group-hover:-translate-x-[210px] xl:group-hover:-rotate-45 xl:group-hover:mt-12 duration-200 rounded-3xl object-cover"
          />
          <img
            src={heroimg1}
            alt="img1"
            className=" absolute h-[200px] w-[120px] md:h-[400px] md:w-[250px] lg:h-[400px] lg:w-[250px] xl:h-[600px] xl:w-[450px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
