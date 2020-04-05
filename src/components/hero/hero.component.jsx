import React from "react";
import { Link } from "react-router-dom";

import Button from "../button/button.component";
import "./hero.styles.scss";

const Hero = () => {
  return (
    <div className="hero">
      <h1>
        <em>Tic</em> Tac <em>Toe</em>
      </h1>
      <p>online multiplayer</p>

      <Link to="/room">
        <Button isPrimary content="Let's go !" />
      </Link>
    </div>
  );
};

export default Hero;
