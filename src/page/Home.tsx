import React from "react";
import portfolioImg from "../assets/portfolio.png";
import Introduction from "../components/introduction/Introduction";
import Header from "../components/common/layouts/header/Header";
import MyEducation from "../components/education/MyEducation";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="pt-16">
      <img
        src={portfolioImg}
        alt="Portfolio"
        style={{
          width: "80%",
          marginBottom: "1rem",
          borderRadius: "8px",
          height: "80%",
          marginLeft: "10%",
          marginRight: "10%",
        }}
      />
      <Introduction />
      <MyEducation/>
    </div>
  );
};

export default Home;
