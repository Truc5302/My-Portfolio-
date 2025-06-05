import { faAngular, faCss3Alt, faFigma, faGithub, faHtml5, faJs, faReact, faSass, } from '@fortawesome/free-brands-svg-icons'
import { faC, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import imgFPTSoftware from '../../assets/FPT_Software_logo.png'
import { useNavigate } from "react-router-dom";
type Props = {}

const SkillsHobbies = (props: Props) => {
    const navigate = useNavigate();
    return (
        <div className='grid grid-cols-3 gap-2 p-10'>
            <div className='border-t-4 border-b-4 border-[#b97979] rounded-2xl p-2'>
                <h2 className='text-center underline text-3xl'>Skills</h2>
                <div className='border-[1px] p-2 border-[#000] rounded-2xl font-mono mb-1'>
                    <p>Languages: </p>
                    <div className='flex flex-wrap'>
                        <span className='mr-2 p-1 border-[1px] border-[#ccc] rounded-lg'
                        >
                            <FontAwesomeIcon icon={faHtml5} className='text-orange-400' />HTML5
                        </span>
                        <span
                            className='mr-2 mt-1 p-1 border-[1px] border-[#ccc] rounded-lg'
                        >
                            <FontAwesomeIcon icon={faCss3Alt} className='text-blue-400' />CSS3
                        </span>
                        <span
                            className='mr-2 mt-1 p-1 border-[1px] border-[#ccc] rounded-lg'
                        >
                            <FontAwesomeIcon icon={faSass} className='text-pink-400' />SASS
                        </span>
                        <span
                            className='mr-2 mt-1 p-1 border-[1px] border-[#ccc] rounded-lg'
                        >
                            <FontAwesomeIcon icon={faJs} className='text-yellow-400' />JavaScript
                        </span>
                        <span
                            className='mt-1 p-1 border-[1px] border-[#ccc] rounded-lg'
                        >
                            TypeScript
                        </span>
                    </div>
                </div>
                <div className='border-[1px] p-2 border-[#000] rounded-2xl font-mono mb-1'>
                    <p>Libraries & Frameworks: </p>
                    <p className='flex flex-wrap'>
                        <p className='p-1 border-[1px] border-[#ccc] rounded-lg  mr-1'><FontAwesomeIcon icon={faReact} className='text-blue-400' />React</p>
                        <p className='p-1 border-[1px] border-[#ccc] rounded-lg  mr-1'><FontAwesomeIcon icon={faAngular} className='text-red-400' />Angular 2</p>
                        <p className='p-1 border-[1px] border-[#ccc] rounded-lg  mr-1'>Tailwind CSS</p>
                        <p className='p-1 border-[1px] border-[#ccc] rounded-lg  mr-1'>Redux Toolkit</p>
                        <p className='p-1 border-[1px] border-[#ccc] rounded-lg  '><FontAwesomeIcon icon={faReact} className='text-blue-400' />React Native</p>
                    </p>

                </div>
                <div className='border-[1px] p-2 border-[#000] rounded-2xl font-mono mb-1'>
                    <p>Tools: </p>
                    <div className='flex flex-wrap'>
                        <span className='p-1 border-[1px] border-[#ccc] rounded-lg  mr-1'><FontAwesomeIcon icon={faGithub} />Git</span>
                        <span className='p-1 border-[1px] border-[#ccc] rounded-lg  mr-1'><FontAwesomeIcon icon={faFigma} />Figma</span>
                        <span className='p-1 border-[1px] border-[#ccc] rounded-lg  mr-1'>Canva</span>
                        <span className='p-1 border-[1px] border-[#ccc] rounded-lg  mr-1'>VS Code</span>
                        <span className='p-1 border-[1px] border-[#ccc] rounded-lg  '>Postman</span>
                    </div>

                </div>

                <div className='border-[1px] p-2 border-[#000] rounded-2xl font-mono mb-1'>
                    <p>Soft skills: </p>
                    <div className='flex flex-wrap'>
                        <span className='p-1 border-[1px] border-[#ccc] rounded-lg  mr-1'>Teamwork</span>
                        <span className='p-1 border-[1px] border-[#ccc] rounded-lg  mr-1'>Communication</span>
                        <span className='p-1 border-[1px] border-[#ccc] rounded-lg  '>Problem-solving</span>
                    </div>

                </div>


            </div>
            <div className='bg-[#fdf8f8] rounded-2xl p-2'>
                <h2 className='text-center underline text-3xl'>Experience</h2>
                <div className="relative border border-gray-300 p-4 rounded-2xl font-mono mb-4 shadow-sm bg-white mt-10">
                    <h3 className='absolute -rotate-12 -top-4 -left-1 font-bold p-1 bg-[#000] text-[#fff] rounded-lg'>Work Experience</h3>
                    <h3 className="text-lg font-semibold mb-2 mt-2 text-gray-800 flex"><img src={imgFPTSoftware} alt="fptsoftware" className='w-16 mr-1' /> FPT Software</h3>
                    <ul className="space-y-1 text-sm text-gray-700">
                        <li><strong>📅 Duration:</strong> 6 months</li>
                        <li><strong>🕒 Time:</strong> 9/2023 – 03/2024</li>
                        <li><strong>💼 Position:</strong>Front-end Developer Intern</li>
                        <li><strong>👩‍💻 Technology:</strong> <FontAwesomeIcon icon={faAngular} className='text-red-400 mr-2' />Angular2</li>
                    </ul>
                </div>

                <div onClick={() => navigate("/projects")}
                    className="relative border border-gray-300 p-4 rounded-2xl font-mono mb-4 shadow-sm bg-white mt-5 
                    hover:cursor-pointer hover:transform hover:scale-105 transition-all duration-300 hover:font-bold">
                    <h3 className='absolute -rotate-12 -top-4 -left-1 font-bold p-1 bg-[#000] text-[#fff] rounded-lg'>Projects</h3>
                    <div className='flex justify-between align-middle items-center px-10' ><h3 className='mt-2'> View Projects</h3>
                        <FontAwesomeIcon icon={faRightLong} /></div>

                </div>

            </div>
            <div className='border-t-4 border-b-4 border-[#b97979] rounded-2xl p-2 flex flex-col items-center'>
                <h2 className='text-center underline text-3xl'>Hobbies</h2>
                <ul className="w-fit space-y-1 text-gray-700 py-5 px-10 text-lg border border-black rounded-xl mt-2 ">
                    <li>🏸 Badminton</li>
                    <li>🏓 Tabble tennis</li>
                    <li>🎹 Play Piano</li>
                    <li>📖 Read Book</li>
                    <li>🎞 Watch film</li>
                </ul>

                <div>
                    <h2 className='text-center underline text-3xl mt-2'>Languages</h2>
                    <div className='w-full space-y-1 text-gray-700 p-5 text-lg border border-black rounded-xl mt-2 '>
                        <p>Vietnamese: Native</p>
                        <p>English: B1 level</p>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default SkillsHobbies