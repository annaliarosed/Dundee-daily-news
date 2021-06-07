import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import Helmet from "react-helmet";
import { useLocation } from "react-router";
import AdminPageHeader from "./Admin/Containers/AdminPage/AdminPageHeader";
import ApplicationRouter from "./ApplicationRouter";
import { isProtectedPath } from "./utils/isProtectedPath";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  credentials: "include",
});

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
