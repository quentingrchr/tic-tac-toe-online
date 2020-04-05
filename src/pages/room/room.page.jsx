import React from "react";
import { Link } from "react-router-dom";

import "./room.styles.scss";

import Button from "../../components/button/button.component";
import Github from "../../components/github/github.component";

const RoomPage = () => {
  return (
    <div className="roomPage">
      <div className="create-container">
        <p className="text">
          <em>create</em> a room and invite your friend
        </p>
        <Link to={`/game?room=${67475747}&player=${"cross"}`}>
          <Button content="create" />
        </Link>
      </div>
      <div className="join-container">
        <p className="text">
          or <br />
          <em>join</em> an existing room by copying the link{" "}
        </p>
        <div className="form">
          <input
            className="input-text"
            placeholder="Paste your url here"
            type="text"
          />
          <Button content="join" />
        </div>
        <Github />
      </div>
    </div>
  );
};

export default RoomPage;
