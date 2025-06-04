import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="w-full h-16 flex items-center justify-between px-8">
      <div className="text-center text-gray-700 font-bold">
        <h1
          className="text-3xl text-[#b97979] h-[100%] tracking-tightest"
          style={{ fontFamily: "Pacifico" }}
        >
          TTT 's Portfolio
        </h1>
      </div>
      <div className="text-xl grid grid-cols-4 gap-2">
        <button className="hover:text-[#b97979] cursor-pointer font-semibold">
          {" "}
          Introduction
        </button>
        <button className="hover:text-[#b97979] cursor-pointer font-semibold">
          Projects
        </button>
        <button className="hover:text-[#b97979] cursor-pointer font-semibold">
          Activities
        </button>
      </div>
    </div>
  );
};

export default Header;
