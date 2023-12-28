import React from "react";
import {
  BiLogoTailwindCss,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoReact,
  BiLogoFirebase,
  BiLogoJava,
  BiLogoJavascript,
} from "react-icons/bi";
import { FaFigma, FaPhp, FaLaravel } from "react-icons/fa";
import { SiMysql, SiCanva } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";

const Skills = () => {
  const skill = [
    {
      id: 1,
      name: "TAILWIND",
      child: (
        <BiLogoTailwindCss className="h-8 w-8 sm:h-9 sm:w-9 md:h-12 md:w-12 lg:h-14 lg:w-14" />
      ),
    },
    {
      id: 2,
      name: "HTML",
      child: (
        <BiLogoHtml5 className="h-8 w-8 sm:h-9 sm:w-9 md:h-12 md:w-12 lg:h-14 lg:w-14" />
      ),
    },
    {
      id: 3,
      name: "CSS",
      child: (
        <BiLogoCss3 className="h-8 w-8 sm:h-9 sm:w-9 md:h-12 md:w-12 lg:h-14 lg:w-14" />
      ),
    },
    {
      id: 4,
      name: "REACT",
      child: (
        <BiLogoReact className="h-8 w-8 sm:h-9 sm:w-9 md:h-12 md:w-12 lg:h-14 lg:w-14" />
      ),
    },
    {
      id: 5,
      name: "FIREBASE",
      child: (
        <BiLogoFirebase className="h-8 w-8 sm:h-9 sm:w-9 md:h-12 md:w-12 lg:h-14 lg:w-14" />
      ),
    },
    {
      id: 6,
      name: "JAVA",
      child: (
        <BiLogoJava className="h-8 w-8 sm:h-9 sm:w-9 md:h-12 md:w-12 lg:h-14 lg:w-14" />
      ),
    },
    {
      id: 7,
      name: "JAVASCRIPT",
      child: (
        <BiLogoJavascript className="h-8 w-8 sm:h-9 sm:w-9 md:h-12 md:w-12 lg:h-14 lg:w-14" />
      ),
    },
    {
      id: 8,
      name: "FIGMA",
      child: (
        <FaFigma className="h-8 w-8 sm:h-9 sm:w-9 md:h-12 md:w-12 lg:h-14 lg:w-14" />
      ),
    },
    {
      id: 9,
      name: "PHP",
      child: (
        <FaPhp className="h-8 w-8 sm:h-9 sm:w-9 md:h-12 md:w-12 lg:h-14 lg:w-14" />
      ),
    },
    {
      id: 10,
      name: "",
      child: (
        <SiMysql className="h-8 w-8 sm:h-9 sm:w-9 md:h-12 md:w-12 lg:h-14 lg:w-14" />
      ),
    },
    {
      id: 11,
      name: "Photoshop",
      child: (
        <DiPhotoshop className="h-8 w-8 sm:h-9 sm:w-9 md:h-12 md:w-12 lg:h-14 lg:w-14" />
      ),
    },
    {
      id: 12,
      name: "Canva",
      child: (
        <SiCanva className="h-8 w-8 sm:h-9 sm:w-9 md:h-12 md:w-12 lg:h-14 lg:w-14" />
      ),
    },
    {
      id: 12,
      name: "Laravel",
      child: (
        <FaLaravel className="h-8 w-8 sm:h-9 sm:w-9 md:h-12 md:w-12 lg:h-14 lg:w-14" />
      ),
    },
  ];
  return (
    <div
      name="Skills & Experience"
      className="flex flex-col items-center justify-center mb-16"
    >
      <div>
        <h2 className="text-2xl md:text-2xl lg:text-5xl font-goldman">
          Skills & Experience
        </h2>
      </div>
      <br />
      <div className="text-center text-[#CCC8BD]">
        <p>"A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.” -Duke Ellington</p>
        <br />
        <p className="mx-[15%]">
          I have used HTML, CSS, JavaScript, React, Tailwind, PHP, MySQL to
          build small and medium website applications as an academic and my
          personal project, I have also used Java together with Firebase to
          build our thesis. I have experience in using different design/editing
          websites and applications like Figma, Canva, Photoshop, and CapCut.
        </p>
        <br />
      </div>
      <div>
        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-center justify-center gap-10 md:gap-15 lg:gap-20 text-white">
          {skill.map(({ id, name, child }) => (
            <li
              key={id}
              className="flex flex-col items-center justify-center text-center "
            >
              {child}
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
