import React from "react";
import portfolioImg from "../assets/portfolio.png";
import Introduction from "../components/introduction/Introduction";
import Header from "../components/common/header/Header";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
