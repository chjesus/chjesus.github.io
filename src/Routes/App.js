import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../views/Home";
import Error404 from "../views/Error";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
