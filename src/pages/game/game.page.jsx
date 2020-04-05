import React from "react";

import Turns from "../../components/turns/turns.component";
import Grid from "../../components/grid/grid.component";
import Scores from "../../components/scores/scores.component";

import "./game.styles.scss";

const GamePage = () => {
  return (
    <div className="gamePage">
      <div className="players-container">
        <Turns />
      </div>
      <div className="grid-container">
        <Grid />
      </div>
      <div className="scores-container">
        <Scores />
      </div>
    </div>
  );
};

export default GamePage;
