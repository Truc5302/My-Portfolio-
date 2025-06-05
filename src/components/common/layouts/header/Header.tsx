import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
const currentPath = location.pathname;

  return (
    <div className="w-full h-16 flex items-center justify-between px-8 fixed top-0 bg-white shadow-md z-100">
      <div className="text-center text-gray-700 font-bold">
        <h1
          className="text-3xl text-[#b97979] h-[100%] tracking-tightest hover:cursor-pointer"
          style={{ fontFamily: "Pacifico" }}
          onClick={() => navigate("")}
        >
          TTT 's Portfolio
        </h1>
      </div>
      <div className="text-xl grid grid-cols-4 gap-2">
        <button className={`${(currentPath === "/" || currentPath ==="/introduction") ? "text-[#b97979]" : "text-[#000]"}  hover:text-[#b97979] cursor-pointer font-semibold`} onClick={() => navigate("/introduction")}>
          {" "}
          Introduction
        </button>
        <button className={`${(currentPath === "/projects" ) ? "text-[#b97979]" : "text-[#000]"}  hover:text-[#b97979] cursor-pointer font-semibold`} onClick={() => navigate("/projects")}>
          Projects
        </button>
        <button className={`${(currentPath === "/activities" ) ? "text-[#b97979]" : "text-[#000]"}  hover:text-[#b97979] cursor-pointer font-semibold`} onClick={() => navigate("/activities")}>
          Activities
        </button>
      </div>
    </div>
  );
};

export default Header;
