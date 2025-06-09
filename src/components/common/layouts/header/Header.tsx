import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const Header = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: "Introduction", path: "/introduction" },
    { name: "Projects", path: "/projects" },
    { name: "Activities", path: "/activities" },
  ];

  return (
    <div className="w-full h-16 flex items-center justify-between px-8 fixed top-0 bg-white shadow-md z-[100]">
      <div className="text-center text-gray-700 font-bold">
        <h1
          className="text-3xl text-[#b97979] h-[100%] tracking-tightest hover:cursor-pointer"
          style={{ fontFamily: "Pacifico" }}
          onClick={() => navigate("")}
        >
          TTT 's Portfolio
        </h1>
      </div>

      {/* Destop menu */}
      <div className="hidden md:grid grid-cols-3 gap-4 text-xl">
        {navItems.map((item) => (
          <button key={item.path}
            className={`${currentPath === item.path || (item.path === "/introduction" && currentPath === "/")
              ? "text-[#b97979]"
              : "text-black"} hover:text-[#b97979] cursor-pointer font-semibold text-lg`}
            onClick={() => {
              navigate(item.path);
              setIsMenuOpen(false);
            }}
          >
            {item.name}
          </button>
        ))}
      </div>


      {/* mobile menu toggle */}
      <div className="md:hidden ">
        <button>
          <FontAwesomeIcon
            icon={isMenuOpen ? faXmark : faBars}
            className="text-2xl text-[#b97979] cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)} />

        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-start px-8 py-4 space-y-4 md:hidden z-[99]">
          {navItems.map((item) => (
            <button
              key={item.path}
              className={`${currentPath === item.path || (item.path === "/introduction" && currentPath === "/")
                ? "text-[#b97979]"
                : "text-black"
                } hover:text-[#b97979] font-semibold text-lg`}
              onClick={() => {
                navigate(item.path);
                setIsMenuOpen(false);
              }}
            >
              {item.name}
            </button>
          ))}
        </div>

      )}


      {/* tab bar */}
      {/* <div className="text-xl grid grid-cols-4 gap-2">
        <button className={`${(currentPath === "/" || currentPath === "/introduction") ? "text-[#b97979]" : "text-[#000]"}  hover:text-[#b97979] cursor-pointer font-semibold`} onClick={() => navigate("/introduction")}>
          {" "}
          Introduction
        </button>
        <button className={`${(currentPath === "/projects") ? "text-[#b97979]" : "text-[#000]"}  hover:text-[#b97979] cursor-pointer font-semibold`} onClick={() => navigate("/projects")}>
          Projects
        </button>
        <button className={`${(currentPath === "/activities") ? "text-[#b97979]" : "text-[#000]"}  hover:text-[#b97979] cursor-pointer font-semibold`} onClick={() => navigate("/activities")}>
          Activities
        </button>
      </div> */}
    </div>
  );
};

export default Header;
