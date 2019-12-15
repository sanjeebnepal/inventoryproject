import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./route";
export default () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
};
