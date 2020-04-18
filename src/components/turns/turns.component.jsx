import React from "react";
import { ReactComponent as Cross32pxIcon } from "../../assets/cross-32px.svg";
import { ReactComponent as Circle32pxIcon } from "../../assets/circle-32px.svg";

import "./turns.styles.scss";

const Turns = ({ turn, player }) => {
  return (
    <div className="turns">
      <div className={`turn your-turn ${turn === 1 ? "active" : null}`}>
        <p>it’s {player === "cross" ? "your" : "his"} turn</p>
        <Cross32pxIcon />
      </div>
      <div className={`turn your-turn ${turn === 2 ? "active" : null}`}>
        <p>it’s {player === "circle" ? "your" : "his"} turn</p>
        <Circle32pxIcon />
      </div>
    </div>
  );
};

export default Turns;
