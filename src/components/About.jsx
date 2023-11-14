import React from "react";
import prof1 from "../assets/prof1.jpg";
import prof1nbg from "../assets/prof1nbg.png";
const About = () => {
  return (
    <div
      name="About"
      className="flex flex-col lg:flex-row items-center justify-center xl:mx-[10%] xl:mt-20 text-[#CCC8BD] gap-5 mx-10"
    >
      <div className="relative order-2 lg:order-1">
        <div className="relative md:h-[400px] md:w-[350px] lg:h-[600px] lg:w-[400px] xl:h-[700px] xl:w-[550px] group">
          <img
            src={prof1}
            alt="prof1"
            className="absolute md:h-[400px] md:w-[350px] lg:h-[600px] lg:w-[400px] xl:h-[600px] xl:w-[550px] md:group-hover:skew-x-[80deg]  md:group-hover:-translate-x-[90px] md:group-hover:h-[20px] md:group-hover:mt-[380px] lg:group-hover:skew-x-[85deg] lg:group-hover:-translate-x-[200px] lg:group-hover:h-[20px] lg:group-hover:mt-[580px] duration-200 rounded-3xl object-cover"
          />
          <img
            src={prof1nbg}
            alt="prof1nbg"
            className="absolute md:h-[400px] md:w-[350px] lg:h-[600px] lg:w-[400px] xl:h-[600px] xl:w-[550px] object-cover"
          />
        </div>
      </div>
      <div className=" flex flex-col justify-center order-1 lg:order-2">
        <div>
          <h2 className="text-2xl md:text-2xl lg:text-5xl font-goldman text-center md:text-left text-[#D9D9D9]">
            About Me
          </h2>
        </div>

        <div className="xl:w-[70%]">
          <p>
            I am a aspiring new Web Developer who is always curious on how
            things work and analyze on how it is done. Additionally, I am a hard
            working person and perpetually working on improving my skills in web
            development.
          </p>
          <br />
          <p>
            I always focus on the things that I am doing and have a goal to
            finish it as soon as possible. I loved challenges, interacting with
            people especially to those who have passion in an IT industry.
          </p>
          <br />
          <h3 className="font-bold">Academic:</h3>
          <br />
          <p>Bachelor in Information Technology Major in Web Development</p>
          <br />
          <p className="font-bold">Cum Laude</p>
          <br />
          <p>University of the Cordilleras (2023)</p>
        </div>
      </div>
    </div>
  );
};

export default About;
