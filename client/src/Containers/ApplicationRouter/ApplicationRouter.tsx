import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../HomePage";
import AdminPage from "../AdminPage";
import CreateStoryPage from "../CreateStoryPage";

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
        <Route path="/create">
          <CreateStoryPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default ApplicationRouter;
