import React from "react";
import { Route, RouteProps } from "react-router-dom";
import HomePage from "../../Public/HomePage";

interface ProtectedRouteProps extends RouteProps {
  isAuth: boolean;
  component: React.ComponentClass;
}

//MAKE password modal
//if submit see if password is correct
//if it is render
//if not kick back to home page

//TODO find a way to protect create and edit form

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuth,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component />;
        } else {
          return <HomePage />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
