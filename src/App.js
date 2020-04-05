import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../src/pages/home/home.page";
import RoomPage from "../src/pages/room/room.page";
import GamePage from "../src/pages/game/game.page";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/room" component={RoomPage} />
          <Route exact path="/game" component={GamePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
