import React from "react";

type Props = {};

const Introduction = (props: Props) => {
  return (
    <div className=" mt-6">
      <div className="text-left mb-6 px-12">
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
      <div>
        <div>
          {" "}
          <h2 className="text-3xl font-bold font-pacifico">Hello, I'm Truc </h2>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Introduction;
