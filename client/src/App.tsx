import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "dotenv/config";
import React from "react";
import Helmet from "react-helmet";
import { useLocation } from "react-router";
import AdminPageHeader from "./Admin/Containers/AdminPage/AdminPageHeader";
import ApplicationRouter from "./ApplicationRouter";
import { isProtectedPath } from "./utils/isProtectedPath";
//require("dotenv").config({ path: __dirname + "/.env" });

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
  credentials: "include",
});
console.log("process.env.REACT_APP_API_URL", process.env.REACT_APP_API_URL);
function App() {
  const location = useLocation();
  return (
    <>
      <ApolloProvider client={client}>
        <Helmet
          defaultTitle="Dundee Daily News "
          titleTemplate="%s • Dundee Daily News"
        >
          {/* // TODO add favicon */}
        </Helmet>

        {isProtectedPath(location.pathname) && <AdminPageHeader />}
        <ApplicationRouter />
      </ApolloProvider>
    </>
  );
}

export default App;
