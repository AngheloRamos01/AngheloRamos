import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import landingPage from "../assets/proj.png";
import proj10 from "../assets/proj1.png";
import proj4 from "../assets/proj2.png";
import proj2 from "../assets/proj3.png";
import proj9 from "../assets/proj4.png";
import proj from "../assets/proj5.png";
import proj1 from "../assets/proj6.png";
import proj3 from "../assets/landing page 1.png";
import blincblogs from "../assets/blincblogs1.png";
import EzTaxi from "../assets/EzTaxi.jpg";
import wordpressPort from "../assets/WordpressPort.png";
const Projects = () => {
  //list of projects
  const project = [
    {
      id: 1,
      image: wordpressPort,
      title: "Wordpress Porfolio Project",
      dsc: "It is a personal project in starting to use Wordpress",
      src: "",
      sample: "https://angheloramos.wordpress.com",
    },
    {
      id: 2,
      image: EzTaxi,
      title: "EZ Taxi: A mobile application for commuters of Baguio City",
      dsc: "This is our capstone project where me and my teammate utilized the android studio as the IDE and java as my programming laguage. This is a ride-hailing application for commuters of Baguio City",
      src: "",
      sample: "",
    },
    {
      id: 3,
      image: landingPage,
      title: "Burger Landing Page",
      dsc: "It is a personal project in starting to use react and trying to re-create the design that I made using Figma",
      src: "https://github.com/AngheloRamos01/burgerTypes",
      sample: "https://burger-types.vercel.app",
    },

    {
      id: 4,
      image: blincblogs,
      title: "Blinc Blogs: CMS website",
      dsc: "The main project that were made by me and my team. This was a CMS website made for the company where we had our internship.",
      src: "",
      sample: "",
    },
    {
      id: 5,
      image: proj1,
      title: "Re-creating a Website",
      dsc: "One of my internship task. This was to recreate the this exact design from scratch using Tailwind CSS.",
      src: "https://github.com/AngheloRamos01/CopyOfLandinPage",
      sample: "",
    },
    {
      id: 6,
      image: proj3,
      title: "Anaylizing and Creating using Tailwind CSS",
      dsc: "Trying to recreate the design provided by our supervisor from our internship to familiarize ourselves before creating our main project ",
      src: "https://github.com/AngheloRamos01/TailWindcss-j6",
      sample: "",
    },
    {
      id: 7,
      image: proj,
      title: "UC Website",
      dsc: "One of my projects from our university where we are grouped to try and amke our own version of the UC website",
      src: "https://github.com/LemuelGloria/UC-Website",
      sample: "",
    },
    {
      id: 8,
      image: proj2,
      title: "Tribute Page project",
      dsc: "One of my projects from our university where we are  tasked to create a sample tribute page",
      src: "https://github.com/AngheloRamos01/TributePage",
      sample: "https://angheloramos01.github.io/TributePage/",
    },
    {
      id: 9,
      image: proj4,
      title: "Forms of HTML",
      dsc: "One of my projects from our university where we were tasked to use the avialable templates from in the internet and analyze on how it is created",
      src: "https://github.com/AngheloRamos01/SurveyForm",
      sample: "https://angheloramos01.github.io/SurveyForm/",
    },
    {
      id: 10,
      image: proj9,
      title: "Familiarizing with HTML and CSS",
      dsc: "This is one of my projects from our university where we were tasked to familiarize our selves with the usage of HTML and CSS",
      src: "https://github.com/AngheloRamos01/Facebook",
      sample: "https://angheloramos01.github.io/Facebook/",
    },
    {
      id: 11,
      image: proj10,
      title: "First work using only HTML",
      dsc: "One of my projects from our university. This website is all about us using some of the knowledge that we gain from the first lesson that our professor taught us and it is all about tying to use the basics of HTML.",
      src: "https://github.com/AngheloRamos01/ProductLandingPage",
      sample: "https://angheloramos01.github.io/ProductLandingPage/",
    },
  ];

  return (
    <div name="Projects">
      <section>
        <div>
          <h2 className="text-2xl md:text-2xl lg:text-5xl font-goldman text-center">
            Projects
          </h2>
        </div>

        <div className="overflow-hidden relative ">
          <div className="md:flex md:animate-infinite-scroll space-x-16">
            <div className="grid md:flex space-x-16 ">
              <div className="grid md:flex items-center justify-center text-[12px]">
                {project.map(({ id, image, dsc, title, src, sample }) => (
                  <div
                    key={id}
                    className="mx-5 gap-1 md:gap-3 lg:gap-5 overflow-hidden relative "
                    aria-hidden="true"
                  >
                    <div className="rounded-lg mt-10 items-center justify-center group">
                      <div className="relative flex items-center justify-center objex-cover">
                        <img
                          src={image}
                          alt="project"
                          className="rounded-md h-[250px] lg:h-[400px] lg:w-[400px] md:max-w-none order-1 md:order-2 object-center object-cover mb-10 md:mb-0 group-hover:transition ease-in duration-200 group-hover:opacity-5"
                        />
                        {(src || sample) && (
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-300">
                            {sample && (
                              <div className="absolute top-[30%] left-[60%] text-white-600">
                                <a href={sample} target="_blank">
                                  <AiOutlineEye size={50} />
                                </a>
                              </div>
                            )}
                            {src && (
                              <div className="absolute top-[30%] left-[30%]">
                                <a href={src} target="_blank">
                                  <BsCodeSlash size={50} />
                                </a>
                              </div>
                            )}
                            <div className="absolute top-[50%] left-[0%] text-center">
                              <div>{title}</div>
                              <br />
                              <div>{dsc}</div>
                            </div>
                          </div>
                        )}
                        {!src && !sample && (
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-300">
                            <p className="absolute top-0 lg:top-[10%] xl:top-[20%] left-[10%] mx-5">
                              NOTE: Can't show any information because it's
                              either not provided or prohibited. Sorry.
                            </p>
                            <div className="absolute lg:top-[40%] xl:top-[40%] left-[0%] text-center">
                              <p>{title}</p>
                              <p>{dsc}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
