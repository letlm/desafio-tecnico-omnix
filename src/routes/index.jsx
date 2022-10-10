import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Offers from "../pages/Offers";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route exact path="/offers">
        <Offers />
      </Route>
    </Switch>
  );
}

export default Routes;
