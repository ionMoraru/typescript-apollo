import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import { Header } from "../header/header";
import { Home } from "../../pages/home/home";
import { About } from "../../pages/about/about";

import { client } from "../../common/apollo-client";
import "../../common/styles";
export const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
};
