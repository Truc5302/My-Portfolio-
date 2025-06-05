import { faAngular, faCss3Alt, faFigma, faGithub, faHtml5, faJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import { faC } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {}

const SkillsHobbies = (props: Props) => {
    return (
        <div className='grid grid-cols-3 gap-2 p-10'>
            <div className='border-t-2 border-b-2 border-[#b97979] rounded-2xl p-2'>
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
            <div className='bg-[#fdf8f8] rounded-2xl'>
                <h2 className='text-center underline text-3xl'>Experience</h2>
            </div>
            <div className='border-t-2 border-b-2 border-[#b97979] rounded-2xl p-2'>
                <h2 className='text-center underline text-3xl'>Hobbies</h2>

            </div>
        </div >
    )
}

export default SkillsHobbies