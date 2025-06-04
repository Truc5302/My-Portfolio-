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
        style={{ width: "100%", marginBottom: "1rem", borderRadius: "8px" }}
      />
      <h1>Welcome to My Portfolio</h1>
      <p>This is the home page of my portfolio website.</p>
      <Introduction />
    </div>
  );
};

export default Home;
