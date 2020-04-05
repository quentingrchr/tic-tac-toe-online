import React from "react";
import { ReactComponent as Cross32pxIcon } from "../../assets/cross-32px.svg";
import { ReactComponent as Circle32pxIcon } from "../../assets/circle-32px.svg";

import "./turns.styles.scss";

const Turns = () => {
  return (
    <div className="turns">
      <div className="turn your-turn active">
        <p>it’s your turn</p>
        <Cross32pxIcon />
      </div>
      <div className="turn his-turn">
        <p>it’s his turn</p>
        <Circle32pxIcon />
      </div>
    </div>
  );
};

export default Turns;
