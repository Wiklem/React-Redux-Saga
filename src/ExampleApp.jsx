import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./views/NotFound/index";
import routes from "./router/index";

export default () => {
  return (
    <Switch>
      {routes.map((prop, key) => {
        return (
          <Route key={key} exact path={prop.path} component={prop.component} />
        );
      })}
      <Route component={NotFound} />
    </Switch>
  );
};
