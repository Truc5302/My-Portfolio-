import React, { useMemo, useState } from "react";
import imgIntro from "../../assets/image_1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faCircleUser,
  faEnvelope,
  faLocationDot,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faSquareInstagram,
  faSquareThreads,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import { Button, Tooltip, TooltipProps } from "antd";

type Props = {};

const Introduction = (props: Props) => {
  const navigate = useNavigate();

  const [arrow, setArrow] = useState<'Show' | 'Hide' | 'Center'>('Show');

  const mergedArrow = useMemo<TooltipProps['arrow']>(() => {
    if (arrow === 'Hide') {
      return false;
    }

    if (arrow === 'Show') {
      return true;
    }

    return {
      pointAtCenter: true,
    };
  }, [arrow]);

  const socialsMed = [
    {
      route: "https://www.linkedin.com/in/truongthuytruc/",
      textColor: "text-blue-700",
      icon: faLinkedin,
      tooltip: "Linkedin",
    },
    {
      route: "https://github.com/Truc5302?tab=repositories",
      textColor: "",
      icon: faGithub,
      tooltip: "Git",
    },
    {
      route: "https://www.facebook.com/truong.thuy.truc.2024",
      textColor: "text-blue-600",
      icon: faFacebook,
      tooltip: "Facebook",
    },
    {
      route: "https://www.instagram.com/trucie_5302/",
      textColor: "text-pink-600",
      icon: faSquareInstagram,
      tooltip: "Instagram",
    },

    {
      route: "https://www.threads.com/@trucie_5302",
      textColor: "",
      icon: faSquareThreads,
      tooltip: "Threads",
    },



  ]

  const scrollToContact = () => {
    const contact = document.getElementById("about-me-contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className=" mt-6">
      <div className="text-left mb-6 px-20 font-pacifico">
        <p>
          Welcome to my portfolio! Here, you will find a collection of my
          projects, skills, and experiences. I am passionate about web
          development and always eager to learn new technologies.
        </p>
        <p>
          Feel free to explore my work and reach out if you have any questions
          or opportunities for collaboration.
        </p>
        <div className="flex gap-4 mt-4 justify-center">
          <button onClick={() => { navigate("/projects") }} className="px-5 py-2 bg-[#b97979] rounded-lg text-[#fff] hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
            View projects
          </button>
          <button onClick={() => scrollToContact()} className="px-5 py-2 rounded-lg border-2 border-[#b97979] hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
            Contact me
          </button>
        </div>
      </div>
      <div id="about-me-contact" className="bg-[#FFF6F6] px-10 " >
        <h2 className="text-center text-3xl font-bold pt-4 underline">About me </h2>

        <div className="p-10 grid-cols-2 grid gap-4 items-center">
          <div>
            {" "}
            <h2
              className="text-3xl font-bold text-center"
              style={{ fontFamily: "Pacifico" }}
            >
              Hello, I'm Truc{" "}
            </h2>
            <p style={{ fontFamily: "Concert One" }} className="text-center">
              I am a fresher front-end developer. I recently graduated in
              Software Engineering from FPT University. I have six months of
              internship experience working with Angular at FPT Software and
              have also developed several React.js projects during my university
              studies.
            </p>
            <div className="mt-4">
              <strong className="text-2xl text-center ">My Personal informations:</strong>
              <ul className="list-disc ml-2 list-none">
                <li>
                  <FontAwesomeIcon icon={faCircleUser} className="mr-2 w-4 text-[#b97979]" />
                  <strong>Full Name:</strong> TRUONG THUY TRUC
                </li>
                <li>
                  <FontAwesomeIcon icon={faCakeCandles} className="mr-2 w-4 text-[#b97979]" />
                  <strong>Birthday:</strong> 05.03.2002
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-4 text-[#b97979]" />
                  <strong>Email:</strong> truc5302@gmail.com
                </li>
                <li>
                  <FontAwesomeIcon icon={faMobileScreen} className="mr-2 w-4 text-[#b97979]" />
                  <strong>Phone number:</strong> (+84) 037 7373 426
                </li>
                <li>
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2 w-4 text-[#b97979]" />
                  <strong>Address:</strong> district 9, Ho Chi Minh City,
                  Vietnam
                </li>
              </ul>
            </div>
            <div className="flex gap-4 mt-4">
              {socialsMed.map((item) => (
                <Tooltip key={item?.route} title={item.tooltip} arrow={mergedArrow}>
                  <a
                    href={item.route}
                    target="_blank"
                    className={`text-3xl ${item.textColor} border-2 border-[#000] p-1 rounded-xl w-10 h-10 flex items-center justify-center`}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                  </a>
                </Tooltip>
              ))}

            </div>
          </div>
          <div className="mb-10 flex items-center justify-center">
            <img
              src={imgIntro}
              alt="image personal"
              className=" h-96 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
