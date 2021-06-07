import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../Public/HomePage";
import AdminPage from "../Admin/Containers/AdminPage";
import CreateStoryPage from "../Admin/Containers/CreateStoryPage";
import EditStoryPage from "../Admin/Containers/EditStoryPage";
import StoryPage from "../Public/StoryPage";
import NeighborhoodManagementPage from "../Public/NeighborhoodManagementPage";
import TopicManagementPage from "../Public/TopicManagementPage";
import NeighborhoodPage from "../Public/NeighborhoodManagementPage/NeighborhoodPage";
import TopicPage from "../Public/TopicManagementPage/TopicPage/TopicPage";
import ContactPage from "../Public/ContactPage/ContactPage";
import LogInPage from "../Admin/Containers/LogInPage";

const ApplicationRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route path="/admin">
        <AdminPage />
      </Route>

      <Route path="/log-in">
        <LogInPage />
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
      <Route exact path="/neighborhood">
        <NeighborhoodManagementPage />
      </Route>
      <Route path="/neighborhood/:town">
        <NeighborhoodPage />
      </Route>
      <Route exact path="/topic">
        <TopicManagementPage />
      </Route>
      <Route path="/topic/:category">
        <TopicPage />
      </Route>
      <Route path="/contact">
        <ContactPage />
      </Route>
      {/* <ProtectedRoute path="/admin" component={AdminPage} isAuth={false} /> */}
    </Switch>
  );
};

export default ApplicationRouter;
