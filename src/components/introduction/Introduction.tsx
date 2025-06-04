import React from "react";
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
  faLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

type Props = {};

const Introduction = (props: Props) => {
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
      </div>
      <div className="bg-[#FFF6F6]">
        <h2 className="text-center text-3xl font-bold pt-4">About me</h2>

        <div className="p-10 grid-cols-2 grid gap-4 items-center">
          <div>
            {" "}
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "Pacifico" }}
            >
              Hello, I'm Truc{" "}
            </h2>
            <p style={{ fontFamily: "Concert One" }}>
              I am a fresher front-end developer. I recently graduated in
              Software Engineering from FPT University. I have six months of
              internship experience working with Angular at FPT Software and
              have also developed several React.js projects during my university
              studies.
            </p>
            <div className="mt-4">
              <strong>My Personal information:</strong>
              <ul className="list-disc ml-2 list-none">
                <li>
                  <FontAwesomeIcon icon={faCircleUser} className="mr-2 w-4" />
                  <strong>Full Name:</strong> TRUONG THUY TRUC
                </li>
                <li>
                  <FontAwesomeIcon icon={faCakeCandles} className="mr-2 w-4" />
                  <strong>Birthday:</strong> 05.03.2002
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-4" />
                  <strong>Email:</strong> truc5302@gmail.com
                </li>
                <li>
                  <FontAwesomeIcon icon={faMobileScreen} className="mr-2 w-4" />
                  <strong>Phone number:</strong> (+84) 0377373426
                </li>
                <li>
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2 w-4" />
                  <strong>Address:</strong> district 9, Ho Chi Minh City,
                  Vietnam
                </li>
              </ul>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/truong.thuy.truc.2024"
                target="_blank"
                className="text-3xl text-blue-600 border-2 border-[#000] p-1 rounded-xl w-10 h-10 flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://www.instagram.com/trucie_5302/"
                target="_blank"
                className="text-3xl text-pink-600 border-2 border-[#000] p-1 rounded-xl w-10 h-10 flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faSquareInstagram} />
              </a>
              <a
                href="https://www.linkedin.com/in/truongthuytruc/"
                target="_blank"
                className="text-3xl text-blue-700 border-2 border-[#000] p-1 rounded-xl w-10 h-10 flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <div className="mb-10">
            <img src={imgIntro} alt="image personal" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
