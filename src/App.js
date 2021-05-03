import React from "react";
import { Route, Switch } from "react-router-dom";

import Game from "./components/Game/Game";
import Leaderboard from "./components/Leaderboard/Leaderboard";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Game} />
        <Route exact path="/leaderboard" component={Leaderboard} />
      </Switch>
    </div>
  );
};

export default App;
