import React from "react";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-scroll";

const Footer = () => {
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Skills & Experience",
    },
    {
      id: 4,
      link: "Certificates",
    },
    {
      id: 5,
      link: "Projects",
    },
  ];
  return (
    <div className=" mt-5 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] ">
      <div className="flex items-center justify-center gap-5  ">
        <div className="my-5">
          <h3>
            <a
              href="https://www.facebook.com/ramos.anghelo.20/"
              className="flex flex-col items-center "
            >
              <BiLogoFacebookSquare className="h-10 w-10  md:h-14 md:w-14 lg:h-14 lg:w-14" />
            </a>
          </h3>
        </div>
        <div className="my-5">
          <h3>
            <a
              href="https://www.instagram.com/ghelo.anghelo_ramos/"
              className="flex flex-col items-center "
            >
              <BsInstagram className="h-8 w-8 sm:h-9 sm:w-9 md:h-12 md:w-12 lg:h-12 lg:w-12" />
            </a>
          </h3>
        </div>
        <div className="my-5">
          <h3>
            <a
              href="https://twitter.com/ghelo_x"
              className="flex flex-col items-center "
            >
              <RiTwitterXFill className="h-8 w-8 sm:h-9 sm:w-9 md:h-12 md:w-12 lg:h-12 lg:w-12" />
            </a>
          </h3>
        </div>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-center border-t-2 border-t-sky-200">
        <ul className="flex flex-col lg:flex-row text-center xl:gap-5 my-5 lg:my-10">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200 lg:text-xs xl:text-xl"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <span className=" lg:top-5 lg:right-0 lg:absolute lg:mr-10 text-3xl lg:text-5xl animate-bounce">
          <Link to="Home" smooth duration={500}>
            ⬆️
          </Link>
        </span>
      </div>
      <div className=" text-center">
        <p className="text-center text-gray-500">
          @2023 Portfolio Created by Anghelo Ramos
        </p>
      </div>
    </div>
  );
};

export default Footer;
