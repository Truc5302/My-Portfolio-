import React, { useEffect } from "react";

type Props = {};

const Projects = (props: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return <div className="pt-16 min-h-screen">
    <p className="text-gray-700 leading-relaxed text-2xl px-10 border-2 rounded-2xl border-[#b97979] m-10">
      👩‍💻 During my time at university, I worked on several projects, both as part of a team and individually. Below are some of the most notable ones.
    </p>

    <span className=" px-20 flex items-center justify-center">
      <span className="mr-5 px-5 py-2 border-2 border-red-600 rounded-full">Team's project</span>
      <span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="group peer ring-0 [box-shadow:1px_3px_0px_0px_#000]  bg-gradient-to-r from-rose-400 to-red-900  rounded-full outline-none duration-1000 after:duration-300 w-24 h-12  shadow-md  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:[background:#0D2B39] 
          peer-checked:after:rotate-180 after:[background:conic-gradient(from_135deg,_#b2a9a9,_#b2a8a8,_#ffffff,_#d7dbd9_,_#ffffff,_#b2a8a8)]  after:outline-none  after:h-10 after:w-10 after:top-1 after:left-1 peer-checked:after:translate-x-12 peer-hover:after:scale-95 peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-emerald-900">
          </div>
        </label>
      </span>
      <span className="ml-5 px-5 py-2 border-2 border-green-600 rounded-full">Personal project</span>
    </span>
    <div></div>
  </div>;
};

export default Projects;
