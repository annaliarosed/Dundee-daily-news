import React from "react";
import Helmet from "react-helmet";
import ApplicationRouter from "./Containers/ApplicationRouter";
import HomePage from "./Containers/HomePage";

function App() {
  return (
    <>
      <Helmet
        defaultTitle="Dundee Daily News "
        titleTemplate="%s • Dundee Daily News"
      >
        {/* // TODO add favicon */}
      </Helmet>
      <ApplicationRouter />
      <HomePage />
    </>
  );
}

export default App;
