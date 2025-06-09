import React, { useEffect, useState } from 'react'
import TeamProjects from '../components/team-projects/TeamProjects';
import PersonalProjects from '../components/personal-projects/PersonalProjects';

type Props = {}

const Projects = (props: Props) => {
  const [showTeamProject, setShowTeamProject] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <div className="pt-16 min-h-screen">


      <span className=" md:px-20 flex items-center justify-center mt-5">
        <span className={`mr-5 px-5 py-2  md:rounded-full rounded-2xl border-4 ${showTeamProject ? " border-red-600 bg-red-50" : "border-gray-500"}`}>Team's project</span>
        <span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" checked={!showTeamProject} onClick={() => { setShowTeamProject(prev => !prev) }} />
            <div className="group peer ring-0 [box-shadow:1px_3px_0px_0px_#000]  bg-gradient-to-r from-rose-400 to-red-900  rounded-full outline-none duration-1000 after:duration-300 w-24 h-12  shadow-md  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:[background:#0D2B39] 
          peer-checked:after:rotate-180 after:[background:conic-gradient(from_135deg,_#b2a9a9,_#b2a8a8,_#ffffff,_#d7dbd9_,_#ffffff,_#b2a8a8)]  after:outline-none  after:h-10 after:w-10 after:top-1 after:left-1 peer-checked:after:translate-x-12 peer-hover:after:scale-95 peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-emerald-900">
            </div>
          </label>
        </span>
        <span className={`ml-5 px-5 py-2  md:rounded-full rounded-2xl border-4 ${!showTeamProject ? " border-green-600 bg-green-50" : "border-gray-500"}`}>Personal project</span>
      </span>


      {/* content to show */}
      {showTeamProject ?
        (
          <TeamProjects />
        )
        :
        (
          <PersonalProjects />
        )}
    </div>
  )
}

export default Projects
