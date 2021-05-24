import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../Public/HomePage";
import AdminPage from "../Admin/Containers/AdminPage";
import CreateStoryPage from "../Admin/Containers/CreateStoryPage";
import EditStoryPage from "../Admin/Containers/EditStoryPage";
import StoryPage from "../Public/StoryPage";

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

        <Route path="/edit/:id">
          <EditStoryPage />
        </Route>

        <Route path="/story/:id">
          <StoryPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default ApplicationRouter;
