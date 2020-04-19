// CROSS == 1
// CIRCLE == 2
// CROSS ORANGE = 3
// CIRCLE ORANGE = 4

import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import Turns from "../../components/turns/turns.component";
import { ReactComponent as Cross96px } from "../../assets/cross-96px.svg";
import { ReactComponent as Circle96px } from "../../assets/circle-96px.svg";
import Scores from "../../components/scores/scores.component";
import {
  playerWinHoriz,
  playerWinVert,
  playerWinDiag,
  gameDraw,
} from "../../utils";

import "./game.styles.scss";

let socket;

const GamePage = ({ location }) => {
  const [room, setRoom] = useState("");
  const [player, setPlayer] = useState("");
  const [grid, setGrid] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [player2Turn, setPlayer2Turn] = useState(true);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [drawToggle, setDrawToggle] = useState(false);
  const [circleToggle, setCircleToggle] = useState(false);
  const [crossToggle, setCrossToggle] = useState(false);

  const ENDPOINT = "https://tic-tac-toe-online-quentingrch.herokuapp.com/";

  useEffect(() => {
    const { room, player } = queryString.parse(location.search);
    setPlayer(player);
    socket = io(ENDPOINT);
    setRoom(room);
    socket.emit("join", { player, room });
    socket.on("");
    socket.on("nextTurn", ({ newGrid, newGridFor }) => {
      if (newGridFor === 1 && player === "cross") {
        setGrid(newGrid);
        setPlayer2Turn(newGridFor === 2 ? true : false);
      } else if (newGridFor === 2 && player === "circle") {
        setGrid(newGrid);
        setPlayer2Turn(newGridFor === 2 ? true : false);
      } else {
        return;
      }
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  const handleClick = (i, j) => {
    let value = player === "cross" ? 1 : 2;
    if (player2Turn && player === "cross")
      return alert("You can't play it's not your turn");
    if (!player2Turn && player === "circle")
      return alert("You can't play it's not your turn");
    if (grid[i][j] !== 0) return;
    let newGrid = grid.map((row, indexRow) => {
      if (i !== indexRow) return row;
      return row.map((cell, indexCell) => {
        if (j !== indexCell) return cell;
        return (cell = value);
      });
    });
    setGrid(newGrid);
    socket.emit("newGrid", { newGrid, player2Turn });
    setPlayer2Turn(!player2Turn);
  };

  useEffect(() => {
    let playerWon =
      playerWinHoriz(grid) ||
      playerWinVert(grid) ||
      playerWinDiag(grid) ||
      false;
    if (!playerWon) {
      if (gameDraw(grid)) {
        setDrawToggle(true);
        setGrid([
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ]);
      }
    } else {
      setGrid([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]);
      playerWon === 1
        ? setPlayer1Score(player1Score + 1)
        : setPlayer2Score(player2Score + 1);
      playerWon === 1 ? setCrossToggle(true) : setCircleToggle(true);
    }
  }, [grid]);

  return (
    <div className="gamePage">
      <div className="players-container">
        <Turns player={player} turn={player2Turn ? 2 : 1} />
      </div>
      <div className="grid-container">
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
                    <Cross96px />
                  ) : grid[i][j] === 2 ? (
                    <Circle96px />
                  ) : null}
                </div>
              );
            });
          })}
        </div>
      </div>
      <div className="scores-container">
        <h1>Room: {room}</h1>
        <Scores
          player={player}
          player1Score={player1Score}
          player2Score={player2Score}
        />
      </div>
      <div
        className={drawToggle ? "round active" : "round "}
        onClick={() => {
          setDrawToggle(false);
        }}
      >
        <h2>DRAW</h2>
        <p>Click anywhere to launch the next round</p>
      </div>
      <div
        className={crossToggle ? "round active" : "round "}
        onClick={() => {
          setCrossToggle(false);
        }}
      >
        <h2>CROSS PLAYER WON</h2>
        <p>Click anywhere to launch the next round</p>
      </div>
      <div
        className={circleToggle ? "round active" : "round "}
        onClick={() => {
          setCircleToggle(false);
        }}
      >
        <h2>CIRCLE PLAYER WON</h2>
        <p>Click anywhere to launch the next round</p>
      </div>
    </div>
  );
};

export default GamePage;
