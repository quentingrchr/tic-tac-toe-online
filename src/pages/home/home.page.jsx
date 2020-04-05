import React from "react";
import Hero from "../../components/hero/hero.component";
import Github from "../../components/github/github.component";
import "./home.styles.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <Hero />
      <Github />
    </div>
  );
};

export default HomePage;
