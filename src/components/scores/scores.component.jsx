import React from "react";

import "./scores.styles.scss";

const Scores = ({ player1Score, player2Score, player }) => {
  return (
    <div className="scores">
      <div className="score">
        {player === "circle" ? "Your" : "His"} score: {player2Score}
      </div>
      <div className="score">
        {player === "cross" ? "Your" : "His"} score: {player1Score}
      </div>
    </div>
  );
};

export default Scores;
