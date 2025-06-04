import React from "react";
import portfolioImg from "../assets/portfolio.png";
import Introduction from "../components/Introduction";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <img
        src={portfolioImg}
        alt="Portfolio"
        style={{
          width: "100%",
          marginBottom: "1rem",
          borderRadius: "8px",
          height: "80%",
        }}
      />
      <h1 className="text-5xl font-bold mb-4 text-center">
        Welcome to My Portfolio
      </h1>
      <Introduction />
    </div>
  );
};

export default Home;
