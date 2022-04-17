import { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const MainPage = lazy(() => import("./main-page"));

export const Routing = () => {
  return (
    <Switch>
      <Route exact path="/en" component={MainPage} />
      <Route exact path="/ru" component={MainPage} />
      <Route exact path="/tat" component={MainPage} />
      <Redirect to="/en" />
    </Switch>
  );
};
