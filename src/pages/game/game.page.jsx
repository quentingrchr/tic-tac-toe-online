import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import Turns from "../../components/turns/turns.component";
import Grid from "../../components/grid/grid.component";
import Scores from "../../components/scores/scores.component";

import "./game.styles.scss";

let socket;

const GamePage = ({ location }) => {
  const [room, setRoom] = useState("");
  const [player, setPlayer] = useState("");
  const [grid, setGrid] = useState([
    [1, 0, 0],
    [0, 2, 0],
    [0, 0, 0],
  ]);
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { room, player } = queryString.parse(location.search);
    socket = io(ENDPOINT);

    setRoom(room);
    setPlayer(player);

    socket.emit();
    console.log(socket);
  }, [ENDPOINT, location.search]);

  return (
    <div className="gamePage">
      <div className="players-container">
        <Turns />
      </div>
      <div className="grid-container">
        <Grid grid={grid} />
      </div>
      <div className="scores-container">
        <h1>Room: {room}</h1>
        <Scores />
      </div>
    </div>
  );
};

export default GamePage;
