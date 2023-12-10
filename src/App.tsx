import { FC } from "react";

import "./App.css";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: " https://spacex-production.up.railway.app/",
  cache: new InMemoryCache(),
});

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <main>
        <Header />
        <Outlet />
      </main>
    </ApolloProvider>
  );
};

export default App;
