import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import Helmet from "react-helmet";
import ApplicationRouter from "./Containers/ApplicationRouter";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Helmet
          defaultTitle="Dundee Daily News "
          titleTemplate="%s • Dundee Daily News"
        >
          {/* // TODO add favicon */}
        </Helmet>
        <ApplicationRouter />
      </ApolloProvider>
    </>
  );
}

export default App;
