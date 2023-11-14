import React, { useState } from "react";
import logo from "../assets/MyLogo.png";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
const NavBar = () => {
  const [toggled, setToggled] = useState(false);

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
    <div className="flex items-center justify-evenly ">
      <ul className="hidden lg:flex  xl:gap-5 ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200 lg:text-xs xl:text-xl"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setToggled(!toggled)}
        className="cursor-pointer pr-2 z-20 text-gray-500 lg:hidden order-2 "
      >
        {toggled ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
      <div>
        <img src={logo} alt="myLogo" className="h-16 w-16 md:h-24 md:w-24" />
      </div>
      <div>
        <button className="hidden lg:flex bg-[#CCCBE1] text-[#141416] rounded-full py-2 px-5">
          <Link to="Contact" smooth duration={500} className="cursor-pointer ">
            Contact Me
          </Link>
        </button>
      </div>

      {toggled && (
        <ul className="flex flex-col  items-center absolute top-0 left-0 md:left-[35%] w-full h-[500px] md:w-[500px]  md:h-[580px] z-10 pt-20 bg-gradient-to-b from-black to-gray-800 text-gray-500 rounded-s-2xl">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer px-4  py-4 text-lg md:text-2xl "
            >
              <Link
                onClick={() => setToggled(!toggled)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          <Link
            to="Contact"
            className="cursor-pointer px-4  py-4 text-lg md:text-2xl"
          >
            Contact Me
          </Link>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
