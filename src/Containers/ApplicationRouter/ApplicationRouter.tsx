import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../HomePage";
import AdminPage from "../AdminPage";

const ApplicationRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default ApplicationRouter;
