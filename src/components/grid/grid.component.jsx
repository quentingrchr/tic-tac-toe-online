import React from "react";
import { ReactComponent as Cross96px } from "../../assets/cross-96px.svg";
import { ReactComponent as Circle96px } from "../../assets/circle-96px.svg";
import { playerWinHoriz, playerWinVert } from "./grid.utils";

import "./grid.styles.scss";



const Grid = ({ grid }) => (
  <div className="grid">
    {grid.map((r, i) => {
      return grid[i].map((c, j) => {
        return (
          <div
            onClick={() => {
              handleClick(i, j);
            }}
            key={i + j}
            className="cell"
            data-row={i}
            data-col={j}
          >
            {grid[i][j] === 1 ? (
              <Circle96px />
            ) : grid[i][j] === 2 ? (
              <Cross96px />
            ) : null}
          </div>
        );
      });
    })}
  </div>
);

export default Grid;
