import React from 'react'
import imgEducation from "../../assets/FPT-logo.png";
import imgEdu from "../../assets/image_2.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceLaughWink, faStar } from '@fortawesome/free-regular-svg-icons'
import { faGraduationCap, faSchool, } from '@fortawesome/free-solid-svg-icons';

type Props = {}

const MyEducation = (props: Props) => {
    const viewCert = () => {
        window.open("https://drive.google.com/file/d/1p08No40opoJPgOveU9mVu6i7hh4G0yOu/view?usp=sharing", "_blank");
    }

    return (
        <div className='w-full md:px-10 px-5 py-10 '>
            <h2 className="text-center text-3xl font-bold pt-4 underline"><FontAwesomeIcon icon={faGraduationCap} className='mr-2 ' /> My Education</h2>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-5'>
                <div className='flex items-center justify-center'>
                    <img src={imgEdu} alt="education" className='w-2/5' />
                </div>
                <div>
                    <img src={imgEducation} alt="Education Image" className="mr-auto ml-auto w-52  mt-4" />
                    <h3 className="text-2xl font-bold mt-4"> <FontAwesomeIcon icon={faSchool} className='mr-2' />FPT University, Ho Chi Minh City, Viet Nam</h3>
                    <span className='ml-10'>January 2022 - March 2025</span>
                    <span className='flex items-center '>
                        <p><FontAwesomeIcon icon={faGraduationCap} className='ml-2 mr-2' />Bachelor of Software Engineering</p>

                        <button
                            onClick={() => viewCert()}
                            className='px-1 border-2 border-[#b97979] ml-2 rounded-sm font-mono font-bold text-[#848484] cursor-pointer hover:bg-pink-50 hover:text-[#000]'>
                            My certification
                        </button>
                    </span>

                    <p><FontAwesomeIcon icon={faStar} className='mr-2' /> GPA: 3.0/4.0</p>

                    <p className="mt-2">
                        <FontAwesomeIcon icon={faFaceLaughWink} className='mr-2' /> I completed my Bachelor's degree in Software Engineering at FPT University, where I gained a solid foundation in software development principles and practices.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MyEducation