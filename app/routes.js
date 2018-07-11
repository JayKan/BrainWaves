/* eslint flowtype-errors/show-errors: 0 */
import React from "../../.cache/typescript/2.9/node_modules/@types/react";
import { Switch, Route } from "../../.cache/typescript/2.9/node_modules/@types/react-router";
import App from "./common/App";
import HomePage from "./common/HomePage";
import ExperimentRunPage from "./experiment/ExperimentRunPage";

export default () => (
  <App>
    <Switch>
      <Route path="/experimentRun" component={ExperimentRunPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
